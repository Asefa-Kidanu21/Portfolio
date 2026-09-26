
import express from 'express';
import cors from 'cors';

import contactRoute from "./features/contacts/contact.route.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/api/contact", contactRoute);

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})

