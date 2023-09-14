import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavourites,
  toFavourite,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();
router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFavourite/:rid", jwtCheck, toFavourite);
router.post("/allFavourites/", jwtCheck, getAllFavourites);
export { router as userRoute };
