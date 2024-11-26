import Car from "../models/carModel.js";
// Create a new car
export const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    const savedCar = await car.save();
    res
      .status(201)
      .json({ message: "Car created successfully", data: savedCar });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating car", error: error.message });
  }
};

// Get all cars
export const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res
      .status(200)
      .json({ message: "Cars retrieved successfully", data: cars });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving cars", error: error.message });
  }
};

// Get a single car by ID
export const getCarById = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }
    res.status(200).json({ message: "Car retrieved successfully", data: car });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving car", error: error.message });
  }
};

// Update a car by ID
export const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCar = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res
      .status(200)
      .json({ message: "Car updated successfully", data: updatedCar });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating car", error: error.message });
  }
};

// Delete a car by ID
export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await Car.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }
    res
      .status(200)
      .json({ message: "Car deleted successfully", data: deletedCar });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting car", error: error.message });
  }
};
