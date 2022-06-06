const express = require('express');

const htmlRoute = require(`./public/routes/htmlRoute`);
const apiRoute = require(`./public/routes/apiRoute`);

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`));

app.use(`/`, htmlRoute);
app.use(`/api`, apiRoute);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
