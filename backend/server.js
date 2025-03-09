//get dependencias
const express =require('express');
const path=require('path');
const http=require('http');
const tareaRoutes = require('./server/routes/tarea');
//
//////////////////////////////////////////////


const app =express();


// parser for POST data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cfg. del directorio 'dist' como directorio estatico.
//En este directorio tendremos los archivos obtenidos en el build
//de nuestra aplicacion Ng
app.use(express.static(path.join(__dirname, '../dist/071-ej-mean')));

//cfg de las rutas

app.use("/api/tareas/wear/mean", tareaRoutes);

 // cfg del puerto de escucha
 const port= process.env.PORT || '3000';
 app.set('port', port);

 // creamos el servidor http con la aplicacion express y abrimos puerto
 const server =http.createServer(app);
 server.listen(port, ()=>console.log(`api corriendo en localhost:${port}`));

 var mongoose =require('mongoose');
 ////////////////////////////////////////////////////
 //conexión a la base de datos mongodb a traves de mongoose
 
var dbURI= 'mongodb://localhost/db_mean'
mongoose.connect(dbURI)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Error en la conexión a MongoDB:', err));

 //configuración de los eventos de la conexión Mongoose
 mongoose.connection.on('connected', function (){
    console.log('mongoose coneccion abierta a '+ dbURI);
 });

 mongoose.connection.on('error', function(err){
    console.log('Mongoose coneccion dió error '+ err);
 });mongoose.connection.on('disconnected', function(){
    console.log('coneccion desconectada mongoose');
 });
 //si el procewso 'Node0 termina, se cierra la conexion mongoose
 process.on('SIGINT', function(){
    console.log('mongoose conexion desconectada');
    process.exit(0);
 });
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../dist/071-ej-mean/index.html'));
});

 //////////////////////////////////////////////////////
 //creamos la app espress y la configuramos

 //Cfg. de las rutas
 