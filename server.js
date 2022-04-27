require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5050;
const { Pool } = require("pg");

const pool = new Pool({
  // database: "wtc_db",
  connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});
app.use(express.static('build'));
app.use(express.json());
app.use(cors());

//Get a todo
app.get("/item/", async (req, res) => {
  const todo = await pool.query(`
  SELECT title, id,
  ARRAY_AGG(item_table.description) as description, 
  ARRAY_AGG(item_table.item_id) as item_id,
  ARRAY_AGG(item_table.status_label) as status 
  FROM card_table INNER JOIN item_table 
  ON card_table.id = item_table.card_id 
  GROUP BY card_table.title, card_table.id
    `);
  res.send(todo.rows);
});

//Create a Todo
app.post('/item/', (req, res) => {
  let { card_id, description, status_label } = req.body;

  pool
    .query(`INSERT INTO item_table(card_id, description, status_label) VALUES ($1, $2, $3) RETURNING *;`, [
      card_id,
      description,
      status_label,
    ])
    .then((result) => res.status(201).send(result.rows[0]))
    .catch((err) => res.sendStatus(500));
});

//Patch a todo
app.patch("/item/", (req, res) => {
  const { description, item_id } = req.body;
  pool.query(
    `UPDATE item_table SET description = $1 WHERE item_id = $2`, [description, item_id]
  )
  res.send()
})

app.patch("/item123", (req, res) => {
  const { card_id,status_label, item_id } = req.body;
  pool.query(
    `UPDATE item_table SET card_id=$1,status_label=$2 WHERE item_id = $3 `, [card_id,status_label,item_id]
  )
  res.send('works')
})

//Delete a todo
app.delete("/item/", (req, res) => {
  const { item_id } = req.body;
  console.log(item_id);
  pool.query(
    `DELETE FROM item_table WHERE item_id = $1`, [item_id]
  )
  res.send();
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));