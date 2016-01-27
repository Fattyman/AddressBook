/**
 * 
 */
module.exports={
		collectPersonsBySex : function(addressBook,givenSex){
			if(!(addressBook instanceof Array))
				return -1;
			if(addressBook.length==0)
				return 0;
			var matchedPersons = 0;
			addressBook.forEach(entry => {
				var parts = entry.split(',');
				var sex=parts[1].trim().toLowerCase();
				if(sex == givenSex){
					matchedPersons++;
				}
			});
			return matchedPersons;
		},
		getDateFromAddressBookEntry : function(entry){
			var parts = entry.split(',')[2].trim().split('/');
			return new Date(parts[2],parts[1]-1,parts[0]);
		},
		oldestPerson : function(addressBook){
			if(!(addressBook instanceof Array))
				return '';
			if(addressBook.length==0)
				return '';
			addressBook.sort((a,b) => {
				var dateA = this.getDateFromAddressBookEntry(a);
				var dateB = this.getDateFromAddressBookEntry(b);
				return dateA > dateB;
			});
			return addressBook[0].split(',')[0];
		},
		getEntriesByForeNames : function(addressBook,forenames){
			return addressBook.filter(entry=>{
				var name = entry.split(',')[0];
				var forename = name.split(' ')[0];
				var forenamefound = false;
				forenames.forEach(actualforename=>{
					if(forename==actualforename)
					{
						forenamefound=true;
					}
				})
				return forenamefound;
			});
		},
		getDayDifferenceFromEntries : function(addressBook){
			var dateA = this.getDateFromAddressBookEntry(addressBook[0]);
			var dateB = this.getDateFromAddressBookEntry(addressBook[1]);
			var diff = dateA>dateB ? dateA-dateB : dateB-dateA;
			return diff/(1000*60*60*24);
		},
		produceAnswerOneString : function(addressBook,givenSex){
			return '1, '+this.collectPersonsBySex(addressBook,givenSex)+'\n';
		},
		produceAnswerTwoString : function(addressBook){
			return '2, '+this.oldestPerson(addressBook)+'\n';
		},
		produceAnswerThreeString : function(addressBook,forenames){
			return '3, '+this.getDayDifferenceFromEntries(this.getEntriesByForeNames(addressBook,forenames))+'\n';
		},
		produceAllAnswersString : function(addressBook,givenSex,forenames){
			return this.produceAnswerOneString(addressBook,givenSex)+
				this.produceAnswerTwoString(addressBook)+
				this.produceAnswerThreeString(addressBook,forenames);
		}
};