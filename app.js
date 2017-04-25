var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'));
// app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', function(req, res){
	res.render('index')
});
app.get('/contact', function(req, res){
	console.log(req.query)

	res.render('contact')
});

app.get('/profile/:name', function(req, res){
	// res.send('You requested profle: ' + req.params.id);
	var data = {Genre: 'R&B', Talent: 'Vocalist', Location: 'Atlanta, Ga.', limelight:  ['https://tllis.net', 'Follow my Youtube', 'Managed by LMG']}
	res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);

// GET - app.get('route',fn)
// POST - app.post('route',fn)
// DELETE - app.delete('route',fn)



















// // var stuff = require('./stuff');
// var events = require('events');
// var util = require('util');
// // var Person = function(name){
// 	// this.name = name;
// // }
// var fs = require('fs');
// var http = require('http')

// var server = http.createServer(function(req, res){
// 	console.log('request was made' + req.url);
// 	// res.writeHead(200, {'Content-Type': 'application/json'});

// 	// res.end('King Weezy in this theezy');

// 	if(req.url === '/home' || req.url === '/'){
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
// 	} else if(req.url === '/contact'){
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
// 	} else if(req.url === '/api/music'){
// 		var music = [{Artist_name: 'Zay', Genre: 'R&B', Talent: 'Vocalist', Site: 'https://tllis.net', Location: 'Atlanta, Ga.'}]
// 		res.writeHead(200, {'Content-Type': 'application/json'});
// 		res.end(JSON.stringify(music));
// 	} else {
// 		res.writeHead(404, {'Content-Type': 'text/html'});
// 		fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
// 	}

// 	// var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
// 	// // var myWriteSream = fs.createWriteStream(__dirname + '/writeMe.txt');
// 	// myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log("the server is running on 3000, Boss. Let's go!")

// // util.inherits(Person, events.EventEmitter)

// // var james = new Person('james');
// // var mary = new Person('mary');
// // var steve = new Person('steve');

// // var people = [james, mary, steve];

// // people.forEach(function(person){
// // 	person.on('speak', function(msg){
// // 		console.log(person.name +' said: ' + msg);
// // 	});
// // });
// // james.emit('speak', 'I am King Wayne!')
// // var myEmitter = new events.EventEmitter();
// // myEmitter.on('someEvent', function(msg){
// // 	console.log(msg)
// // });
// // myEmitter.emit('someEvent', 'the event was emited');
// // console.log('going going gone')
// // let time = 0;
// // setTimeout(function(){
// // 	console.log('six secs have passed')
// // }, 6000)

// // var timer = setInterval(function(){
// // 	time += 2;
// // 	console.log( time + ' secs have passed');
// // 	if(time > 18){
// // 		clearInterval(timer);
// // 	}
// // }, 2000)  
// // console.log(__dirname)
// // console.log(__filename)

// // function callFunction(fun){
// // 	fun();
// // }

// // var bye = function(){
// // 	console.log('bye');
// // };

// // callFunction(bye);
// // console.log(stuff.counter(['king', 'weezy', 'LMG']));
// // var a = console.log(stuff.adder(99,95));
// // console.log((stuff.pi * 8));

