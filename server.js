const express = require('express');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));


const apiUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json";


app.get('/', async (req, res) => {
  try {

    const { default: fetch } = await import('node-fetch');


    const response = await fetch(apiUrl);
    const data = await response.json();


    res.sendFile(path.join(__dirname, 'views', 'index.html'));

  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/api/data', async (req, res) => {
  try {

    const { default: fetch } = await import('node-fetch');


    const response = await fetch(apiUrl);
    const data = await response.json();


    res.json(data);
  } catch (error) {
    
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });

  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
