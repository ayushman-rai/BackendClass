import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/my_db")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

const newschema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", newschema);

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
