/**
 * Server.js
 * @author : DiganmeGiovanni | https://twitter.com/DiganmeGiovanni
 * @Created on: 25 Oct, 2014
 */

/* Librerias necesarias para la aplicación */
// var app  = require('express')();
// var http = require('http').Server(app);
var io   = require('socket.io').listen(3000);
io.sockets.on("connection", arranque);
function arranque (socket) {
  socket.on("datos_cliente",regresar_datos);
}
function regresar_datos (data) {
  io.sockets.emit("datos_servicor",data);  
}


/** *** *** ***
 *  Configuramos el sistema de ruteo para las peticiones web
 *  de manera que sin importar la ruta que el usuario solicite
 *  siempre lo direccionaremos al html del sistema de chat.
 */
// app.get('*', function(req, res) {
//   res.sendFile( __dirname + '/views/chat.html');
// });


/** *** *** ***
 *  Configuramos Socket.IO para estar a la escucha de
 *  nuevas conexiones.
//  */
// io.on('connection', function(socket) {
  
//   console.log('New user connected');
  
//   /**
//    * Cada nuevo socket debera estar a la escucha
//    * del evento 'chat message', el cual se activa
//    * cada vez que un usuario envia un mensaje.
//    * 
//    * @param  msg : Los datos enviados desde el cliente a 
//    *               través del socket.
//    */
//   socket.on('chat message', function(msg) {
//     io.emit('chat message', msg);
//   });
  
//   /**
//    * Mostramos en consola cada vez que un usuario
//    * se desconecte del sistema.
//    */
//   socket.on('disconnect', function() {
//     console.log('User disconnected');
//   });
  
// });


// /**
//  * Iniciamos la aplicación en el puerto 3000
//  */
// http.listen(3000, function() {
//   console.log('listening on *:3000');
// });