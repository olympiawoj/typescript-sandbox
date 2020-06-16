var myString: string
var myNum: number;
var myBool: boolean;
var myVar: any;

/*
var strArr: string[];
var numArr: number[];
var boolArr: boolean[];
*/

var strArr: Array<string>;
var numArr: Array<number>;
var boolArr: Array<boolean>;

var strNumTuple: [string, number]

var myVoid: void = undefined;
var myNull: null = undefined;
var myUndefined: undefined = undefined;

myString = 'Hello World'
myNum = 222
myBool = true
myVar = 'Hello'

strArr = ["Hello", "World"]
numArr = [1, 2, 3]
boolArr = [true, false, true]

strNumTuple = ['Hello', 4]
//strNumTuple = [4, 'Hello'] //error - has to match exactly

console.log(myVoid)