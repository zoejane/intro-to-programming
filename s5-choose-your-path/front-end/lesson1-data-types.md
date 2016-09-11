# Lesson 1 - Data Types
## Resources
[JavaScript string.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)  
[jQuery .append()](http://api.jquery.com/append/)

[string methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## var loveJS = true;
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-2/52555452.jpg)

When James says "save this file and reload the website" he's talking about saving the changes you made to the js/resumeBuilder.js file in your text editor, reloading the index.html file in your browser, and opening the browser's javaScript Console to see the message logged. The js/resumeBuilder.js file is where you'll be applying all the tips and tricks you learn in this lesson to your Online Resume project.  

## Mixing .replace() and .append()
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-2/83578122.jpg)

## String Manipulation Quiz 1

Here's my code:

```
var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
```

Let's break it down.

### s[1]
First, I want the "U" to be uppercase, so I use the index of the "U", which is 1, to grab it with brackets. JavaScript lets us use brackets to select one character of a string (and later, you'll see that you can do the same with an array).

### s[1].toUpperCase()
.toUpperCase() is a string method, meaning it acts on the string it's attached to, which in this case is the "U" from s[1].

At this point, s[1].toUpperCase() is equal to "U".

### +
The + concatenates, or adds together, strings. For instance "Hello " + "JS students!" will result in "Hello JS students!".

### s.slice(2)
.slice() is another string method, which acts on the string s in this case. .slice(start, [end]) will grab the part of the string from the index of start to the index of end. The fact that [end] shows up in brackets means that it's optional. If it isn't there, then .slice() will select all of the string from start to the very end of the string. s.slice(2) gives us "dacity".

Concatenated together, we get "Udacity"!

## Truthy/Falsy
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-3/6564566.jpg)

