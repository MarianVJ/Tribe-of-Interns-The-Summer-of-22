// 1.1 There are 3 many methods in Javascript, but the main one are on the classes: String, Array, Number, Objects.

// So here are some methods

// .filter returns an array with all the elements of another array that meet a determined condition
const numbers = [20, 200, 30, 45, 100, 102];
const result = numbers.filter(n => n <= 100);

console.log(result)

// .some  returns a bool if at least one element in an array meets a determined condition
ages = [20, 13, 12];
const areAdults = ages.some(n => n >= 18);
console.log(areAdults)

// .every returns a bool if all of the elements in an array meets a determined condition
ages = [20, 13, 18, 43];
allAdults = ages.every(n => n >= 18);
console.log(allAdults)

// Array.from() returns an array created from any object with length or an iterable object like a string.
const lastName = 'mato';
const lnArray = Array.from(lastName);
console.log(lnArray)

// Object.assign() copies one or more source objects to a target object. It replaces all the properties on the target object with the ones in the source objects.

// - Clone an object
const source = { "propA": 1 };
const copy = Object.assign({}, source);
console.log(copy)


// - Multiple sources with different properties
source1 = { "propA": 1 };
source2 = { "propB": 2 };
 source3 = { "propC": 3 };
 target = Object.assign(source1, source2, source3);
console.log(target)

// - Multiple sources with same properties
source1 = { "propA": 1, "propB": 2};
source2 = { "propB": 2 };
source3 = { "propC": 3 };
target = Object.assign(source1, source2, source3);
console.log(target)

// String.split() separates a certain string into multiple substrings using a specified separator.
 str = 'text1,text2,text3';
 splitted = str.split(",");
console.log(splitted)

// String.slice()  extracts a section of a string, delimited by two indexes, and returns a new one.
str = 'alpha,beta,gamma';
 sliced = str.slice(6, 10);
console.log(sliced)


//String.indexOf()
 str = 'There is a snake in my boot';
 index = str.indexOf('snake');
console.log(index)




// 1.2. Diferenta dintre var, let, const.


//  Variable ‘a’ is declared globally. So, the scope of the variable ‘a’ is global, and it can be accessible everywhere in the program.
var a = 10
function f(){
    console.log(a)
}
f();
console.log(a);



//  The variable ‘a’ is declared inside the function. If the user tries to access it outside the function, it will display the error. Users can declare the 2 variables with the same name using the var keyword. Also, the user can reassign the value into the var variable. 
function f() {
 
    // It can be accessible any
    // where within this function
    var a = 10;
    console.log(a)
}
f();

// A cannot be accessible
// outside of function
console.log(a);

// User can re-declare variable using var and user can update var variable. 
var a = 10
   
// User can re-declare
// variable using var
var a = 8

// User can update var variable
a = 7
console.log(a)

//  If users use the var variable before the declaration, it initializes with the undefined value.
console.log(aa);
var aa = 10;


// let keyword in JavaScript: The let keyword is an improved version of the var keyword. 
// Scope: block scoped: The scope of a let variable is only block scoped. It can’t be accessible outside the particular block ({block}). Let’s see the below example.
let aaa = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();

//The code returns an error because we are accessing the let variable outside the function block.
// let aaaa = 10;
// function f() {
//     if (true) {
//         let b = 9

//         // It prints 9
//         console.log(b);
//     }

//     // It gives error as it
//     // defined in if block
//     console.log(b);
// }
// f()

// // It prints 10
// console.log(a)


//  Users cannot re-declare the variable defined with the let keyword but can update it.
// let a = 10
 
// // It is not allowed
// let a = 10

// // It is allowed
// a = 10


//Users can declare the variable with the same name in different blocks using the let keyword.
let a_ = 10
if (true) {
  let a_=9
  console.log(a_) // It prints 9
}
console.log(a_) // It prints 10




// const keyword in JavaScript: The const keyword has all the properties that are the same as the let keyword, except the user cannot update it.

// Scope: block scoped: When users declare a const variable, they need to initialize it, otherwise, it returns an error. The user cannot update the const variable once it is declared. 

// We are changing the value of the const variable so that it returns an error. The output is shown in the console.
// const a_1 = 10;
// function f() {
//     a_1 = 9
//     console.log(a_1)
// }
// f();


// Users cannot change the properties of the const object, but they can change the value of properties of the const object.

// const _a = {
//     prop1: 10,
//     prop2: 9
// }
 
