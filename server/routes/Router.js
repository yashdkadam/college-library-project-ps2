const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const Student = require('../models/Student.js');
const JWT_SECRET = 'DPisagoodb$oy';
router.post('/addStudent', async (req, res) => {
    try {
        let student = new Student(req.body);
        let another = await Student.find({ email: student.email });
        if (another.length > 0) {
            return res.status(302).json({
                msg: "Student already exists"
            });
        }
        await student.save();
        return res.status(200).json({
            msg: "Student added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
});

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/register', async (req, res) => {

    try {
        // Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Create a new user
        user = await User.create({
            password: secPass,
            email: req.body.email,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // res.json(user)
        res.json({ authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', async (req, res) => {
    console.log(req.body);
    let success = false;
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success = false
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false
            return res.status(400).json({ success, error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ success, authtoken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }


});
module.exports = router