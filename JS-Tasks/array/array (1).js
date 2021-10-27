console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
let arr1=[1,7,9,45,["Str" ,"alex","moh",'the','fox', 'over','lazy', 'dog',]];

/*
2
What the index of "Banana","Tomato"

*/
var fruits=["Tomato","Banana","Watermelon"];
console.log("the index of "+fruits[1]+" is 1");
console.log("the index of "+fruits[0]+" is 0");

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favorite=["My favorite Food is Burger", "My favorite Sport is Running", "My favorite Movie is 3 idiots"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
let firstArray=["t","u","g","x"];
function firstOfArray(firstArray){
    return firstArray[0];
}
console.log("The First element in this array is: "+firstOfArray(firstArray));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let lastArray=["t","u","g","x"];
function lastOfArray(lastArray){
    return lastArray[lastArray.length-1];
}
console.log("The Last element in this array is: "+lastOfArray(lastArray));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.unshift(1,3,4,6,8,9,10)
for(let i=0; i<=3 ;i++){
    array.pop();
}
console.log(array);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

*/
var array2 = [5,9,-7,3.5];
array2.push(1);
console.log("push(1) method adds element\"1\" to the end of array2---> " + array2);
array2.unshift(10);
console.log("unshift(10) method adds element\"10\" to the beginning of array2---> " + array2);
array2.shift();
console.log("shift() method removes the first element\"10\" of the array2---> " +array2);
array2.pop();
console.log("pop() method removes the last element\"1\" of the array2---> " +array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
let middleArray=[1,2,"a",3,"b"];
let middle=(middleArray.length)/2;
let mode2=(middleArray.length)%2;
function middleOfArray(middleArray){
    if(mode2==0){
        return "the middle for even array are: "+ middleArray[middle-1]+" and "+ middleArray[middle];
    }
else{
    return middleArray+" the middle for odd array is: "+ middleArray[middle-0.5];
}
}
console.log( middleOfArray(middleArray));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
let animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[1]='elephant';
animals.pop();
console.log(animals);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
let nums= [1,2,3,8,9];
let index;
function indexOfArray(nums,index){
    return nums,nums[index];
}
console.log(indexOfArray(nums,4));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(nums){
    nums.pop();
   return nums;
}
console.log(arrayExceptLast(nums));
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
let value;
function addToEnd(nums,value){
    nums.push(value);
    return nums;
}
console.log(addToEnd(nums,"aya"));
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let numbers= [1,2,3,8,9]
let sum=0;
function sumArray(numbers){
for( let i=0;i<numbers.length;i++){
sum+=numbers[i];
}
return sum;
}
console.log("summation of numbers array is: "+sumArray(numbers));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let min=9;
function minInArray(numbers){
for(let i=0;i<numbers.length;i++){
    if(numbers[i]<min){
        min=numbers[i]
    }
}
return min;
}
console.log("min num in array is: "+minInArray(numbers))
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
nums= [1,2,3,8,9]
let element;
function removeFromArray(nums,element){
for(i=0;i<nums.length;i++){
    if(nums[i]===element){
        nums.splice(i,1);
    }
}
return nums
}
console.log(removeFromArray(nums,8))

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
nums= [1,2,3,8,9,10,11,99,22];
function oddArray(nums){
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2==0){
          nums.splice(i,1);
        }
    }
    return nums;
} 
console.log(oddArray(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
nums= [1,2,3,8,9,77]
sum=0;
let avg=0;
function  aveArray(nums){
for(i=0;i<nums.length;i++){
sum+=nums[i];
}
avg= sum/nums.length
return avg;
}
console.log("the average of this array "+nums+"is: "+aveArray(nums))
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let strArr;
let shortest="pppppppppppppppppppppppp";
function shorterInArray(strArr){
    for(i=0;i<strArr.length;i++){
      if(strArr[i].length<shortest.length){
          shortest=strArr[i];
      }
    }
    return shortest;
}
console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala","aya"]))
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var name;
let repeat=0;
function repeatChar(name){
    for(i=0;i<name.length;i++){
        if(name[i]=== "a"){
            repeat+=1;
        }
    }
    return repeat;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala aya salama"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(strArr){
    for(i=0;i<strArr.length;i++){
        if(i%2==0){
            if(strArr[i].length%2!=0)
            {return strArr[i]}
        }
    }
}
console.log(evenIndexOddLength(["alex","mercer","madrasa","rashed2","emad","hala"]))
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function  powerElementIndex(nums){
    for(i=0;i<nums.length;i++){
        nums[i]=Math.pow(nums[i],i);
    }
    return nums;
}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]))

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let evennumberEvenIndex=[];
let j=0;
function evenNumberEvenIndex(nums){
    for(i=0;i<nums.length;i++){
        if(i%2==0){
            if(nums[i]%2==0){
            evennumberEvenIndex[j]= nums[i];
            j++
        }}
    }return evennumberEvenIndex;
}
console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1,10,11,50]));
