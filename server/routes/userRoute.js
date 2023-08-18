import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavourites,
  toFavourite,
} from "../controllers/userController.js";

const router = express.Router();
router.post("/register", createUser);
router.post("/bookVisit/:id", bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", cancelBooking);
router.post("/toFavourite/:rid", toFavourite);
router.post("/allFavouvites/", getAllFavourites);
export { router as userRoute };
