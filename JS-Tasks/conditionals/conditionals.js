/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/

let num1, num2;

num1 = window.prompt("Enter the First Num");
num2 = window.prompt("Enter the Second Num");

if (num1 > num2) {
  console.log(`The larger num of ${num1} and ${num2} is ${num1}`);
} else if (num2 > num1) {
  console.log(`The larger num of ${num1} and ${num2} is ${num2}`);
} else {
  console.log(`the values of ${num1} and ${num2} are Equal!`);
}

/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let x = 3,
  y = -7,
  z = 2;

if (x > 0 && y > 0 && z > 0) {
  alert(`The Sign is +`);
} else if (x < 0 && y < 0 && z < 0) {
  alert("The Sign is -");
} else if (x > 0 && y < 0 && z < 0) {
  alert("The Sign is +");
} else if (x < 0 && y > 0 && z < 0) {
  alert("The Sign is +");
} else {
  alert("The Sign is -");
}

/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function sort(x, y, z) {
  if (x > y && x > z) {
    if (y > z) {
      console.log(`${x} ${y} ${z}`);
    } else {
      console.log(`${x} ${z} ${y}`);
    }
  } else if (y > x && y > z) {
    if (x > z) {
      console.log(`${y} ${x} ${z}`);
    } else {
      console.log(`${y} ${z} ${x}`);
    }
  } else if (z > x && z > y) {
    if (x > y) {
      console.log(`${z} ${x} ${y}`);
    } else {
      console.log(`${z} ${y} ${x}`);
    }
  }
}
sort(0, -1, 4);
/******* End Your Code ********* */

/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
function larger(n1, n2, n3, n4, n5) {
  let largest;
  if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
    largest = n1;
  } else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
    largest = n2;
  } else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
    largest = n3;
  } else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5) {
    largest = n4;
  } else {
    largest = n5;
  }

  console.log(`the largest number is ${largest}`);
}
larger(1, 2, 10, 4, 15);
/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
function HelloWorld(x, y) {
  if (x >= y) console.log(`Hello World!`);
  else console.log(`Good Bye!`);
}
HelloWorld(4, 5);
/******* End Your Code ********* */
