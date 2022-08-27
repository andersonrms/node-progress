const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'./text', 'teste.json')
const escreve = require('./escrever')
const ler = require('./ler')

// const pessoas = [
//     {nome: 'Anderson'},
//     {nome: 'Ester'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'} 
// ];

// const pessoasJSON = JSON.stringify(pessoas, '', 2)
// escreve(caminhoArquivo, pessoasJSON)

async function lerFile(caminho) {
    const dados = await ler(caminho)
    return dados;
}

const dadosfile = lerFile(caminhoArquivo).then(e => console.log(e))
