const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const db = require('./db');

router.post('/', async (req, res) => {
    const { name, password } = req.body;

    // Check if the user exists in the DB
    const sqlSearch = "SELECT * FROM usuario WHERE nm_usuario = ?";
    const search_query = mysql.format(sqlSearch, [name]);
    db.getConnection((err, connection) => {
        if (err) {
            console.log('Error connecting to Db');
            return res.status(500).json({ error: 'Db Connection failed' });
        }

        connection.query(search_query, async (err, results) => {
            connection.release(); // Done with the connection.

            if (err) {
                console.log('Error searching for user');
                return res.status(500).json({ error: 'Error searching for user' });
            }

            // If no user is found, return a 404 error
            if (results.length === 0) {
                console.log('User not found');
                return res.status(404).json({ error: 'User not found' });
            }

            // If the user is found, get the stored hashed password
            const hashedPassword = results[0].password;

            // Compare the password with the hashedPassword using bcrypt.compare()
            bcrypt.compare(password, hashedPassword, (err, isMatch) => {
                if (err) {
                    console.log('Error comparing passwords');
                    return res.status(500).json({ error: 'Error comparing passwords' });
                }

                if (isMatch) {
                    console.log('Password is correct');
                    return res.status(200).json({ message: 'Logged in successfully' });
                } else {
                    console.log('Password is incorrect');
                    return res.status(401).json({ error: 'Password is incorrect' });
                }
            });
        });
    });
});

module.exports = router;