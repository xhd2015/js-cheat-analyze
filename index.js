// node 不支持import，支持require
//import * as fs from 'fs'
const fs = require('fs')
const babel = require("@babel/core");
const traverse = require("babel-traverse")
// import traverse from "babel-traverse";

// let file = 'if-statement.js'
let file = 'href/bad.js'

let content = fs.readFileSync('test/' + file)


let parseResult = babel.parse(content,{})
console.log(parseResult)
console.log(parseResult.program.body)




let i = 0
let mytraverse = traverse.default
mytraverse(parseResult,{
    enter(path){
        console.log(i)
        // if(path.type == "ExpressionStatement"){
        //     console.log("expression")
        // }
        if(path.type == "AssignmentExpression"){
            // console.log("assign")
            // console.log(Object.keys(path))
            // console.log(path.node)
            if(path.node.operator=='='){
                console.log("assign object is " + path.node.left.object)
                console.log("assign property is " + path.node.left.property.name)
                console.log("assing value is " + path.node.right.value)
            }
        }
        // console.log(typeof path)
        // console.log(""+i+":"+path)
        ++i;
    }
})