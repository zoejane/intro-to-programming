# Lesson 2 - Flow Control
## If Statements
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-13/75526972.jpg)
### Strict equality (===) vs Loose equality (==)

When you use three equal signs, ===, no type conversion is done prior to the comparison. If the values are different types, for example, a String and a Number, they can't ever be equal. To return true, the values must be equal and the types must be the same.  

Loose equality, ==, checks to see if the two values are the same type and if not, converts to a common type before the conversion. If the types are already the same, there is no difference between the result of === and ==. When they aren't it can cause unexpected results.  

Check the [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_when_to_use_them) to an article on Mozilla Developer Network to see what values get converted into what.  

According to Jacques Favreau, the lead front-end engineer at Udacity, you should never use ==. It's a frequent source of bugs. In fact, if a Udacity engineer tries to commit code with ==, it automatically gets rejected.  

Though it wasn't mentioned in the video, the same conditions apply for strict inequality (!==) and loose inequality (!=). Loose inequality is more forgiving than loose equality so you might not see strict inequality as often.

### Skills not displaying in resume?
This if statement in index.html prevents anything from displaying within the #header element when there is no h1 element in the document.
```
    if (document.getElementsByTagName('h1').length === 0) {
        document.getElementById('header').style.display = 'none';
    }
```
The following variable in the helper.js file contains an h1 element:

```var HTMLheaderName = '<h1 id="name">%data%</h1>';```

If the %data% substring in the HTMLheaderName variable is replaced with the bio.name property and the result is appended to the #header element, skills can then appear because the if statement in index.html will no longer be true.

## While Loops
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-10-1/93958310.jpg)

## For Loops
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-10-1/1677945.jpg)

## For-In Loops
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-10-1/888029.jpg)

## A Note About For-In Loops
Now that you've learned about for-in loops, it's time to stop using them. No, seriously. for-in loops are considered to be general bad practice when writing JavaScript because it has some inconsistent behavior with arrays and objects. Check out these links for more:

- [http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea](http://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea)
- [http://stackoverflow.com/questions/4261051/javascript-why-for-in-is-a-bad-practice](http://stackoverflow.com/questions/4261051/javascript-why-for-in-is-a-bad-practice)
-[https://websanova.com/blog/javascript/why-javascript-for-in-loops-are-bad](https://websanova.com/blog/javascript/why-javascript-for-in-loops-are-bad)

For the Online Resume project, you will be asked to demonstrate the current best practices and should not use any for-in loops. Please use either a standard for loop or the [forEach loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) instead.

## Functions
More on [spaghetti](http://en.wikibooks.org/wiki/General_Astronomy/Spaghettification) if you're interested!
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-10-1/83026236.jpg)

## Click Metrics
Want to learn about scope? [article from Todd Motto](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/) is a fantastic introduction.

## Collecting Click Locations
Here's the code shell for you:

```
$(document).click(function(loc) {
  // your code goes here
});
```

### ```$(document).click()```
```$(document).click()``` is a jQuery event handler on the page, which is a fancy way of saying that it will hold some code that runs every time a user clicks on the page. The function (that doesn't have a name, making it an anonymous function) that gets passed into ```.click()``` will be run every time a user clicks on the page. 

### loc 
loc is a jQuery event object that contains information about the click event. Learn about event's properties with [jQuery's documentation](http://api.jquery.com/category/events/event-object/).