// // It is allowed
// _a.prop1 = 3

// // It is not allowed
// _a = {
//     b: 10,
//     prop2: 9
// }





// Spread operator.


// Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers_ = [1, 2, 3];
  
  console.log(sum(...numbers_));

  
  console.log(sum.apply(null, numbers_));


//Syntax
// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4', 'five', 6]
// { ...obj, key: 'value' }

// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:
// Function arguments list (myFunction(a, ...iterableObj, b))
// Array literals ([1, ...iterableObj, '4', 'five', 6])
// Object literals ({ ...obj, key: 'value' })
// Although the syntax looks the same, they come with slightly different semantics.


//Only iterable objects, like Array, can be spread in array and function parameters. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:
// const obj = { key1: 'value1' };
// const array = [...obj]; // TypeError: obj is not iterable


// On the other hand, spreading in object literals enumerates the own properties of the object. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.
// const array = [1, 2, 3];
// const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }
// When using spread syntax for function calls, be aware of the possibility of exceeding the JavaScript engine's argument length limit. See Function.prototype.apply() for more details.

// Examples
//Spread in function calls
// Replace apply()
// It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

function myFunction(x, y, z) {}
 args = [0, 1, 2];
myFunction.apply(null, args);

// With spread syntax the above can be written as:
function myFunction(x, y, z) {}
 args = [0, 1, 2];
myFunction(...args);


//Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.
function myFunction(v, w, x, y, z) {}
 args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);

// Apply for new operator
// When calling a constructor with new, it's not possible to directly use an array and apply(), because apply() calls the target function instead of constructing it, which means, among other things, that new.target will be undefined. However, an array can be easily used with new thanks to spread syntax:
const dateFields = [1970, 0, 1];  // 1 Jan 1970
const d = new Date(...dateFields);


// Spread in array literals
// A more powerful array literal
// Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]
// Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.


//Copy an array
const arr = [1, 2, 3];
 arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected

//A better way to concatenate arrays
//Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:
let arr1 = [0, 1, 2];
 arr2 = [3, 4, 5];

// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
console.log(arr1)


// With spread syntax this becomes:
 arr1 = [0, 1, 2];
 arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
// arr1 is now [0, 1, 2, 3, 4, 5]


//Array.prototype.unshift() is often used to insert an array of values at the start of an existing array. Without spread syntax, this is done as:
 arr1 = [0, 1, 2];
 arr2 = [3, 4, 5];

//  Prepend all items from arr2 onto arr1
Array.prototype.unshift.apply(arr1, arr2);

//  arr1 is now [3, 4, 5, 0, 1, 2]

//With spread syntax, this becomes:
 arr1 = [0, 1, 2];
 arr2 = [3, 4, 5];

arr1 = [...arr2, ...arr1];
//  arr1 is now [3, 4, 5, 0, 1, 2]

//Spread in object literals

//Shallow-cloning (excluding prototype) or merging of objects is possible using a shorter syntax than Object.assign().
 obj1 = { foo: 'bar', x: 42 };
 obj2 = { foo: 'baz', y: 13 };

 clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

 mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

//Note that Object.assign() can be used to mutate an object, whereas spread syntax can't.
 obj1 = { foo: 'bar', x: 42 };
Object.assign(obj1, { x: 1337 });
console.log(obj1); // Object { foo: "bar", x: 1337 }

//In addition, Object.assign() triggers setters on the target object, whereas spread syntax does not.
 objectAssign = Object.assign({ set foo(val) { console.log(val); } }, { foo: 1 });
// Logs "1"; objectAssign.foo is still the original setter

 spread = { set foo(val) { console.log(val); }, ...{ foo: 1 } };
// Nothing is logged; spread.foo is 1

//You cannot naively re-implement the Object.assign() function through a single spread operator:
 obj1 = { foo: 'bar', x: 42 };
 obj2 = { foo: 'baz', y: 13 };
 merge = (...objects) => ({ ...objects });

 mergedObj1 = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

 mergedObj2 = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

//In the above example, the spread syntax does not work as one might expect: it spreads an array of arguments into the object literal, due to the rest parameter. Here is an implementation of merge using the spread operator, whose behavior is similar to Object.assign(), except that it doesn't trigger setters, nor mutates any object:
 obj1 = { foo: 'bar', x: 42 };
 obj2 = { foo: 'baz', y: 13 };
 merge = (...objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }));

 mergedObj1 = merge(obj1, obj2);
// Object { foo: 'baz', x: 42, y: 13 }






