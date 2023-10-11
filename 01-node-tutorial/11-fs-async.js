// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')


const { readFile, writeFile } = require('fs');

console.log("Starting the task...")

const firstFileContent = readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(`Error reading the file1: ${err}`)
    return `Error reading the file1: ${err}`
  }
  console.log(`File 1: ${result}`)
  const first = result
  

  const secondFileContent = readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(`Error reading the file2: ${err}`)
      return `Error reading the file2: ${err}`
    }
    
    console.log(`File 2: ${result}`)
    const second = result

    writeFile('./content/result-async.txt', `First => ${first}\nSecond => ${second}`, (err, result) => {
      if (err) {
        console.log(`Error writing the result: ${err}`)
      }
      else{
        console.log(`Wrote file successfully`)    //might console "Done with the task earlier than this, bcoz of async nature"
      }
    })
  })
});

console.log("Done with the task")