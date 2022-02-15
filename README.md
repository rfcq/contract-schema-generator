# Contract Schema Generator
Schema generator for contract testing purposes.
The script receives a payload and transforms to a valid schema to validate the response with an automated test. 

The file input needs to be in JSON format and needs to be at input folder. The generated JSON file will be at output folder (examples included).

## Minimum Requirements
* NodeJS 13+;
* NPM 7+

## Installation
1. Open the root project folder with Terminal;
2. Run the command "npm install".

## Instructions
1. Run the command on Terminal:
    
    > npm run create-schema <name-of-the-input-file.json> <name-of-the-output-file.json>