//1.4. Obiecte. Cum se itereaza un obiect, deep copy.

// JavaScript Objects
// You have already learned that JavaScript variables are containers for data values.

// This code assigns a simple value (Fiat) to a variable named car:
let car = "Fiat";

// Objects are variables too. But objects can contain many values.

// This code assigns many values (Fiat, 500, white) to a variable named car:

 car = {type:"Fiat", model:"500", color:"white"};

 //The values are written as name:value pairs (name and value separated by a colon).

 // Object Definition
 //You define (and create) a JavaScript object with an object literal:
 const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

 //Spaces and line breaks are not important. An object definition can span multiple lines:
 const person_ = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  //Object Properties
//The name:values pairs in JavaScript objects are called properties:

//Accessing Object Properties
//You can access object properties in two ways:
//objectName.propertyName
//or
//objectName["propertyName"]


//Object Methods
// Objects can also have methods
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.


const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
//   In the example above, this refers to the person object.
//   I.E. this.firstName means the firstName property of this.
//   I.E. this.firstName means the firstName property of person.


// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person object that "owns" the fullName function.
// In other words, this.firstName means the firstName property of this object.


// Accessing Object Methods
// You access an object method with the following syntax:
// objectName.methodName()

// Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
// Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.
// You will learn more about objects later in this tutorial.


// How to Iterate through Objects in JavaScript


// Iterate through Objects in JavaScript by utilizing for..in loop
// One of the most common methods to iterate through the object properties is using the “for..in” loop. The code you will add inside the for..in loop will be executed once for each property of your object.


// Example: Iterating through Objects in JavaScript by utilizing for..in loop
// First, you have to create an object in a JavaScript program. For instance, in the below-given example, we have created a “user” object having “name”, “age”, “email”, and “active” as its properties:
const user = {
name: 'Jack Smith',
age: 28,
email: 'jackSmith232@gmail.com',  
active: true };
// Next, we will use the “for..in” loop to iterate through the created user object. The “for..in” loop will return the object properties or keys and their values:
// iterate through the user object
for (const key in user)
{ console.log(`${key}: ${user[key]}`);
}


// Iterate through Objects in JavaScript by utilizing Object.keys() method
// To make iterating through objects easier, the Object.keys() method was added to ES6. You have to pass the object you want to iterate, and the JavaScript Object.keys() method will return an array comprising all keys or property names. Then, you can iterate through that array and fetch the value of each property utilizing an array looping method such as the JavaScript forEach() loop.

// Example: Iterating through Objects in JavaScript by utilizing Object.keys() method
// For the demonstration purpose, we will create a “courses” object having different courses as its properties such as “db”, “javascript”, “cp”, and “dld” and will assign each of some them specific values:

const courses = {
db: 45,
javascript: 67,
cp: 23,
dld: 15 };
//After doing so, we will convert our “courses” object to the “keys” array:

// convert object to keys array
const keys = Object.keys(courses);
// print all keys
console.log(keys);


// Iterate through Objects in JavaScript by utilizing Object.values() method
// The JavaScript Object.values() method is opposite to the Object.key() method and was embedded in the ES8. The Object.values() method outputs an array comprising the property values of the added object. After that, you can iterate through the object values by utilizing an array looping method such as JavaScript forEach() loop.

// Example: Iterating through Objects in JavaScript by utilizing Object.values() method
// This example will show you how to iterate using the Object.values() method through an object value. For this purpose, we will create a “birds” object having four properties “crow”, “sparrow”, “parrot”, and “pigeon” with their respective values:

const birds1 = {
crow: 1,
sparrow: 2,
parrot: 3,
pigeon: 4 };
// Now, to iterate through the values of the “birds” object, we will invoke the Object.values() method while passing the “birds” object as an argument:

// iterate through object values
Object.values(birds1).forEach(val => console.log(val));


// Iterate through Objects in JavaScript by utilizing Object.entries() method
// Another ES8 method that can be utilized for iterating through the objects in JavaScript is “Object.entries()” method. When you invoke the Object.entries() method by passing the created object as an argument, it will return two elements in each inner array. The first array element will represent the object property, and its corresponding value will be stored in the second element.

// Example: Iterating through Objects in JavaScript by utilizing Object.entries() method
// To use the Object.entries method() in your JavaScript program, create an object with some properties and their values. For instance, we have created a “birds” object which has four properties:

