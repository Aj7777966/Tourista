import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(bodyParser.json());

app.use(express.json({ limit: "1000mb" }));  // Increase JSON body size
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));

// **Connect to MongoDB**
mongoose.connect("mongodb://localhost:27017/Tourista", {
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB Connection Error:", err));


// **Schema for Destinations is diaplyed here**
const destinationSchema = new mongoose.Schema({
  cityname: { type: String, required: true, unique: true },
  details: {
    places: [{ name: String, address: String, about: String, url: String }],
    food: [{ name: String, address: String, populardishes: String, url: String }],
    hotels: [{ name: String, address: String, about: String, rating: Number, url: String, }]
  }
});

const Destination = mongoose.model('Destination', destinationSchema);

// **✅ POST Route to Add a New Destination**
app.post('/api/destinations', async (req, res) => {
  try {
    const { cityname, details } = req.body;

    // Validate request body
    if (!cityname || !details) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if city already exists
    const existingCity = await Destination.findOne({ cityname });
    if (existingCity) {
      return res.status(400).json({ error: "Destination already exists" });
    }

    // Insert new destination
    const newDestination = new Destination({ cityname, details });
    await newDestination.save();

    res.status(201).json({ message: "Destination added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});

// **✅ GET Route to Fetch All Destinations**
app.get('/api/destinations', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// **✅ GET Route to Fetch a Specific Destination**
app.get('/api/destinations/:cityname', async (req, res) => {
  try {
    const city = req.params.cityname;
    const destination = await Destination.findOne({ cityname: city });
    if (!destination) return res.status(404).json({ error: "Destination not found" });
    res.json(destination);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


// ✅ Get all destinations or filter by cityname
app.get('/api/destinations', async (req, res) => {
  try {
    const searchQuery = req.query.search;
    let query = {};

    if (searchQuery) {
      query.cityname = { $regex: searchQuery, $options: "i" }; // Case-insensitive search
    }

    const destinations = await Destination.find(query);
    res.json(destinations);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
});


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








