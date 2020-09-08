const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'mysqlsrv', 
    user: 'root', 
    password: 'mysql', 
    port: 3306,
    database: 'testedb' 
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Coxexão estabelecida')
      createTable(con);
      insertData(con);
})




 function createTable (con) {
  const sql = "CREATE TABLE IF NOT EXISTS Clientes ("+
              "ID INT UNSIGNED NOT NULL AUTO_INCREMENT,"+
              "Nome varchar(150) NOT NULL,"+
              "CPF char(11) NOT NULL,"+
              "PRIMARY KEY (ID)"+
              ");";

        con.query(sql, (error, results, fields)=>{
          if(error){
            return console.log(error)
          }

          console.log('Tabela criada')
        })
}

function insertData(con) {
  const sql = "INSERT INTO Clientes(Nome,CPF) VALUES ?";
  const values = [
        ['teste1', '12345678901'],
        ['teste1', '09876543210'],
        ['teste3', '12312312399']
      ];
      con.query(sql, [values], function (error, results, fields){
          if(error) return console.log(error);
          console.log('adicionou registros!');
          conn.end();//fecha a conexão
      });
}
