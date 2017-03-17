const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/contacts', (req, res) => res.render('contacts'));
router.get('/whoweare', (req, res) => res.render('whoweare'));
router.get('/mission', (req, res) => res.render('mission'));
router.get('/events', (req, res) => res.render('events'));

module.exports = router;
