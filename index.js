const fs = require('fs')
const http = require('http')
// const readline = require('readline')
const args = require('minimist')(process.argv.slice(2),{
  default: {
    port: 4000
  }
})
console.log(args.port)

let homeContent = ''
let projectContent = ''
let registrationContent = ''

fs.readFile('index.html', (err, home) => {
  if (err) throw err
  homeContent = home
})

fs.readFile('project.html', (err, project) => {
  if (err) throw err
  projectContent = project
})

fs.readFile('registration.html', (err, registration) => {
  if (err) throw err
  registrationContent = registration
})

function startServer () {
  http
    .createServer((req, res) => {
      const url = req.url
      res.writeHeader(200, { 'Content-Type': 'text/html' })
      switch (url) {
        case '/project':
          res.end(projectContent)
          res.end()
          break
        case '/registration' :
          res.write(registrationContent)
          res.end()
          break
        default:
          res.end(homeContent)
          res.end()
          break
      }
    })
    .listen(args.port)
}

startServer()

// const lineDetail = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// lineDetail.question('please provide your name - ', (name) => {
//   console.log(`Hi ${name}`)
//   lineDetail.close()
// })
