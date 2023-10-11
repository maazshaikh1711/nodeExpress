const { readFileSync, writeFileSync } = require('fs');

const firstFileContent = readFileSync('./content/first.txt', 'utf8');
const secondFileContent = readFileSync('./content/second.txt','utf8')

console.log(firstFileContent)
console.log(secondFileContent)

writeFileSync(
  './content/result-sync.txt',
  `The final result is: \n${firstFileContent} -- ${secondFileContent} `,
  {flag: 'a'}       //denotes it just appends and not overwrite
  );
