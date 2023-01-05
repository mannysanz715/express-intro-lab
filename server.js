// import modules

import express from 'express'

import { todos } from './data/todo-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res){
  res.redirect('/home')
})

app.get('/home', function(req, res){
  res.render('<h1>Home</h1>')
})

app.get('/', function(req, res){
  res.send('<h1>Hello World</h1>')
})

app.get('/about', function(req, res){
  res.send('<h1>About Page</h1>')
})

app.get('/todos', function(req, res){  //? app.get uses '/'
  res.render('todos/index', {
    todos
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
