require('dotenv').config();
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const { formatVietnamTime } = require('./utils');

const app = express();
const port = process.env.PORT || 4000;

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;
const topicId = process.env.TOPIC_ID;

app.use(bodyParser.json());

app.post('/mqtt-webhook', async (req, res) => {
    try {
        console.log('Received request:', req.body);
        const { clientid, username, peername, connected_at } = req.body;

        const clientConnectMessage = `Client connected: 
            client id: ${clientid}, 
            username: ${username || 'unknown'}, 
            ip: ${peername}, 
            connected at: ${formatVietnamTime(connected_at)}`;

        // await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        //     chat_id: chatId,
        //     text: clientConnectMessage,
        //     message_thread_id: topicId,
        // });

        res.status(200).send('Notification sent to Telegram');
    } catch (error) {
        console.error('Error sending message to Telegram:', error.message);
        res.status(500).send('Failed to send message');
    }
});

app.get('/test', (req, res) => {
    res.status(200).send('Notification sent to Telegram');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});