const birds2 = {
crow: 1,
sparrow: 2,
parrot: 3,
pigeon: 4 };
// Now, to iterate through the “object” values, we will pass our “birds” object as an argument to the “Object.entries()” method and store the return value in the “entries” variable:

// iterate through object values
 entries = Object.entries(birds2);
console.log(entries);

// In this case, if you want to utilize the “forEach()” method for the same purpose, then invoke the Object.entries() method while passing the created object as an argument and then call the “forEach()” method. The forEach() method will return the object properties or keys and their respective values:

// forEach() method
Object.entries(birds1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
    });



//DEEP COPY
// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too; that is, you won't unintentionally be causing changes to the source or copy that you don't expect. That behavior contrasts with the behavior of a shallow copy, in which changes to either the source or the copy may also cause the other object to change too (because the two objects share the same references).
// In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), Object.assign(), and Object.create()) do not create deep copies (instead, they create shallow copies).
// One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

let ingredients_list = ["noodles",{"list":["eggs","flour","water"]}];
let ingredients_list_deepcopy = JSON.parse(JSON.stringify(ingredients_list));

// Change the value of the 'list' property in ingredients_list_deepcopy.
ingredients_list_deepcopy[1].list = ["rice flour","water"]
// The 'list' property does not change in ingredients_list.
console.log(ingredients_list[1].list);

// As can be seen from the code above, because a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.
// However, while the object in the code above is simple enough to be serializable, many JavaScript objects are not serializable at all — for example, functions (with closures), Symbols, objects that represent HTML elements in the HTML DOM API, recursive data, and many other cases. Calling JSON.stringify() to serialize the objects in those cases will fail. So there's no way to make deep copies of such objects.
// For objects that are serializable, you can alternatively use the structuredClone() method to create deep copies. structuredClone() has the advantage of allowing transferable objects in the source to be transferred to the new copy, rather than just cloned. But note that structuredClone() isn't a feature of the JavaScript language itself — instead it's a feature of browsers and any other JavaScript runtimes that implement a global object like window. And calling structuredClone() to clone a non-serializable object will fail in the same way that calling JSON.stringify() to serialize it will fail.


// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).

// Arrays in JavaScript consist of a list of elements. JavaScript has many useful built-in methods to work with arrays. Methods that modify the original array are known as mutator methods, and methods that return a new value or representation are known as accessor methods. In this tutorial, we will focus on mutator methods.
// In order to get the most out of this tutorial, you should have some familiarity with creating, indexing, modifying, and looping through arrays, which you can review in the tutorial Understanding Arrays in JavaScript.
// Arrays are similar to strings, in that they both consist of a sequence of elements that can be accessed via index number. However, it is important to remember that strings are an immutable datatype, meaning they cannot be changed. Arrays, on the other hand, are mutable, which means that many array methods will affect the original array, not a copy of the array.
// This tutorial will go through adding and removing elements, reversing, replacing, and otherwise modifying elements in an array.

//isArray()
// Before we get into mutator methods, let’s look at the isArray() method to test whether objects are arrays. This is a Boolean method that returns true if the value of a variable is equal to an array. If the object is not an array, this method returns false.

let fish1 = [ "piranha", "barracuda", "koi", "eel" ];

// Test if fish variable is an array
Array.isArray(fish1);
// The isArray() method is useful because the typeof operator we would normally use for testing returns object when used with arrays, and sometimes knowing the distinction between an object and an Array object is necessary.
// Note that isArray() is written differently from most array methods, with the array variable being provided as an argument to the method.
// Now that we know how to check to ensure that an object is an array, let’s move on to mutator methods.


// pop()
// The first mutator method we’ll look at is the pop() method, which removes the last element from the end of an array.

// We’ll begin with our fish array.

let fish2 = [ "piranha", "barracuda", "koi", "eel" ];
//Let’s initialize the pop() method in order to remove the last item. In this case, it will be the string literal "eel".

// Use pop method to remove an item from the end of an array
fish2.pop();
//We’ll call our array to ensure that the array is returned without the last item:

fish2;


// shift()
// Another mutator method, the shift() method removes the first element from the beginning of an array.

let fish3 = [ "piranha", "barracuda", "koi", "eel" ];
//We will use shift() to remove "piranha" from index 0 and shift all the rest of the elements down by one index number.

// Use shift method to remove an item from the beginning of an array
fish3.shift();

fish3;

// push()
// The push() mutator method adds a new element or elements to the end of an array.

let fish4 = [ "piranha", "barracuda", "koi", "eel" ];
//In order to add an item at the end, we write the new element as a parameter of the function.

