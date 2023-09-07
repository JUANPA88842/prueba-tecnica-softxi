const express = require('express');
//const fetch = require('node-fetch');
const app = express();

app.use(express.json());

let token = null;

//login
app.post('/login', async (req, res) => {
  console.log(req.body)
  const url = 'https://api.softix.app/api/cuenta/login';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data);
    token = data.token
    

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//crear
app.post('/crear', async (req, res) => {
  console.log(JSON.stringify(req.body))
  console.log(req.body)
  const url = 'https://api.softix.app/api/clientes/crear';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    console.log(data)
    res.json(data);
    

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}); 

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
