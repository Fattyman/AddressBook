/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
module.exports={
		readAddressBook : function(){
			var fileName="AddressBook.csv";
			var buf = fs.readFileSync(fileName);
			return buf.toString().split('\r\n');
		}
};