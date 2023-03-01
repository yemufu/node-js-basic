const sql = require('mssql');

//Các thông tin cấu hình kết nối
const SQL_Driver = 'SQL Server';
const SQL_Server = 'MAOTOU\\SQLEXPRESS';
const SQL_Database = 'student';
const SQL_UID = 'sa';
const SQL_PWD = '12345';


const config = {
    driver: SQL_Driver,
    server: SQL_Server,
    database: SQL_Database,
    user: SQL_UID,
    password: SQL_PWD,
    option: {
        encrypt: false,
        enableArithAbort: false,
    },
    connectionTimeout: 30000,
    requestTimeout: 30000,
    pool: {
        idleTimeoutMillis: 30000,
        max: 100,
    }
}

const connection = new sql.ConnectionPool(config);

// Xuất ra để sử dụng    
module.exports = {
    connection: connection
};