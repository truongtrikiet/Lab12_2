
// import express from "express";
// import path from "path";
// import router from "./routes/index.js"
// import productRouter from "./routes/product.js";
// import mongoose from "mongoose";


// const module = require("module")
const path = require("path")
// var path = require('path');
const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

const connectionString = 'mongodb+srv://trikiettruong2003:Trikiet123@trikiet.kvynk6h.mongodb.net/'

// (0) CONNECT: server -> connect -> MongoDB Atlas 
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')

        const db = client.db('project_node')
        const quotesCollection = db.collection('quotes')
        const Product = db.collection('product')
        
        app.set('view engine', 'ejs') 
        
        app.use(bodyParser.urlencoded({ extended: true }))

        console.log(path.join(__dirname, "/public"))
        app.use("/", express.static(path.join(__dirname, '/public')))


        app.use(bodyParser.json())

        // app.get('/admin', (req, res) => {
        //     res.render("admin.ejs")
        // })

        app.get('/', (req, res) => {
            res.render('index.ejs')
        })

        app.get('/index', (req, res) => {
            db.collection('product').find().toArray()
                .then(results => {

                    // results -> server -> console
                    console.log(results)
                    
                    // results -> index.ejs -> client -> browser 
                    // The file 'index.ejs' must be placed inside a 'views' folder BY DEFAULT
                    res.render('index.ejs', { product: results })
                })
                .catch(/* ... */)
        })

        app.get('/', (req, res) => {
            res.render('product-list.ejs')
        })
        app.get('/list',(req,res)=>{
            db.collection('product').find().toArray()
                .then(results => {

                    // results -> server -> console
                    console.log(results)
                    
                    // results -> index.ejs -> client -> browser 
                    // The file 'index.ejs' must be placed inside a 'views' folder BY DEFAULT
                    res.render('product-list.ejs', { product: results })
                })
                .catch(/* ... */)
        })

        app.post('/add', (req, res) => {
            Product.insertOne(req.body)
            .then(result => {
                
                // results -> server -> console
                console.log(result)
                // -> redirect -> '/'
                res.render('product-add.ejs')
             })
            .catch(error => console.error(error))
            // console.log("sdsfdsfs")
        }) 
        app.get('/add',(req,res)=>{
            res.render('product-add.ejs')
        })


        app.post('/delete', (req, res) => {
            // db.deleteOneOne(req.body)
            db.collection('product').find().toArray()
            .then(result => {              
                // results -> server -> console
                console.log(result)
                // -> redirect -> '/'
                res.render('product-list.ejs')
             })
            .catch(error => console.error(error))
            // console.log("sdsfdsfs")
        }) 
        app.get('/delete', (req, res) => {
            db.deleteOneOne()
            res.render('product-list.ejs')
        })


        app.post('/edit', (req, res) => {
            db.deleteOneOne(req.body)
            .then(result => {              
                // results -> server -> console
                console.log(result)
                // -> redirect -> '/'
                res.render('product-edit.ejs')
             })
            .catch(error => console.error(error))
            // console.log("sdsfdsfs")
        }) 
        app.get('/edit', (req, res) => {
            res.render('product-edit.ejs')
        })

        
        app.post('/edit', (req, res) => {
            db.insertOne(req.body)
            .then(result => {
                console.log(result)
                res.render('product-list.ejs')
            })
        })
        app.get('/save', (req, res) => {
            res.render('product-save.ejs')
        })

        app.get('/login', (req, res) => {
            res.render('login.ejs')
        })


        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
            .then(result => {
                
                // results -> server -> console
                console.log(result)

                // -> redirect -> '/'
                res.redirect('/')
             })
            .catch(error => console.error(error))
        })
        
        // server -> listen -> port -> 3000
        app.listen(3000, function() {
            console.log('listening on 3000')
        })
    })


