const express = require('express'); // Simple server tool
const sqlite3 = require('sqlite3').verbose(); // Tiny database
const sanitizer = require('express-sanitizer'); // Cleans inputs
const path = require('path'); // Finds files

const app = express(); // Starts the server
const db = new sqlite3.Database('database.sqlite'); // Small database file

app.use(express.urlencoded({ extended: true })); // Reads form data
app.use(express.static('public')); // Serves your HTML/CSS
app.use(sanitizer()); // Stops bad stuff

// Make a table for messages
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY, name TEXT, email TEXT, message TEXT)');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body; // Gets form info
    const safeName = req.sanitize(name); // Cleans it
    const safeEmail = req.sanitize(email);
    const safeMessage = req.sanitize(message);

    db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [safeName, safeEmail, safeMessage], (err) => {
        if (err) return res.status(500).send('Error!'); // If it fails
        res.status(200).send('Saved!'); // If it works
    });
});

// Show all saved messages
app.get('/messages', (req, res) => {
    db.all('SELECT * FROM contacts', (err, rows) => {
        if (err) {
            res.send('Error reading database!');
        } else {
            // Make it look nicer than raw data
            let html = '<h1>Saved Messages</h1><ul style="font-family: Arial;">';
            rows.forEach(row => {
                html += `<li>ID: ${row.id} | Name: ${row.name} | Email: ${row.email} | Message: ${row.message}</li>`;
            });
            html += '</ul>';
            res.send(html);
        }
    });
});

app.listen(3000, () => console.log('Visit http://localhost:3000')); // Runs the site