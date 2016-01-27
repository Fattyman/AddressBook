

# FashionIDTask



## Usage

node FashionIDTask

Open up a web browser
type in the following URLs:

http://localhost:8081/questions
http://localhost:8081/questions/1
http://localhost:8081/questions/2
http://localhost:8081/questions/3


to unit test the code, call following:

node FashionIDTestSuite

It tests reading of the address book file and different aspects of the answers constructions logic,
like entry parsing, entry filtering and so on.

## Developing

Following files are important:

FashionIDTask.js - The server script which maps all requests to the neccessary answers
FashionIDTestSuite.js - The Unit-Test script which unit tests the algorithms to gather the neccessary information
AddressBook.js - A script for reading the address book file
Answers.js - The main logic file that produces the answers on all questions. The unit tests are targeted here.
AddressBook.csv - The address book file which is a simple csv formatted one

Used - external - libraries:
httpdispatcher - for mapping the urls to different questions

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
