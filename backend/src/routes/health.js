const express = require('express');

const keyValueRouter = express.Router();

keyValueRouter.post('/store', (req, res) => {});
keyValueRouter.get('/store/:key', (req, res) => {});
keyValueRouter.put('/store/:key', (req, res) => {});
keyValueRouter.delete('/store/:key', (req, res) => {});