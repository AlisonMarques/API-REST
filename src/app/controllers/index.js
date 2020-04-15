const fs = require ('fs');
const path = require ('path');

/**
 * comnado : yarn add fs path
 * Serve para importar todos os arquivos que uma pasta contem, tudo de uma só vez
 *  
 */
module.exports = app => {
    fs
    .readdirSync(__dirname)
    .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
    .forEach(file => require(path.resolve(__dirname, file))(app));
}