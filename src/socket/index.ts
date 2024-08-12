import {io} from "socket.io-client";

export const socket = io('http://localhost:1337',{ // [1] Important as fuck
    // reconnectionDelay: 1000,
    // reconnection:true,
    // reconnectionAttempts: 10,
    // transports: ['websocket'],
    agent: false, // [2] Please don't set this to true
    rejectUnauthorized: false
});
socket.connect();
console.log(socket)

socket.on("connect_error", (err) => {
    console.log(` ${err.message}`);
});