const mysql = require('mysql');
const db = mysql.createPool({
  connectionLimit: 15,
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'bemvindo@123',
  database: 'mydb',
  port: "3306"
});


function GetDatabaseResponse( query ) {

  return new Promise( ( resolve, reject ) => {
      db.getConnection( ( ConnectionErrorMessage, DB_LocalConnection ) => {
          if ( ConnectionErrorMessage ) {
              console.log( "DataBase Connection Failed" );
              console.log( ConnectionErrorMessage );
              resolve( ConnectionErrorMessage );
              return;

          } else {

              DB_LocalConnection.query( query, ( ProcedureErrorMessage, ProcedureCallResult ) => {
                  DB_LocalConnection.release();
                  if ( ProcedureErrorMessage ) {
                      console.log( "DataBase Query Execution Failed" );
                      console.log( DB_ProcedureCall );
                      console.log( ProcedureErrorMessage );
                      resolve( ProcedureErrorMessage );
                      return;

                  } else {
                      resolve( ProcedureCallResult );
                      return;
                  }
              } );
          }
      } );
  } );
}

( async () => {
  let query = 'SELECT * FROM usuario';
  let Result = await GetDatabaseResponse( query );
  console.log( Result );
} )();
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database!');
// });

module.exports = db;