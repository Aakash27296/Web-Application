const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yaml');
module.exports = swaggerDocument;