import { Router } from "express";
import { EmpleadoController } from "../controllers/empleado.controller";
import { validateBody } from "../middlewares/validate";
import { empleadoCreateSchema, empleadoUpdateSchema } from "../validators/empleado.schema";

const router = Router();

router.get("/", EmpleadoController.listar);
router.get("/:ci", EmpleadoController.obtener);
router.post("/", validateBody(empleadoCreateSchema), EmpleadoController.crear);
router.put("/:ci", validateBody(empleadoUpdateSchema), EmpleadoController.actualizar);

export default router;
