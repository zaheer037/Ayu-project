const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ayu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  dob: Date,
  city: String,
  mobile: String,
});

const User = mongoose.model('User', userSchema);

// Donor Schema
const donorSchema = new mongoose.Schema({
  userId: String,
  bloodGroup: String,
  state: String,
  city: String,
  area: String,
});

const Donor = mongoose.model('Donor', donorSchema);

// Routes

// User Signup
app.post('/signup', async (req, res) => {
  const { name, email, password, dob, city, mobile } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new User({ name, email, password: hashedPassword, dob, city, mobile });
    await newUser.save();
    res.status(201).send('User Registered');
  } catch (error) {
    res.status(400).send('Email already exists');
  }
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).send('Invalid Credentials');
  }
});

// Become a Donor
app.post('/donors', async (req, res) => {
  const { userId, bloodGroup, state, city, area } = req.body;
  const newDonor = new Donor({ userId, bloodGroup, state, city, area });
  await newDonor.save();
  res.status(201).send('Donor Registered');
});

// Find Donors
app.post('/find-donors', async (req, res) => {
  const { state, city, area, bloodGroup } = req.body;
  const donors = await Donor.find({ state, city, area, bloodGroup });
  res.status(200).json(donors);
});

// Server Listen
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
