import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// **Connect to MongoDB**
mongoose.connect("mongodb://localhost:27017/Tourista", {
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


// **Schema for User**
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  number: String,
  password: String
});

const User = mongoose.model("User", userSchema);




// **Register API**
app.post("/register", async (req, res) => {
  try {
    const { name, email, number, newPassword, confirmPassword } = req.body;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before storing it (security best practice)
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Save the new user
    const newUser = new User({ name, email, number, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});


// **Login API**
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ email: username });

    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Compare the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});