Check out [this comparison](http://opensourcehacker.com/2012/10/17/true-lies-and-falsy-values-in-python-and-javascript/) of True and False in JavaScript and Python

There are only six falsy values in JavaScript so it is easiest to memorize those:

```
false
0 (zero)
"" (empty string)
null
undefined
NaN
```
You can learn more about some of the quirks of truthy and falsy [here](http://www.sitepoint.com/javascript-truthy-falsy/).

## Array Manipulation
In this quiz you are given an array of numbers. Can you increase the value of the last number in the array by one?

Check out the MDN documentation on [arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for help.

Hint: you might consider using array.pop() and array.push().

```
function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
}
```
### ```newArray = _array.slice(0);```
Just like string.slice(begin, [end]) separates the characters of a string, array.slice(begin, [end]) separates the elements of an array from the index of the begin up to but not including end. We want to make a copy of the original array, so we won't include an [end]. At this point, newArray is a copy of the original _array.

### ```var lastNumber = newArray.pop();```
The array.pop() method conveniently gives us (or returns) the last element of the array, which in this case is the number we want to increase by 1. However! Be careful because array.pop() actually **removes** the last element of the array. This is why we made a copy in the previous line, so we wouldn't modify the original _array.

### ```newArray.push(lastNumber + 1);```
Just how the jQuery .append() method adds an element to the end of an HTML block, the array.push() method adds an element to the end of an array. Here, we're .push()ing the lastNumber + 1, which is exactly what we wanted to do.

## String Manipulation
```
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
```

### var names = oldName.split(" ")
Here, we're creating an array of names by breaking the original name at the space. At this point for our original example, names === ["AlbERt", "EINstEiN"]

### names[1] = names[1].toUpperCase();
The string.toUpperCase() method does exactly what its name describes. It's acting on names[1], which is "EINstEiN" in the original example. So here, we're reassigning the second element in the names array to the all caps version of "EINSTEIN".

### names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
This line builds Albert. names[0].slice(0,1).toUpperCase() starts by acting on the first element in the names array, which is "AlbERt" in the example. Then, we grab just the first letter by using .slice(0,1). Then we simply use the .toUpperCase() method again to make sure the first letter is capitalized. Also, notice how we chained two methods together here.  

The next part, names[0].slice(1).toLowerCase() acts similarly, except this time we're using .slice(1) to grab the rest of the first string, which is "lbERt" in the example. Then we simply chain the .toLowerCase() method to make sure that the rest of the letters in the first name are lower case. Once we have the first letter capitalized and the rest of the name lower case, we concatenate them together with the +.

### finalName = names.join(" ");
array.join([chars]) lets us put array elements together into a single string. Each element will be separated by the optional chars. In this case, we want a space between the two names, so we made the chars a single space, " ". With that, we've joined "Albert" and "Einstein" to form "Albert EINSTEIN"!

## Object Literal Notation
JavaScript objects behave a lot like Python dictionaries, but there are some differences we'll see later. For a detailed comparison, see [this StackOverflow thread](http://stackoverflow.com/questions/20987485/python-dictionaries-vs-javascript-objects).  

Though JavaScript has no classes, you can mimic many of the characteristics with its functions. You'll learn more about functions in Lesson 3 so consider this a bit of a preview.

```
function Car() {}
/*
var Car = function() {}
*/
var car1 = new Car();
```

The ```new``` keyword allows us to create a new instance of an Object. Remember that functions are objects. In the code above, you can think of the function Car as a JavaScript version of a Python class definition.

## Dot And Bracket Notation
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-11/69570618.jpg)
For a quick comparison between bracket and dot notation, check out [this article](http://www.dev-archive.net/articles/js-dot-notation/).  

That last syntax for creating objects? It's the [function syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function). In JavaScript, functions are objects. You'll be learning more about functions in the next lesson.

Dot notation is faster to write and clearer to read.  
Square bracket notation allows access to properties containing special characters and selection of properties using variables.

## A Note about JSON
What is JSON and why is JSON linting important.

### What is JSON?
JavaScript Object Notation. JSON is a popular and simple format for storing and transferring nested or hierarchal data. It's so popular that most other programming languages have libraries capable of parsing and writing JSON (like Python's [JSON library](https://docs.python.org/2/library/json.html)). Internet GET and POST requests frequently pass data in JSON format. JSON allows for objects (or data of other types) to be easily encapsulated within other objects. See the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) or [JSON.org](http://json.org/) for more details.  

[This](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/) is a fantastic deep dive from Jason Lengstorf about JSON and its ubiquitous use in the form of [AJAX requests](http://en.wikipedia.org/wiki/Ajax_(programming)).

### Why should I lint my JSON?
With a mix of nested curly braces, square brackets and commas, it's easy to make mistakes with JSON. And mistakes mean bugs. Seriously, I mess up JSONs all the time. You might even be able to spot a bug in one of my JSONs in a video in this course...  

If you're generating JSON by hand, you should copy and paste your code into a JSON linter like [jsonlint.com](http://jsonlint.com/) to quickly and easily find syntax errors. A linter is a piece of software that analyzes code for syntax errors. Some text editors, like Sublime Text, will automatically lint (or highlight) most syntax errors. But a JSON linter won't miss any syntax errors and you can rest assured that your JSONs will be properly formatted.  

#### Important Note:
For the Online Resume project you'll be using javaScript Object Literals rather than JSON to define your objects. The syntax is very similar, but javaScript Object Literals permit the inclusion of functions as properties and JSON does not. 

## JSON
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-11/78768517.jpg)

## Validating JSON 
[JSONlint](http://jsonlint.com/) validates your JSON formatting. JSONs can get tricky and it's easy to make mistakes. It's useful to double check that your JSONs are properly formatted with tools like JSONlint. 

## All The Resume Sections
[Bracket Notation] vs Dot.Notation
-[MDN: Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)

Object Notation
-[MDN: javaScript Object Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals)

Note: It is important to name the properties exactly as given below (property names are case sensitive). The property value data types must also be exactly as given. (Strings should not be used where an array is expected, even if there is only one item in the array.)  

### Resume Sections:
#### work
work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

### projects
projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

#### bio
bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional.

#### education
education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.   

education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.