// Use push method to add an item to the end of an array
fish4.push("swordfish");

fish4;



// unshift()
// The unshift() mutator array method adds a new element or elements to the beginning of an array.

let fish5 = [ "piranha", "barracuda", "koi", "eel" ];
// Use unshift method to add an item to the beginning of an array
fish5.unshift("shark");

fish5;


// splice()
// The splice() method can add or remove an item from any position in an array. A mutator method, splice() can either add or remove, or add and remove simultaneously.

// splice() takes three parameters — the index number to start at, the number of items to remove, and items to add (optional).

// splice(index number, number of items to remove, items to add)
// splice(0, 0, "new") would add the string "new" to the beginning of an array, and delete nothing.

// Let’s look at a few examples below at how splice() can add and remove items in an array.

// Adding with splice()
// If we set our second parameter (items to remove) as 0, splice() will delete zero items. In this way, we can choose to only add an item starting at any index number, making splice() more powerful than push() or unshift(), which only add items to the end or beginning of an array.

let fish6= [ "piranha", "barracuda", "koi", "eel" ];

// Splice a new item number into index position 1
fish6.splice(1, 0, "manta ray");

fish5;

// Removing with splice()
// If we leave the third parameter (items to add) blank, we can simply remove an item from any point in the array.

let fish7 = [ "piranha", "barracuda", "koi", "eel" ];

// Remove two items, starting at index position 1
fish7.splice(1, 2);


// Adding and Removing with splice()
// Using all the parameters at once, we can both add and remove items from an array at the same time.

// To demonstrate this, let’s remove the same items as we did above, and add a new one in their positions.

let fish8 = [ "piranha", "barracuda", "koi", "eel" ];

// Remove two items and add one
fish8.splice(1, 2, "manta ray");

fish8;

// reverse()
// The reverse() method reverses the order of the elements in an array.

let fish9 = [ "piranha", "barracuda", "koi", "eel" ];
//Using reverse(), the last element will be first, and the first element will be last.

// Reverse the fish array
fish9.reverse();


// fill()
// The fill() method replaces all the elements in an array with a static value.

let fish10 = [ "piranha", "barracuda", "koi", "eel" ];
//In the fish array, we have four items. Let’s apply fill().

// Replace1 all values in the array with "shark"
fish10.fill("shark");

fish10.fill("shark", 1) // > [ 'piranha', 'shark', 'shark', 'shark' ]
fish10.fill("shark", 1, 3); // > [ 'piranha', 'shark', 'shark', 'eel' ]
// Using fill() we can replace one or more elements in an array with a static value.

// sort()
// The sort() method sorts the elements in an array based on the first character in the element. In the case that the first character is identical, it will continue down the line and compare the second character, and so on.

// By default, sort() will alphabetize an array of strings that are all either uppercase or lowercase.

let fish11 = [ "piranha", "barracuda", "koi", "eel" ];

// Sort items in array
fish11.sort();


//Let’s modify our original array so that one of our strings begin with an uppercase letter.

let fish12 = [ "piranha", "barracuda", "Koi", "eel" ];

fish12.sort();


//We can again modify the array to include a number in one of the string items.

let fish = [ "piranha", "barracuda", "Koi", "1 eel" ];

fish.sort();

let numbers3 = [ 42, 23, 16, 15, 4, 8 ];

numbers3.sort();


// Function to sort numbers by size
const sortNumerically = (a, b) => {
  return a - b;
}

numbers.sort(sortNumerically);



//1.6. Promise. Callback.

// JavaScript Promise Object
//A JavaScript Promise object contains both the producing code and calls to the consuming code:

//Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


//When the producing code obtains the result, it should call one of the two callbacks:
// Result	Call
// Success	myResolve(result value)
// Error	myReject(error object)


//Promise Object Properties
// A JavaScript Promise object can be:
// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.

// Promise How To
// Here is how to use a Promise:
myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );
//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise1 = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );


// JavaScript Callbacks
//Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
// This example will end up displaying "Goodbye":


function myFirst() {
    console.log("Hello");
  }
  
  function mySecond() {
    console.log("Goodbye");
  }
  
  myFirst();
  mySecond();

//   Sequence Control
// Sometimes you would like to have better control over when to execute a function.
// Suppose you want to do a calculation, and then display the result.
// You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result1 = myCalculator(5, 5);
  console.log(result1);

  //Or, you could call a calculator function (myCalculator), and let the calculator function call the display function (myDisplayer):
  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum12 = num1 + num2;
    console.log((sum12));
  }
  
  myCalculator(5, 5);

