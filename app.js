const _ = require('lodash');
const {readFile, writeFile} = require('fs').promises;
const util = require('util');
const EventEmitter = require('events');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const CustomEmitter = new EventEmitter();



const start = async () => {
    try{
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/async.txt', 'utf8');
        await writeFile('./content/subfolder/merge', `
        This file is merge of '/content/async.txt' and '/content/first.txt':
        ${first}
        ${second}
        `, 'utf8')
        console.log(first)
        console.log(second)
    }
    catch(err){
        console.log(err)
    }
}
CustomEmitter.on('response', start);
CustomEmitter.emit('response');
console.log(CustomEmitter.eventNames())