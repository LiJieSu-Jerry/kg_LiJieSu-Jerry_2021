/*
Author: LiJie, Su
Language: JavaScript v14.16.1
Email: ls8513a@student.american.edu
Function description:
	Read a list of numbers and convert it to words.
*/
function convertNumber_to_words(item,index,arr){
	let tmpString="" //tmpString will replace the item in args array 
	for(let i of item){ //convert the number one by one
		switch(i){
			case "0":
				tmpString+="Zero"
				break
			case "1":
				tmpString+="One"
				break
			case "2":
				tmpString+="Two"
				break
			case "3":
				tmpString+="Three"
				break
			case "4":
				tmpString+="Four"
				break
			case "5":
				tmpString+="Five"
				break
			case "6":
				tmpString+="Six"
				break
			case "7":
				tmpString+="Seven"
				break
			case "8":
				tmpString+="Eight"
				break
			case "9":
				tmpString+="Nine"
				break
		}
	}
	arr[index]=tmpString
}

function array_to_string(args){
	args=args.join(', ')
	return args
}

var main=function(){ //assign main function to variable
	var args = process.argv.slice(2) //get rid of folder directory
	args.forEach(convertNumber_to_words)
	process.stdout.write(array_to_string(args))
}

if (require.main === module) { //check is main executing or not
	main()
}

exports.convertNumber_to_words=convertNumber_to_words
exports.array_to_string=array_to_string