//   The problem with the first example above, is that you have to call two functions to display the result.
// The problem with the second example, is that you cannot prevent the calculator function from displaying the result.
// Now it is time to bring in a callback.

//JavaScript Callbacks
// A callback is a function passed as an argument to another function.
// Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  console.log(sum);
}

myCalculator(5, 5, myDisplayer);(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
//   In the example above, myDisplayer is the name of a function.
//   It is passed to myCalculator() as an argument.
//   When you pass a function as an argument, remember not to use parenthesis.  
//   Right: myCalculator(5, 5, myDisplayer);
//   Wrong: myCalculator(5, 5, myDisplayer());

// When to Use a Callback?
// The examples above are not very exciting.
// They are simplified to teach you the callback syntax.
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
// Asynchronous functions are covered in the next chapter.




// 1.7. Async. Await. 

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// Async Syntax
// The keyword async before a function makes the function return a promise:

async function myFunction() {
    return "Hello";
  }

//Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}

// Here is how to use the Promise:
// myFunction().then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );

//   async function myFunction() {
//     return "Hello";
//   }
//   myFunction().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
  
  
  //Or simpler, since you expect a normal value (a normal response, not an error):

//   async function myFunction() {
//     return "Hello";
//   }
//   myFunction().then(
//     function(value) {myDisplayer(value);}
//   );


// Await Syntax
// The keyword await before a function makes the function wait for a promise:

// let value = await promise;

//The await keyword can only be used inside an async function

//Let's go slowly and learn how to use it.
//Basic Syntax
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();


// The two arguments (resolve and reject) are pre-defined by JavaScript.
// We will not create them, but call one of them when the executor function is ready.
// Very often we will not need a reject function.


//Example without reject
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve) {
//     resolve("I love You !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();


// Waiting for a Timeout
// async function myDisplay() {
//   let myPromise = new Promise(function(resolve) {
//     setTimeout(function() {resolve("I love You !!");}, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

// Waiting for a File
// async function getFile() {
//   let myPromise = new Promise(function(resolve) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         resolve(req.response);
//       } else {
//         resolve("File not Found");
//       }
//     };
//     req.send();
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// getFile();


// 1.8. Closures.


// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// Global Variables
// A function can access all variables defined inside the function, like this:


// function myFunction() {
//   let a = 4;
//   return a * a;
// }

// But a function can also access variables defined outside the function, like this:

// let a = 4;
// function myFunction() {
//   return a * a;
// }

// In the last example, a is a global variable.
// In a web page, global variables belong to the page.
// Global variables can be used (and changed) by all other scripts in the page.
// In the first example, a is a local variable.
// A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code.
// Global and local variables with the same name are different variables. Modifying one, does not modify the other.
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

// function myFunction() {
//     a = 4;
//   }


// Variable Lifetime
// Global variables live until the page is discarded, like when you navigate to another page or close the window.

// Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

// A Counter Dilemma
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

// You could use a global variable, and a function to increase the counter:


// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// The counter should now be 3

// There is a problem with the solution above: Any code on the page can change the counter, without calling add().
// The counter should be local to the add() function, to prevent other code from changing it:

// Initiate counter
// let counter = 0;

// // Function to increment counter
// function add() {
//   let counter = 0;
//   counter += 1;
// }

// // Call add() 3 times
// add();
// add();
// add();

//The counter should now be 3. But it is 0
//It did not work because we display the global counter instead of the local counter.
//We can remove the global counter and access the local counter by letting the function return it:

// Function to increment counter
// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
  
//   // Call add() 3 times
//   add();
//   add();
//   add();
  
  //The counter should now be 3. But it is 1.

//It did not work because we reset the local counter every time we call the function.
// A JavaScript inner function can solve this.

// JavaScript Nested Functions
// All functions have access to the global scope.  
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope "above" them.
// In this example, the inner function plus() has access to the counter variable in the parent function:

// function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
//   }

//   This could have solved the counter dilemma, if we could reach the plus() function from the outside.
// We also need to find a way to execute counter = 0 only once.
// We need a closure.

// JavaScript Closures
// Remember self-invoking functions? What does this function do?

// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
//   add();
//   add();
//   add();
  
  // the counter is now 3

//   Example Explained
// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
// A closure is a function having access to the parent scope, even after the parent function has closed.



