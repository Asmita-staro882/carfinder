import express from "express";
import {
  createCar,
  deleteCar,
  getAllCars,
  getCarById,
  updateCar,
} from "../controllers/carController.js";

const router = express.Router();

router.route("/cars").post(createCar);
router.route("/cars").get(getAllCars);
router.route("/cars/:id").get(getCarById);
router.route("/cars/:id").put(updateCar);
router.route("/cars/:id").delete(deleteCar);

export default router;
