var mongoose=require('mongoose');
var Tarea=require('../models/tarea');
const tarea = require('../routes/tarea');

exports.list_all_tareas= function(req, res){  
Tarea.find({})
.then((tareas)=>{ 
 res.json(tareas);
})
.catch((err)=>{
    console.error("Error al listar tareas:", err);
    res.status(500).send(err);
})
};

exports.create_tarea = async (req, res) => {
    try {
        // Elimina el campo `_id` si está presente en `req.body`
        const tareaData = { ...req.body };
        delete tareaData._id;

        // Crea una nueva tarea sin el campo `_id`
        const new_tarea = new Tarea(tareaData);
        const tarea = await new_tarea.save();
        res.status(200).json(tarea);
    } catch (error) {
        console.error("Error en create_tarea:", error);
        res.status(500).send(error);
    }
};

//

exports.read_tarea= function(req, res)
{Tarea.findById(req.params.tareaId, function(err, tarea){
}).then((tarea)=>{ 
    res.json(tarea);
   })
   .catch((err)=>{
       console.error("Error al listar tareas:", err);
       res.status(500).send(err);
   })
};

exports.update_tarea = function(req, res) {
    Tarea.findOneAndUpdate({ _id: req.params.tareaId }, req.body, { new: true })
        .then((tarea) => {
            if (!tarea) {
                return res.status(404).json({ message: 'No se encontró ninguna tarea con ese ID' });
            }
            res.json(tarea);
        })
        .catch((err) => {
            console.error("Error al actualizar tarea:", err);
            res.status(500).send(err);
        });
};


exports.delete_tarea = function(req, res) {
    Tarea.deleteMany({ _id: req.params.tareaId })
        .then((result) => {
            if (result.deletedCount === 0) {
                return res.status(404).json({ message: 'No se encontró ninguna tarea con ese ID' });
            }
            res.json({ message: 'Tarea eliminada' });
        })
        .catch((err) => {
            console.error("Error al eliminar tarea:", err);
            res.status(500).send(err);
        });
};

