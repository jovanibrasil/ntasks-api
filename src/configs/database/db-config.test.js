module.exports = {
    database: 'ntask',
    host: 'localhost',
    username: 'postgres',
    password: 'password',
    dialect: 'postgres',
    logging: false,
    define: {
        timestamps: true, // define created_at and updated_at
        underscored: true
    }
};