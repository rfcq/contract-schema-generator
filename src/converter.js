const generateSchema = require('generate-schema')
const fs = require('fs')

let parameters = process.argv.slice(2)
let inputFileName = parameters[0]
let outputFileName = parameters[1]

let fileInput = require(`../input/${inputFileName}`) 

let schema = generateSchema.json(fileInput)

const fileOutput = fs.writeFileSync(`./output/${outputFileName}`, JSON.stringify(schema))
