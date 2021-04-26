
var args = process.argv.slice(2)

function convertNumber_to_words(item,index,arr){
	let tmpString=""
	for(let i of item){
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

function stdout(item,index,array){
	process.stdout.write(item+" ")
}

args.forEach(convertNumber_to_words)
args.forEach(stdout)

