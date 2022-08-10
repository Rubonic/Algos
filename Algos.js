// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
// Examples
// Input: "xooxxo"
// Output: true
// Input: "x"
// Output: false

function StringChallenge(str) {
    // find largest number
    let xCount = 0;
    // find smallest number
    let oCount = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            // count x
            xCount++;
        }
        if (str[i] === 'o') {
            // count o
            oCount++;
        }
    }

    return xCount === oCount ? 'true' : 'false';
}

// keep this function call here 
console.log(StringChallenge(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Examples
// Input: "after badly"
// Output: false
// Input: "Laura sobs"
// Output: true

function StringChallenge(str) {
    
    let searchLetters = ['a', 'b'];
    
    let letterSpace = 3;
    
    if (str.length < letterSpace + 2) {
        return 'false';
    }
    
    for (let i = 0; i < str.length - letterSpace - 1; i++) {
        if (str[i] === searchLetters[0]) {
            // check if next letter is a
            if (str[i + letterSpace + 1] === searchLetters[1]) {
                return 'true';
            }
        }

        if (str[i] === searchLetters[1]) {
            // check if next letter is b
            if (str[i + letterSpace + 1] === searchLetters[0]) {
                return 'true';
            }
        }
    }

    return 'false';
}

// keep this function call here 
console.log(StringChallenge(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.
// Examples
// Input: [-4, -2, 9, 10]
// Output: -1
// Input: [5, 4, 3, 2, 10, 11]
// Output: 3

function ChangingSequence(array) {
    // Find mean
    let changingSequenceIndex = -1;
    // Find mode
    let findSequence = new String("");
    // Find median
    if (array[0] < array[1]) findSequence = "increasing";
    else if (array[0] > array[1]) findSequence = "decreasing";
    // Find range
    else return -1;
    for (let i = 0; i < array.length; i++) {
        if (findSequence === "increasing" && array[i] > array[i + 1]) {
            changingSequenceIndex = i;
            break;
        }
        else if (findSequence === "decreasing" && array[i] < array[i + 1]) {
            changingSequenceIndex = i;
            break;
        }
    }
    return changingSequenceIndex;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ChangingSequence(readline()));;

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
// Examples
// Input: [1, 2, 3]
// Output: 0
// Input: [4, 4, 4, 6, 2]
// Output: 1

function ArrayChallenge(arr) {
    // Find mean
    let mostOccurances = 0;
    // Find mode
    let mode = 0;
    // Find median
    for (let i = 0; i < arr.length; i++) {
        // find most occurances
        let marco = arr[i];
        for (let j = i + 1, count = 0; j < arr.length; j++) {
            // count occurances
            if (marco === arr[j]) {
                // match!
                count++;
                // update most occurances
                if (count > mostOccurances) {
                    mostOccurances = count;
                    mode = arr[j];
                }
            }
        }
    }

    // Find mean
    let mean = 0;
    for (let i = 0; i < arr.length; i++) {
        mean += arr[i];
    }
    mean = Math.round(mean / arr.length);

    return mean === mode ? 1 : 0;

}

// keep this function call here 
console.log(ArrayChallenge(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.
// Examples
// Input: [5,11,1,5,1]
// Output: true
// Input: [1,8,2,4,4]
// Output: false

function OverlappingRanges(array) {
    let overlappingRange1 = new Array();
    let overlappingRange2 = new Array();
    for (let i = array[0]; i <= array[1]; i++) overlappingRange1.push(i);
    // console.log(overlappingRange1);
    for (let i = array[2]; i <= array[3]; i++) overlappingRange2.push(i);
    // console.log(overlappingRange2);
    let intersection = overlappingRange1.filter(e => overlappingRange2.includes(e));
    // console.log(intersection);
    if (intersection.length >= array[4]) return true;
    // console.log(intersection.length >= array[4]);
    else return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(OverlappingRanges(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, return the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is 3 spaces away from the 1. The array will contain any number of 0's and 2's, but only a single 1. It may not contain any 2's at all as well, where in that case your program should return a 0.
// Examples
// Input: [1, 0, 0, 0, 2, 2, 2]
// Output: 4
// Input: [2, 0, 0, 0, 2, 2, 1, 0]
// Output: 1

function makeMoves(array) {
    // Find 1's index
    let count = 0;
    // Find 2's index
    for (let i = 0; i < array.length; i++) {
        // find 1's index
        count++;
        if (array[i] == 2) {
            break;
        }
        // find 2's index
        if (i == array.length - 1 && array[i] != 2) {
            count = 0;
        }
    }
    return count;
}

function ClosestEnemy(arr) {
    // Find 1's index
    let onePosition = arr.indexOf(1);
    let leftArray = [];
    let rightArray = [];

    // Find left array
    for (let i = onePosition - 1; i >= 0; i--) {
        leftArray.push(arr[i]);
    }

    // Find right array
    for (let i = onePosition + 1; i < arr.length; i++) {
        rightArray.push(arr[i]);
    }
    // console.log(leftArray);
    let leftEnemy = makeMoves(leftArray);
    // console.log(leftEnemy);
    let rightEnemy = makeMoves(rightArray);

    return (leftEnemy > rightArray) ? leftEnemy : rightEnemy;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ClosestEnemy(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Searching Challenge
// Have the function SearchingChallenge(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) {
    // Check if username is between 4 and 25 characters
    var tamano = str.length;
    // Check if username starts with a letter
    patron = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/gm;
    // Check if username contains only letters, numbers, and the underscore character
    var result = false;
    // Check if username ends with an underscore character
    if (tamano <= 25 && tamano >= 4) {
        // Check if username starts with a letter
        result = patron.test(str);
    }
    // code goes here  
    return result;

}

// keep this function call here 
console.log(CodelandUsernameValidation(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// Examples
// Input: [5,7,16,1,2]
// Output: false
// Input: [3,5,-1,8,12]
// Output: true

function ArrayAdditionI(arr) {
    // find largest number
    let largestIndex = 0;
    let largestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        // find largest number
        if (arr[i] > largestNumber) {
            largestIndex = i;
            largestNumber = arr[i];
        }
    }
    // remove largest number from array
    arr.splice(largestIndex, 1);

    // find sum of remaining numbers
    let combos = [];
    // find all combinations of numbers in array
    let size = arr.length;

    // find all combinations of numbers in array
    for (let i = 0, max = Math.pow(2, size); i < max; i++) {
        let num = i.toString(2);
        while (num.length < size) {
            num = '0' + num;
        }
        combos.push(num);
    }

    // iterate over all combos of numbers
    for (let i = 0; i < combos.length; i++) {
        let sum = 0;
        for (let j = 0; j < combos[i].length; j++) {
            if (combos[i][j] === '1') {
                sum += arr[j];
            }
        }

        if (sum === largestNumber) {
            return 'true';
        }
    }
    return 'false';
}

console.log(ArrayAdditionI([5,7,16,1,2]));
console.log(ArrayAdditionI([3,5,-1,8,12]));

// ---------------------------------------------------------------------------------------------------------------------

// String Challenge
// Have the function StringChallenge(strArr) read the array of strings stored in strArr, which will contain two elements, the first some sort of string and the second element will be a number ranging from 1 to 6. The number represents how many rows to print the string on so that it forms a zig-zag pattern. For example: if strArr is ["coderbyte", "3"] then this word will look like the following if you print it in a zig-zag pattern with 3 rows:

// Your program should return the word formed by combining the characters as you iterate through each row, so for this example your program should return the string creoebtdy.
// Examples
// Input: ["cat", "5"]
// Output: cat
// Input: ["kaamvjjfl", "4"]
// Output: kjajfavlm

function StringZigzag(strArr) {
    // get string and number of rows
    if(Number(strArr[1]) === 1) return strArr[0];
    // get string and number of rows
    let zigZagArray;
    // get string and number of rows
    if(Number(strArr[1]) >= strArr[0].length) zigZagArray = new Array(Number(strArr[0].length));
    // get string and number of rows
    else zigZagArray = new Array(Number(strArr[1]));
    // get string and number of rows
    for(let i=0; i<zigZagArray.length; i++) zigZagArray[i] = new Array(Number(strArr[0].length));
    // get string and number of rows
    let row = 0, column = 0, count = 1;
    // get string and number of rows
    for(let i=0; i<strArr[0].length; i++){
            zigZagArray[row][column] = strArr[0][i];
            
            column++;
            if(count>=1 && count<Number(strArr[1])) {
        
                    count++;
                    row++;
            }
            else if(count>=Number(strArr[1]) && count<=(Number(strArr[1])+(Number(strArr[1])-1))) {
                    if(count == (Number(strArr[1])+(Number(strArr[1])-1))) {
                            row = 1;
                            count = row + 1;
                    }
                    else {
                            count++;
                            row--;
                    }
            }
    }
    let zigZagString = new String("");
    for(let i=0; i<zigZagArray.length; i++) for(let j=0; j<zigZagArray[i].length; j++) if(zigZagArray[i][j]) zigZagString += zigZagArray[i][j];
    return zigZagString;
}

// KEEP THIS FUNCTION CALL HERE 
console.log(StringZigzag(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Array Challenge
// Have the function ArrayChallenge(arr) read the array of numbers stored in arr which will represent the hunger level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You will also have N sandwiches to give out which will range from 1 to 20. The format of the array will be [N, h1, h2, h3, ...] where N represents the number of sandwiches you have and the rest of the array will represent the hunger levels of different people. Your goal is to minimize the hunger difference between each pair of people in the array using the sandwiches you have available.

// For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You can distribute them in the following order to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. The difference between each pair of people is now 0, the total is also 0, so your program should return 0. Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized difference.

// Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2, 1, 0]. The differences between each pair of people is now: 0, 0, 1, 1 and so your program should return the final minimized difference of 2.
// Examples
// Input: [5, 2, 3, 4, 5]
// Output: 1
// Input: [3, 2, 1, 0, 4, 1, 0]
// Output: 4

function ArrayChallenge(arr) {
    // get number of sandwiches and array of hunger levels
    let N = arr[0];
    // get number of sandwiches and array of hunger levels
	let myArr = arr.slice(1);
	while (N > 0) {
		let maxDifference = 0;
		let mostNeeded = -1;
		for (let i = 0; i < myArr.length - 1; i++) {
			let difference = Math.abs(myArr[i + 1] - myArr[i]);
			if (difference > maxDifference) {
				maxDifference = difference;
				mostNeeded = myArr[i + 1] > myArr[i] ? i + 1 : i;
			}
		}
		if (maxDifference === 0) {
			return 0;
		} else {
			myArr[mostNeeded] -= 1;
			N--;
		}
	}
	let minimizedDifference = 0;
	for (let j = 0; j < myArr.length - 1; j++) {
		minimizedDifference += Math.abs(myArr[j + 1] - myArr[j]);
	}
	return minimizedDifference;

}

// keep this function call here 
console.log(ArrayChallenge(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// Searching Challenge
// Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

// 1 0 1 1 1
// 1 0 1 0 1
// 1 1 1 0 1
// 1 1 1 1 1

// For the input above, your program should return 2 because there are two separate contiguous regions of 0's, which create "holes" in the matrix. You can assume the input will not be empty.
// Examples
// Input: ["01111", "01101", "00011", "11110"]
// Output: 3
// Input: ["1011", "0010"]
// Output: 2

function SearchingChallenge(strArr) {
    // get string and number of rows
    let count = 0;
    // get string and number of rows
    for(let i=0; i<strArr.length; i++) {
        // get string and number of rows
        for(let j=0; j<strArr[i].length; j++) {
            if(strArr[i][j] === "0") {
                if(i>0 && strArr[i-1][j] === "1") count++;
                if(i<strArr.length-1 && strArr[i+1][j] === "1") count++;
                if(j>0 && strArr[i][j-1] === "1") count++;
                if(j<strArr[i].length-1 && strArr[i][j+1] === "1") count++;
            }
        }
    }
    return count;
}
console.log(SearchingChallenge(readline()));

// ---------------------------------------------------------------------------------------------------------------------

// # Math Challenge
// # Have the function MathChallenge(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.
// # Examples
// # Input: 4
// # Output: 0
// # Input: 25
// # Output: 2

def MultiplicativePersistence(num): 
    steps = 0
    while num > 9:
        // # print(num)
        snum = str(num)
        // # print(snum)
        sdigits = list(snum)
        // # print(sdigits)
        num = 1
        // # print(sdigits)
        for snum in sdigits:
            // # print(snum)
        n = int(snum)
        // # print(n)
        num = num * n
        // # print(num)
        steps = steps + 1
        // # print(steps)
    return steps

    
// # keep this function call here  
// # to see how to enter arguments in Python scroll down
print MultiplicativePersistence(raw_input())

// ---------------------------------------------------------------------------------------------------------------------

// # Searching Challenge
// # Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, which will be a 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

// # 1 0 1 1 1
// # 1 0 1 0 1
// # 1 1 1 0 1
// # 1 1 1 1 1

// # For the input above, your program should return 2 because there are two separate contiguous regions of 0's, which create "holes" in the matrix. You can assume the input will not be empty.
// # Examples
// # Input: ["01111", "01101", "00011", "11110"]
// # Output: 3
// # Input: ["1011", "0010"]
// # Output: 2

count = 0
def BitmapHoles(strArr):
    // # print(strArr)
    newList = []
    // # print(newList)
    def horizontalCount(ourList):  
        // # print(ourList)
        global count
        // # print(count)
        for each in ourList:
            // # print(each)
            z = list(each)
            // # print(z)
            index = 0
            // # print(index)
            while index < len(z)-1:
                // # print(index)
                if z[index] == '0' and z[index+1] == '0':
                    // # print(index)
                    count += 1
                    break
                index +=1
    def transpose():
        // # print(newList)
        newStr = ""
        i = 0
        while i < len(strArr[0]):
            for each in strArr:
                newStr += each[i]
            // # print(newStr)
            newList.append(newStr)
            newStr = ""
            i += 1

    // # print(f"Sample1: {strArr}")
    horizontalCount(strArr)
    // # print(f"Initial count: {count}")
    transpose()
    // # print(f"Transposed Sample: {newList}")
    horizontalCount(newList)
    // # print(f"Final count: {count}")
    return count

print(BitmapHoles(["01111", "01101", "00011", "11110"]))