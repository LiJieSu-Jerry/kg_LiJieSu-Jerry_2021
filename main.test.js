var mainScript  = require('./main.js')
var expect = require('chai').expect


const compareArr = function (a1, a2) {
   var i = a1.length;
   if (i != a2.length) return false;

   while (i--) {
     if (a1[i] !== a2[i]) return false;
   }
   return true;
 };

describe('Convert single digit numbers to words', function() {
  it("Function didn't works as expected" , function() {
  	arr=['1','2','3','4','5','6','7','8','9','0']
  	wordsArr=['One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Zero']
  	arr.forEach(mainScript.convertNumber_to_words)
    expect(compareArr(arr,wordsArr)).to.be.equal(true)
  });
});

describe('Convert multiple digits numbers to words', function() {
  it("Function didn't works as expected" , function() {
  	arr=['12','345','67890']
  	wordsArr=['OneTwo','ThreeFourFive','SixSevenEightNineZero']
  	arr.forEach(mainScript.convertNumber_to_words)
    expect(compareArr(arr,wordsArr)).to.be.equal(true)
  });
});

describe('Standard output requirement test', function() {
  it("Function didn't works as expected" , function() {
  	arr=['One','Two','Three']
    expect(mainScript.array_to_string(arr)).to.be.equal('One, Two, Three')
  });
});

