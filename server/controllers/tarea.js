var mongoose=require('mongoose');
var Tarea=require('../models/tarea');
const tarea = require('../routes/tarea');

exports.list_all_tareas= function(req, res)
{Tarea.find({}, function(err, tarea){
if (err) res.send(err);
res.json(tarea);
});
};

exports.create_tarea= function(req, res)
{var new_tarea=new Tarea(req.body);
    new_tarea.save(function(err, tarea){
        if(err) res.send(err);
        res.json(tarea);
    });
};

exports.read_tarea= function(req, res)
{Tarea.findById(req.params.tareaId, function(err, tarea){
    if (err) res.send(err);
    res.json(tarea);
});
};

exports.update_tarea= function(req, res)
{Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body,
    {new: true}, function(err, tarea){
        if (err) res.send(err);
        res.json(tarea);
    });
};

exports.delete_tarea= function(req, res)
{Tarea.deleteMany({_id: req.params.tareaId}, function(err, tarea){ 
if (err) {
    return res.status(500).send(err); // Devuelve un estado 500 en caso de error
}
if (result.deletedCount === 0) {
    return res.status(404).json({ message: 'No se encontró ninguna tarea con ese ID' });
}
res.json({ message: 'Tarea eliminada' });
});
};
