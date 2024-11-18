const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar o CORS
app.use(cors());

// Rota para obter dados do venue
app.get('/api/venue', async (req, res) => {
    try {
        const response = await axios.get('https://cdn-dev.preoday.com/challenge/venue/9');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching venue data:', error);
        res.status(500).send('Error fetching venue data');
    }
});

// Rota para obter dados do menu
app.get('/api/menu', async (req, res) => {
    try {
        const response = await axios.get('https://cdn-dev.preoday.com/challenge/menu');
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching menu data:', error);
        res.status(500).send('Error fetching menu data');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});