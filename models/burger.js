const orm = require('../config/orm')
const log = console.log


var burger = {
    getAll: (cb) => {
        orm.selectAll('burgers', (res) =>
            cb(res))

    },
    addNew: (vals, cb) => {
        orm.insertOne('burgers', vals, (res) => {
            cb(res)
        })
    },
    devour: (fields, condition, cb) => {
        orm.updateOne('burgers', fields, true, condition, (res) => {
            cb(res)
        })
    }
}

module.exports = burger
// TODO ???
// This is where code happens
