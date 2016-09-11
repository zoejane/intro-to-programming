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