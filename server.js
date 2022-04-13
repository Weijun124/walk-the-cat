require("dotenv").config();
const express = require("express");
// const db = require("./db/conn");
const app = express();
// const path = require('path');
// const cors = require('cors');
const PORT = 5050;
const { Pool } = require('pg')

const pool = new Pool({
  database: 'wtc_db',
})


//MIDDLEWARE
//SERVE THE STATIC FILES FROM THE REACT APP
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors());

//Get all
app.get("/item/", async (req, res) => {
  const allTodo = await pool.query("SELECT * FROM card_table")
  res.json(allTodo.rows)
})

//Get a todo
app.get('/item/:card_id', async (req, res) => {
  const { card_id } = req.params;
  const todo = await pool.query('SELECT * FROM card_table INNER JOIN item_table ON card_table.id = item_table.id WHERE card_table.id = $1', [card_id])
  res.send(todo.rows[0])
})

//Create a todo
// app.patch('/item/:card_id', async (req, res) => {
//   const {  } = req.params;
//   const getATodo = await pool.query('INSERT INTO item_table (card_id,description, status_label)')
// })


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));