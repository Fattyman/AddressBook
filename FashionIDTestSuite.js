/**
 * 
 */

//var task = require('./FashionIDTask');
var addressBookLib = require('./AddressBook.js');
var answersLib = require('./Answers.js');
var addressBookMockUp=['Bill McKnight, Male, 16/03/77','Paul Robinson, Male, 15/01/85','Gemma Lane, Female, 20/11/91'];

var testResult = true;

function TestSuite(){
	testReadAddressBook();
	testCollectPersonsBySex();
	testProduceAnswerOneString();
	testGetDateFromAddressBookEntry();
	testOldestPerson();
	testProduceAnswerTwoString();
	testGetEntriesByForeNames();	
	testGetDayDifferenceFromEntries();
	testProduceAnswerThreeString();
	testProduceAllAnswersString();
	
	if(testResult)
		console.log('PASSED : All tests');
	else
		console.warn('FAILED: Some tests failed! Please refactor');
}

function testReadAddressBook(){
	var addressBook = null; 
	try{
		addressBook = addressBookLib.readAddressBook();
	}catch(e){
		console.warn('FAILED : testReadAddressBook\n.... readAddressBook does not exist');
		testResult = false;
		return;
	}
	console.log('.... readAddressBook done');
	if(!(addressBook instanceof Array)){
		console.warn("FAILED : testReadAddressBook\n.... AddressBook is no array");
		testResult = false;
		return
	}
	console.log('.... Address book has entries');
	if(addressBook.length != 5){
		console.warn("FAILED : testReadAddressBook\n.... AddressBook has wrong no of entries");
		testResult = false;
		return
	}
	console.log('.... Address book has the right no of entries');
	console.log('PASSED : testReadAddressBook');
}

function testCollectPersonsBySex(){
	var no = answersLib.collectPersonsBySex(addressBookMockUp,'female');
	if(no!=1)
	{
		console.warn("FAILED : testCollectPersonsBySex\n.... collectPersonsBySex with functional mockup failed");
		testResult = false;
		return
	}
	console.log(".... collectFemalePersons with functional mockup passed");
	no = answersLib.collectPersonsBySex({},'female');
	if(no!=-1){
		console.warn("FAILED : testCollectPersonsBySex\n.... with non-array failed");
		testResult = false;
		return
	}
	console.log(".... collectFemalePersons with non-array passed");
	no = answersLib.collectPersonsBySex([],'female');
	if(no!=0){
		console.warn("FAILED : testCollectPersonsBySex\n.... with zero sized array failed");
		testResult = false;
		return
	}
	console.log(".... collectPersonsBySex with zero sized array passed");
	console.log('PASSED : testCollectPersonsBySex');
}

function testProduceAnswerOneString(){
	var answerOne = null;
	
	try{
		answerOne = answersLib.produceAnswerOneString(addressBookMockUp,'female');
	}catch(e){
		console.warn("FAILED : testProduceAnswerOneString\n.... produceAnswerOneString missing");
		testResult = false;
		return
	}
	console.log(".... produceAnswerOneString exists!");
	if(answerOne == null){
		console.warn("FAILED : testProduceAnswerOneString\n.... produceAnswerOneString delivers no result");
		testResult = false;
		return
	}
	console.log(".... produceAnswerOneString has a result!");
	if(answerOne != '1, 1\n'){
		console.warn("FAILED : testProduceAnswerOneString\n.... produceAnswerOneString has wrong result");
		testResult = false;
		return
	}
	console.log("PASSED : testProduceAnswerOneString");
}

function testGetDateFromAddressBookEntry(){
	var date = null;
	try{
		date = answersLib.getDateFromAddressBookEntry(addressBookMockUp[0]);
	}catch(e){
		console.warn('FAILED : testGetDateFromAddressBookEntry\n.... getDateFromAddressBookEntry does not exist');
		testResult = false;
		return;
	}
	console.log('.... getDateFromAddressBookEntry exists!');
	if(!(date instanceof Date)){
		console.warn('FAILED : testGetDateFromAddressBookEntry\n.... getDateFromAddressBookEntry delivers wrong type');
		testResult = false;
		return;
	}
	console.log('PASSED : testGetDateFromAddressBookEntry');
}

function testOldestPerson(){
	var result = answersLib.oldestPerson(addressBookMockUp);
	if(result!='Bill McKnight')
	{
		console.warn("FAILED : testOldestPerson\n.... oldestPerson failed!");
		testResult = false;
		return
	}
	console.log("PASSED : testOldestPerson!");
}

function testProduceAnswerTwoString(){
	var answerTwo = answersLib.produceAnswerTwoString(addressBookMockUp);
	if(answerTwo != '2, Bill McKnight\n'){
		console.warn("FAILED : testProduceAnswerTwoString\n.... produceAnswerTwoString delivers wrong answer");
		testResult = false;
		return
	}
	console.log("PASSED : testProduceAnswerTwoString");
}

function testGetEntriesByForeNames(){
	var entries = answersLib.getEntriesByForeNames(addressBookMockUp,['Bill','Paul']);
	if(entries.length!=2){
		console.warn("FAILED : testGetEntriesByForeNames\n.... getEntriesByForeNames delivers wrong no of entries!");
		testResult = false;
		return
	}
	console.log(".... getEntriesByForeNames returned correct number of values");
	if(
		!(
				(
						entries[0].startsWith('Bill') && entries[1].startsWith('Paul')
				)
				||
				(
						entries[0].startsWith('Paul') && entries[1].startsWith('Bill')
				)
		)
	){
		console.warn("FAILED : testGetEntriesByForeNames\n.... getEntriesByForeNames returned wrong entries");
		testResult = false;
		return
	}
	console.log("PASSED : testGetEntriesByForeNames");
}

function testGetDayDifferenceFromEntries()
{
	var diff = -1;
	try{
		diff = answersLib.getDayDifferenceFromEntries(addressBookMockUp);
	}catch(e){
		console.warn("FAILED : testGetDayDifferenceFromEntries\n.... getDayDifferenceFromEntries missing!");
		testResult = false;
		return;
	}
	console.log(".... getDayDifferenceFromEntries exists");
	if(diff!=2862){
		console.warn("FAILED : testGetDayDifferenceFromEntries\n.... getDayDifferenceFromEntries delivers wrong result!");
		testResult = false;
		return;		
	}
	console.log("PASSED : testGetDayDifferenceFromEntries");
}

function testProduceAnswerThreeString(){
	var result = null;
	try{
		result = answersLib.produceAnswerThreeString(addressBookMockUp,['Bill','Paul']);
	}catch(e){
		console.warn("FAILED : testProduceAnswerThreeString\n.... produceAnswerThreeString missing!");
		testResult = false;
		return;
	}
	if(result != '3, 2862\n'){
		console.warn("FAILED : testProduceAnswerThreeString\n.... produceAnswerThreeString delivers wrong result!");
		testResult = false;
		return;		
	}
	console.log("PASSED : testProduceAnswerThreeString");
}

function testProduceAllAnswersString(){
	var result = null;
	try{
		result = answersLib.produceAllAnswersString(addressBookMockUp,'female',['Bill','Paul']);
	}catch(e){
		console.warn("FAILED : testProduceAllAnswersString\n.... produceAllAnswersString missing!");
		testResult = false;
		return;
	}
	if(result != '1, 1\n2, Bill McKnight\n3, 2862\n'){
		console.warn("FAILED : testProduceAllAnswersString\n.... produceAllAnswersString delivers wrong result!");
		testResult = false;
		return;		
	}
	console.log("PASSED : testProduceAllAnswersString");
}

TestSuite();