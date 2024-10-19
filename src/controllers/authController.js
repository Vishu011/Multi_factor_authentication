import User from '../models/User.js';
import bcrypt from 'bcrypt';
import passport from 'passport';

export const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        
        // Ensure password and salt are provided
        if (!password || password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const user = await User.create({ username, password: hashedPassword, email });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const login = (req, res) => {
    res.status(200).json({ message: 'Logged in successfully' });
};

export const logout = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logged out successfully' });
};
