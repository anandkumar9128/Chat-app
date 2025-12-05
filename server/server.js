import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { connectDb } from './lib/db.js';
import userRouter from './routes/user.routes.js';
import messageRouter from './routes/message.routes.js';
import { Server } from 'socket.io';

//create express app from http server
const app=express();
const server=http.createServer(app);

//initialize socket.io
export const io=new Server(server,{
    cors:{origin:"*"}
})

//Store online users
export const userSocketMap={}; //{user:id soketId}

//Socket.io connection handler
io.on("connection",(socket)=>{
    const userId=socket.handshake.query.userId;
    console.log("User Connected",userId);
    
    if(userId) userSocketMap[userId]=socket.id

    //Emit online users to all connected client
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on("disconnect",()=>{
        console.log("user Dissconnected",userId);
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

//middlewares setup
// Increase request body size to allow larger base64 image payloads from the client
app.use(express.json({limit:'10mb'}));
app.use(cors());

//routes setup
app.use("/api/status",(req,res)=>res.send("Server is live"))
app.use("/api/auth",userRouter)
app.use("/api/messages",messageRouter)

//connect to database
await connectDb();

if(process.env.NODE_ENV!=="production"){
    const PORT=process.env.PORT || 5000;
    server.listen(PORT,()=>{
        console.log(`server is running at http://localhost:${PORT}`);
    });
}
//Export server for vercel
export default server;
