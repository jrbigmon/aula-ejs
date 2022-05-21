const path = require('path');

const produtos = [
    {
        id: 1,
        nome: 'Caxitas',
        img: 'https://neilpatel.com/wp-content/uploads/2019/07/mini-caixas-de-produtos-em-cima-de-laptop.jpeg',
        descricao: 'describ describdescrib describdescrib describdescrib describdescrib describdescrib describ'
    },
    {
        id: 2,
        nome: 'Vião',
        img: 'https://t.ctcdn.com.br/5BgZqDi8kp8YzXSngnuUNiI9Klk=/512x288/smart/filters:format(webp)/i517079.jpeg',
        descricao: 'describ describdescrib describdescrib describdescrib describdescrib describdescrib describ'
    },
    {   
        id: 3,
        nome: 'Camimnhãozão',
        img: 'https://frotas.unidas.com.br/blog/content/uploads/2021/09/alugar-caminhao-de-carga-1024x576.jpeg',
        descricao: 'describ describdescrib describdescrib describdescrib describdescrib describdescrib describ'  
    },
    {   
        id: 4,
        nome: 'Caminhao',
        img: 'https://frotas.unidas.com.br/blog/content/uploads/2021/09/alugar-caminhao-de-carga-1024x576.jpeg',
        descricao: 'describ describdescrib describdescrib describdescrib describdescrib describdescrib describ'  
    }
]

const homeController = {
    showPaginaInicial: (req, res) => {
        res.render('home', {
            title: 'Página de produtos',
            produtos,
            tituloDoH1:'Promoções da semana'
        })
    },

    showCadastrar: (req, res) => {
        const {id, nome, img, descricao} = req.body
        produtos.push({id, nome, img, descricao})
        res.redirect('/')
    },

    showCadastrarView: (req, res) => {
        res.render('cadastroProduto')
    },
}

module.exports = homeController;

