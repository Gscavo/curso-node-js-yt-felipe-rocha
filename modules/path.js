const path = require("path");

// Basename: Nome + extensão do arquivo atual
console.log(path.basename(__filename));

// Nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Cria um objeto Path
console.log(path.parse(__filename));

// Junta caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));