# Problem Set 1
## What is the DOM?
### What is the DOM?
This course isn't about HTML and CSS but they keep showing up. Why is that? HTML, CSS and JavaScript are the three components that make almost every website. As part of the process of building websites, browsers convert all of the HTML they receive into a JavaScript object called the Document Object Model (DOM).  

In fact, from the console, you can examine the DOM for any website (including this one!). By examining the DOM, you can learn pretty much everything about a website.  

### Your Challenge
For this challenge, I want you to find out the height of the classroom window (in pixels).    

To do so, you'll first need to open the console. Got it open? Select the classroom window. Try typing document.getElementsByClassName("text-atom")[0] and press enter.  

See the HTML that comes up? That's the HTML that makes up the classroom. It's actually a JavaScript object called an Element with properties you can access.  

Read up on [Element properties](https://developer.mozilla.org/en-US/docs/Web/API/Element). Can you figure out the height of the classroom window? Your answer will depend on the size of your browser.

## Black out the Resume
If the resume you're building doesn't have data in a certain section, like Education, the empty section is automatically hidden. At the bottom of index.html, you'll find a few lines of JavaScript that follow this pattern:

```
if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.display = "none";
}
```

After we break down the way this code works, I'm going to challenge you to modify these scripts to turn empty resume sections black instead of making them disappear.

### How Resume Sections Get Hidden
While we're adding sections to the resume using jQuery, these scripts are using regular JavaScript to hide them.  

First off, there's an if statement. You'll be learning about if statement syntax in the next lesson. Suffice it to say, we'll be executing the code that comes between the curly braces if a resume section is empty. In this example, the education section is empty so we execute ```document.getElementById("education").style.display = "none";```

#### document
document refers to the web page in its current state. You may have heard of the DOM, which contains all of the information about a website's visible elements. document is the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). We need to change the DOM if we want to add or remove page elements.

#### getElementById("education")
getElementById(id) is a DOM manipulation method that will grab a single page element object with the id given. Notice how the word Element is singular in the method name. That means it returns a single page element. Other DOM methods containing Elements, like getElementsByClassName(), will return an array of page elements.  

In this example, we've grabbed the entire education section of the resume. In the HTML, this is everything inside ```<div id="education">```

####.style
```.style``` is a [DOM property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.style). It is used to change a CSS style of the selected page element. The property that follows ```.style``` is the CSS style that will be modified by this piece of code. [Here's a list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) of all the possible CSS properties you can change.

#### .display = "none"
Every page element has a display CSS property, which normally controls how that page element interacts with others. If display is set to "none", however, then the element is removed entirely from the page.

### Your Challenge
Rather than hiding resume sections when they're empty, can you modify the scripts at the bottom of the resume so that they turn each section black when the section is empty? Here's a hint, you'll need to change the background color property of each element.

### Answer
So this is the pattern of code I decided to use:

```document.getElementById("education").style.backgroundColor = "black";```

Looking at [style API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.style), I see that there's a link to the [CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference). Considering that we need to change the background color, I looked through the list and found the backgroundColor property of style. I set it to "black" but you could also set backgroundColor to a string of black's [hex code](http://www.color-hex.com/), "#000000", instead.  

Then, I simply copied the same code to each section, making sure to change the id in .getElementById(id) to the right one for each!

## Protecting the Resume
Let's imagine that instead of building just for your own resume, you're building a webapp that takes in data from other users on the internet and turns it into a resume that they can use.  

How might you make sure that the resume will still display correctly? Or even worse, imagine someone sets their name to equal <script src="http://hackyourwebsite.com/eviljavascript.js"></script>. Can you make sure your resume doesn't run their malicious script?  

### Your Challenge
For this quiz, your goal is to make sure that if a user puts HTML in their resume's JSON, it doesn't break the resume!  

How? You need to make sure that the < and > from their HTML get turned into harmless strings.  

When you're ready to [replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) all of the < and >, click "Continue to Quiz!"

### Solution
```
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
```
There are a few ways to remove < and > from code. The simplest is simply replacing them with their [character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML) (&lt; and &gt;).  

To do so, we can use string.replace(old, new). Note, however, that if you pass in a string as old, string.replace(old, new) will only replace the first instance of the old string.  

You must pass in a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) as old to replace every instance of old in the string.  

In the example above, we passed /</g and />/g as old into string.replace(old, new), which are regular expressions that grab all instances of < and >.  

Alternatively, you could pass an HTML string into a function like encodeURIComponent(string) to remove instances of < and >. But it isn't [intended for situations like this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent), possibly leading to unexpected consequences.

## Dot Notation vs Bracket Notation
Dot notation and bracket notation seem to work the same way, however, there are some differences with the properties you can access with each notation.

### Your Challenge
You're going to be given an object with strange properties. Can you figure out whether dot or bracket notation can be used to access the property?

### Solution Summary
Bracket notation always works.   
Dot notation requires properties that begin with a letter and do not include special characters.