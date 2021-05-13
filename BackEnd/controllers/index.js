require("dotenv").config();
const { dbConnection } = require("../config");
const { response } = require("express");
const { Pool, Client } = require("pg");

const pool = new Pool(dbConnection);

const getObjects = (req, res = response) => {
  res.send("API Funcionando");
};

const postObjects = async (req, res = response) => {
  const response = await pool.query("SELECT * FROM OBJECTS");
  res.status(200).json({
    ok: true,
    data: response.rows,
    message: "Successful connection",
  });
  await pool.end();
};

const postNewObject = async (req, res = response) => {
  const { name, description } = req.body;
  console.log(name);
  console.log(description);
  await pool.query(
    `insert into objects (name, description) values ('${name}','${description}')`
  );
  res.status(201).json({
    ok: true,
    data: { object: { name, description } },
    message: "Object created",
  });
  await pool.end();
};

const postDeleteObject = async (req, res = response) => {
  const { idObject } = req.body;
  console.log(idObject);
  await pool.query(`delete from objects where id = ${idObject}`);
  res.status(405).json({
    ok: true,
    message: "Object deleted",
  });
  await pool.end();
};

module.exports = {
  getObjects,
  postObjects,
  postNewObject,
  postDeleteObject,
};
