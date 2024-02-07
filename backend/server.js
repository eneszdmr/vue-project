import express from 'express';

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.send(" HElloo Guys we are here !");
});

app.listen(port, () => {
  console.log(`Server is listening the port : ${port}`);
});
