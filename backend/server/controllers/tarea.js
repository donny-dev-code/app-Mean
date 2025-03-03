var mongoose=require('mongoose');
var Tarea=require('../models/tarea');
const tarea = require('../routes/tarea');

exports.list_all_tareas = function(req, res) {  
    Tarea.find({})
    .then((tareas) => { 
        console.log("Tareas obtenidas:", JSON.stringify(tareas, null, 2)); // Imprime en consola
        res.json(tareas); // Envía la respuesta al frontend
    })
    .catch((err) => {
        console.error("Error al listar tareas:", err);
        res.status(500).send(err);
    });
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



exports.read_tarea = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "ID inválido" });
    }

    const tarea = await Tarea.findById(req.params.id);
    if (!tarea) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(tarea);
  } catch (error) {
    console.error("Error en read_tarea:", error);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};


exports.update_tarea = function(req, res) {
    console.log("ID recibido:", req.params.id);
    console.log("Datos recibidos:", req.body);
    Tarea.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
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
    Tarea.deleteMany({ _id: req.params.id })
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

