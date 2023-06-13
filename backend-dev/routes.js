require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = parseInt(process.env.HASH_SALT_ROUNDS);
const connection = require('./db');
const session = require('express-session');
const cors = require('cors');

const router = express.Router();

router.use(express.json());
router.use(cors());

router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Endpoint untuk sign-up
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validasi data masukan
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Harap isi semua field' });
        }

        // Cek apakah pengguna sudah terdaftar di database MySQL
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Terjadi kesalahan server' });
            }

            if (results.length > 0) {
                return res.status(409).json({ message: 'Email sudah terdaftar' });
            }

            // Hash password sebelum menyimpan ke database
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Simpan data pengguna baru ke dalam database MySQL
            const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            connection.query(insertQuery, [username, email, hashedPassword], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Terjadi kesalahan server' });
                }

                // Set data nama dan email ke dalam session
                req.session.username = username;
                req.session.email = email;

                res.status(201).json({ message: 'Pendaftaran berhasil' });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

// Endpoint untuk sign-in
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi data masukan
        if (!email || !password) {
            return res.status(400).json({ message: 'Harap isi semua field' });
        }

        // Cari pengguna berdasarkan email di database MySQL
        const query = 'SELECT * FROM users WHERE email = ?';
        connection.query(query, [email], async (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Terjadi kesalahan server' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Email atau kata sandi salah' });
            }

            const user = results[0];

            // Verifikasi kata sandi
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Email atau kata sandi salah' });
            }

            req.session.username = user.username;
            req.session.email = user.email;


            res.status(200).json({ message: 'Sign-in berhasil' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});


// Endpoint untuk mendapatkan data profil
router.get('/profile', (req, res) => {
    // Periksa apakah pengguna telah melakukan login dan data nama serta email tersimpan di session atau cookie
    if (!req.session.username || !req.session.email) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Ambil data nama dan email dari session atau cookie
    const { username, email } = req.session;

    // Kirim data sebagai respons JSON
    res.json({ username, email });
});


// Endpoint untuk mengupdate data profil
router.post('/update-profile', (req, res) => {
    // Periksa apakah pengguna telah melakukan login
    if (!req.session.username || !req.session.email) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Ambil data profil yang diperbarui dari body request
    const { username, email } = req.body;

    // Update data nama dan email dalam session atau cookie
    req.session.username = username;
    req.session.email = email;

    // Kirim data profil yang diperbarui sebagai respons JSON
    res.json({ username, email });
});

module.exports = router;