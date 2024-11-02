var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var tareaSchema=new Schema({
    nombre:{
        type:String,
        required:'El campo nombre es obligatorio.'
    },
    cantidad:{
        type:Number,
        required:'El campo cantidad es obligatorio.',
        min: [1, 'La cantidad debe ser al menos 1.'] // Ejemplo de validación mínima
    },
    descripcion:{
        type:String,
        required:'El campo descripción es obligatorio.'
    },
    fecha:{
        type:Date,
        default:Date.now
    },
    estado:{
        
            type:String,
            enum: ['Pagó', 'Abonó', 'No ha pagado'],
            default: 'No ha pagado'
    },
    valorUnitario:{
        type:Number,
        required:'El campo valor unitario es obligatorio.',
        min: [0, 'El valor unitario no puede ser menor que 0.'] // Ejemplo de validación
    },
    valorTotal:{
        type:Number,
        default: 0
    },
});
module.exports= mongoose.model('Tarea', tareaSchema);