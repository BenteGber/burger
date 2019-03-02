var connection = require('./connection')
const log = console.log

var orm = {
    // TODO: define parameters 
    selectAll: (tableInput, cb) => {
        let queryString = `select * from ${tableInput};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err
            log(result)
            cb(result)
        })
    },
    insertOne: (table, colValObj, cb) => {
        let queryString = `insert into ${table} set ?;`;
        connection.query(queryString, colValObj, (err, result) => {
            if (err) throw err
            log(result)
            cb(result)
        })
    },

    updateOne: (table, fields, values, condition, cb) => {
        // TODO: confirm querystring needs ";"
        let queryString = `update ${table} set ${fields} = ${values} where ${condition};`
        connection.query(queryString, (err, result) => {
            if (err) throw err
            log(result)
            cb(result)
        })
    }
}

module.exports = orm