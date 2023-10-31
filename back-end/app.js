require("dotenv").config();
const express = require("express");
const sequelize = require("./config/sequelize");
const cors = require("cors");
const app = express();
const port = 3000;

//IMPORTS AUTH
const loginRouter = require("./routes/Auth/login");

//IMPORTS USUARIO
const cadastroUserRouter = require("./routes/Usuario/cadastrosUsuario");
const deletarUserByIdRouter = require("./routes/Usuario/deletarUserById");

//IMPORTS PRODUTO
const crudProduto = require("./routes/Produto/crudProduto");

//IMPORTS CARRINHO
const crudCarrinho = require("./routes/Carrinho/crudCarrinho");

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

sequelize.authenticate();
sequelize.sync().then(() => {
    app.listen(port);
    console.log('Servidor rodando na porta ' + port);
});

//ROTA AUTH
app.use("/", loginRouter);

//ROTAS USUARIO
app.use("/", cadastroUserRouter);
app.use("/", deletarUserByIdRouter);

//ROTAS PRODUTO
app.use("/", crudProduto);

//ROTAS CARRINHO
app.use("/", crudCarrinho);

module.exports = app;
