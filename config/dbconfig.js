module.exports = {
    HOST: 'localhost',
    USER:'root',
    PASSWORD:'p14ss0LGT123',
    DB:"sequelize",
    dialect:'mysql',
    pool: {
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}