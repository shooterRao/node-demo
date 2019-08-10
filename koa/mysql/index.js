const Koa = require('koa')
const mysql = require('promise-mysql')

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test_data'
  })
  return connection;
}

// query
getConnection().then(async con => {
  const res = await con.query(`select * from user_table`)
  console.log(res);
})

// update
getConnection().then(async con => {
  const res = await con.query(`update user_table set password = 'abcdefg' where id = '5'`)
  console.log(res);
})

// inset
getConnection().then(async con => {
  const res = await con.query(`insert into user_table (name, password) values('jary', '123456')`);
  console.log(res);
})

// delete
getConnection().then(async con => {
  try {
    const res = await con.query(`delete from user_table where id='9'`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
})

const app = new Koa()

app.listen('3000', () => {
  console.log(`start at http://localhost:3000`);
})

