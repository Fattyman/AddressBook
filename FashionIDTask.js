var http = require('http');
var dispatcher = require('httpdispatcher');
var addressBookLib = require('./AddressBook.js');
var answersLib = require('./Answers.js');

http.createServer(
	function handler(req, res) 
	{
		res.writeHead(200, {'Content-Type': 'text/plain'});
//		res.end('Hello World\n');
		dispatcher.dispatch(req, res);
	}
).listen(8081, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8081/');

dispatcher.onGet("/questions", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var addressBook = addressBookLib.readAddressBook();
    res.end(answersLib.produceAllAnswersString(addressBook,'female',['Bill','Paul']));
});    
dispatcher.onGet("/questions/1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var addressBook = addressBookLib.readAddressBook();
    res.end(answersLib.produceAnswerOneString(addressBook,'female'));
});    
dispatcher.onGet("/questions/2", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var addressBook = addressBookLib.readAddressBook();
    res.end(answersLib.produceAnswerTwoString(addressBook));
});    
dispatcher.onGet("/questions/3", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var addressBook = addressBookLib.readAddressBook();
    res.end(answersLib.produceAnswerThreeString(addressBook,['Bill','Paul']));
});    