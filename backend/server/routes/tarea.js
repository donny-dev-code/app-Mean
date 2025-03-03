const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tarea");


// Definir las rutas
router.get("/", tareaController.list_all_tareas);
router.post("/", tareaController.create_tarea);
router.get("/:id", tareaController.read_tarea);
router.put("/:id", tareaController.update_tarea);
router.delete("/:id", tareaController.delete_tarea);

module.exports = router;
