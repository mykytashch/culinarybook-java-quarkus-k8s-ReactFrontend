const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 3001; // порт, на котором будет работать сервер

app.use(express.json());

app.post('/webhook', (req, res) => {
    // TODO: добавить проверку безопасности, если требуется

    exec('sh ./deploy.sh', (error) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

app.listen(PORT, () => {
    console.log(`Webhook server is listening on port ${PORT}`);
});
