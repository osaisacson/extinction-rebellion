const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

//api call to github, getting info from a specific user
app.get('/api', (req, res) => {
  // const user = req.query.user || "osaisacson";
  // axios.get(`http://api.github.com/users/${user}`)
  axios
    .get(`https://nataliia-radina.github.io/react-vis-example/`)
    .then(response => {
      res.json({ user: response.data });
    })
    .catch(function(error) {
      console.log(error);
    });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4000; //process.env.PORT is set by heroku
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
