import express from 'express';
import bookRoute from './routes/bookRoute.js';
import connectDb from './config/db.js';


const app = express();
const port = 3000;

app.use('/api/v1/books', bookRoute);


try {
  await connectDb();
  
  app.listen(port, () => {
    console.log(`Server is listening the port : ${port}`);
  });


} catch (error) {
  process.exit(1);
}






//pgNKQ13zGfyPP5ZD
//username root
//mongodb+srv://root:<password>@cluster0.7e91kaa.mongodb.net/?retryWrites=true&w=majority