const express = require('express');

const app = express();


port = 4000;

app.listen(port, () => {
    console.log(`corriendo en puerto ${port}`);
})