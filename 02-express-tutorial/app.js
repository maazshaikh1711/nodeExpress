console.log('Express Tutorial')

// const http = require('http')
// const fs = require('fs')

// const homePage = fs.readFileSync('./index.html')

// http.createServer((req, res) => {
//     console.log("Request hit the server")
//     console.log(req.url)
//     console.log(req.method)

//     const url = req.url;
    
//     // Home page
//     if (url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html'})
//         res.write(homePage)
//     }

//     //About page
//     else if (url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html'})
//         res.write('<h1>About Page</h1>')
//     }

//     //All other pages
//     else {
//         res.writeHead(404, { 'Content-Type': 'text/html'})
//         res.write('<h1>Page Not Found</h1>')
//     }

//     res.end()                                                       // this method is manadatory
// }).listen(5000, (()=>{console.log('Listening on port 5000')}));


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Express js

// const app = require('express')();                                   // we can also use this directly
const express = require('express');
const app = express();

app.listen(5000, ()=>{console.log('Listening on port 5000')})

app.get('/', (req, res)=>{
        console.log('Welcome to Home page')
        res.status(200).send('Welcome to Home page')
    })
    
// app.use(express.static('./public'))                          // static things to be used can be declared here

// // const path = require('path');
// // app.get('/', (req, res)=>{
// //     console.log('Welcome to Home page')
// //     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))    // path must be absolute or specify root to res.sendFile
// // })

app.get('/about', (req, res)=>{
    console.log('Welcome to About page')
    res.status(200).send('Welcome to About page')
})

// Must be at last route, it is like "default. When none of above url matches then this will run. 
// (So if u put this at top, all other routes will fail and every endpoint will show invalid url)
app.all('*', (req, res)=>{
    console.log('Invalid url')
    res.status(404).send('<h1>Page Not Found</h1>')
})
