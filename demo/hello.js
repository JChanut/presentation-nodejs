var os = require('os');

console.log('Salut tout le monde !');
console.log('Cette machine a', os.cpus().length, 'processeurs et', 
    os.totalmem() / (1024*1024*1024), 'Go de RAM');