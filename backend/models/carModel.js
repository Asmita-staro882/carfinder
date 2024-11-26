import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  mileage: { type: Number, required: true },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    required: true,
  },
  transmission: { type: String, enum: ["Manual", "Automatic"], required: true }, // Transmission type
  condition: {
    type: String,
    enum: ["New", "Used", "Certified"],
    required: true,
  },
  description: { type: String },
  location: { type: String, required: true },
  seller: {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String },
  },
  images: { type: [String] },
  features: { type: [String] },
  createdAt: { type: Date, default: Date.now },
});

const Car = mongoose.model("Car", carSchema);

export default Car;
