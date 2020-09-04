console.log('salut')
let http = require('http')
let fs = require('fs') // c'est un module qui permet de lire un fichier
let url = require('url')// Pour écouter l'URL
let server = http.createServer()
server.on('request', function (request, responce) {

    responce.writeHead(200)
    let query = url.parse(request.url, true).query // pour obtenir les info sur url
    let name = query.name === undefined ? ' Al houma' : query.name
    // if (query.name === undefined) {
    //     responce.write('Bonjour a sahbi')
    // } else {
    //     responce.end('Bonjour ' + query.name) //query.name :permet de recuperer le nom
    // }
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            responce.writeHeader(404)
            responce.end("Ce fichier n'existe pas!!")
        } else {
            responce.writeHeader(200, {
                'Content-type': 'text/html;charset=utf-8' // En ajout le type et l'encadage du code
            })
            data = data.replace('{{name}}', name)

            responce.end(data)
        }


    })
})
server.listen(8080)



