// const http = require('http')

// const server = http.createServer((req, res) => {
//   //   if (req.url === '/') {
//   //     res.end('Welcome to our home page')
//   //   }
//   //   if (req.url === '/about') {
//   //     res.end('Here is our short history')
//   //   }
//   //   res.end(`
//   //   <h1>Oops!</h1>
//   // <p>We can't seem to find the page you are looking for</p>
//   // <a href="/">back home</a>
//   //   `)
//   // ###################################
//   // ###################################
//   //
//   //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
//   // SWITCH TO IF, ELSE IF, ELSE (BELOW)
//   // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
//   if (req.url === '/') {
//     res.end('Welcome to our home page')
//   } else if (req.url === '/about') {
//     res.end('Here is our short history')
//   } else {
//     res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
//   }
// })

// server.listen(5000)

const http = require('http');

const server = http.createServer((req, res) => {

  // console.log(`Req=> ${req}`)     //not able to directly print req or res

  // res.writeHead(200, {"Content-Type": "text"});    //can define what type of response we will be sending
  // res.end("Hello World!");
  // res.end("Wassup");     can't end multiple times, will give an error

  if (req.url === '/') {
    res.end('Welcome to the home page.')
  }

  else if (req.url === '/about') {
    res.end('About Section')
  }

  else{
    // res.end('Oops! This page does not exist.')
    // // we can also give tags, so
    res.end(`
      <h1>Oops!</h1>
      <p>This page does not exist</p>

      <a href="/" >Back to Home</a>
    `)
  }
})

server.listen(8080, () => {
  console.log('Server listening on port 8080')
})