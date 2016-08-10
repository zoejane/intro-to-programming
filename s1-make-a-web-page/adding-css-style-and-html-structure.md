# Adding CSS Style and HTML Structure

## Resources
- [Verify HTML](http://validator.w3.org/#validate_by_input)  
- [Verify CSS](http://jigsaw.w3.org/css-validator/#validate_by_input)  
- [css-demo.zip](https://www.udacity.com/api/nodes/3601298697/supplemental_media/css-demozip/download?_ga=1.244606529.53639439.1458784522)  
- [Udacity Front-End Web Developer Style Guide](https://udacity.github.io/frontend-nanodegree-styleguide/css.html#type-selectors)  
- [How CSS Selectors Work](http://css-tricks.com/how-css-selectors-work/)  
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)  
- [normalize.css](http://necolas.github.io/normalize.css/)  
- default style rules for 
	- [WebKit (Chrome and Safari)](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
	- [Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
	- [Internet Explorer](http://www.iecss.com/)
- IPND Office Hours: Stage 0/1: Understanding div, span, id, and class
	- [Video](http://bit.ly/1FbYnF5)
	- [Transcript](http://discussions.udacity.com/t/stage-1-webcasts/16000/4?_ga=1.212110288.53639439.1458784522)
- IPND: All stages: Understand the importance of style
	- [Video](http://bit.ly/1K0yFXm)
	- [Transcript](https://discussions.udacity.com/t/stage-2-webcasts/16001/7?_ga=1.51519597.53639439.1458784522)
- Using Semantic Tags
	- [Content Sectioning
](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning)
	- [Sections and Outlines of an HTML5 Document - The HTML5 Outline Algorithm
](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#The_HTML5_Outline_Algorithm)
- [A Complete Guide to Flexbox
](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- **[Additional Resources @Andy Brown's IPND Notes](http://learn-2-code.appspot.com/additional_resources/#topic-1)**


	
	
## Tips
### [Center an Image](http://www.w3schools.com/css/css_align.asp)
To center an image, use margin: auto; and make it into a block element.  

```
img {
    display: block;
    margin: auto;
    width: 40%;
}
```

### [How to make rounded images with CSS](https://www.abeautifulsite.net/how-to-make-rounded-images-with-css)

Did you know you can use this property to make images completely round?  
It's actually dead simple. Just throw this into your stylesheet:  

```
.img-circle {
    border-radius: 50%;
}
```

Now any image with the img-circle class will be displayed as a perfect circle:

```<img class="img-circle" src="kitten.jpg">```

It's worth mentioning that if you want to keep things perfectly round, use an image with the same width and height.


## Where to Focus Your Attention
- Don't repeat yourself. Avoiding repetition is sessential in all areas of programming.
- Pay attention to how CSS allows programmers to avoid repetition and how that avoiding of repetition can really help you make good code.

## Follow along with Jessica
- Open your text editor and select File > Open… Find the css-demo **folder** on your computer and select it by single-clicking. The folder name should be highlighted.
- Press the Open button. You should see **a gray bar on the left**.
- Double click on app.html and style.css in the gray bar on the left (this might look a little different depending on your editor).
- Use Google Chrome (a web browser) to open app.html. 

If you have any trouble, ask for help. **Getting things installed and working can often be one of the most frustrating parts of programming and even professional programmers struggle with these things.**

![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-9/54080030.jpg)

## Adding Style
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-9/71333012.jpg)

## Understanding CSS
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-9/44625841.jpg)

### Search and Replace
You can also think about CSS as a search and replace tool: you identify a class or a tag of the element you want to find (or match, in CSS terminology), and then what you want to do with it, or what property values to replace with different ones.

### Order Matters
It also matters where you define the rules and in what order they are applied. Styles can be defined in different places and are applied in the following order, with definitions further down the list overwriting previous definitions:

- the default style of a browser (different browsers have slightly different styles)
- stylesheet in a separate file (this is what you will be mostly using)
- stylesheet inside HTML (this can be done for small projects but is not ideal)
- inline style in an element (this can also be done but should be avoided)

### Specifics Matter
"Cascading" means that rules are applied not only to the elements they directly match, but also to all of those elements' child elements. However, if a child element has multiple, overlapping rules defined for it, the more specific rule takes effect.

## Styling Up
Browsers use default stylesheets to determine how to display HTML elements. You can view the default style rules for h1 and other elements for the following browsers:

- [WebKit (Chrome and Safari)](http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css)
- [Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Internet Explorer](http://www.iecss.com/)

Because these rules differ sometimes between browsers, there are efforts to **promote consistency in styles across browsers**. One popular solution to this issue is using what is referred to as a CSS reset such as **normalize.css**.

**Comfortably using documentation** is very helpful in the job of Front-end developer, and you just had good practice with this skill!

## CSS Summary and Reference

### What is CSS?
CSS is code written to control the "style" of HTML elements.

## How does CSS "control" HTML?
If you want to write CSS that makes all h1 elements have a black background and white text, you would write:

```
h1 {
  background-color : black;
  color: white;
}
```

In this example, the h1 is a **selector**. It says to the browser "I want you to apply the rules I'm about to tell you to every h1 element."

After the h1 there is a left curly brace { and at the bottom there is a matching right curly brace }. **Everything between these curly braces will be interpreted as a "rule"** that should be applied to every h1 element.

The line of code that says background-color : black; is a **declaration**. background-color is a **property** and black is the **value** of that property.

### CSS Vocabulary
**CSS**: Cascading Style Sheets.

**Style**: This word can refer to many things and so it can be confusing. It can refer to:

- The HTML element. For example: ```<style>div {color:blue}</style>```
- The HTML attribute. For example: ```<div style="color : blue">this text would be blue</div>```
- The general look of a web page. For example: "I like that site's style."
- A verb. For example: "I'm making progress on my page. The structure is all done but now I have to style it."

**Rule**: a line of CSS code describing the value that a certain attribute should take.

**Property**: The property you want to change.

**Value**: The value that you want to assign to the attribute.

**Selector**: The name that you use to in order to target the elements that are assigned to a class or id attribute in the HTML.

**Class**: A class refers to a group of elements that can be styled together. Class names should not contain periods or any other punctuation marks such as class="1.1"

**ID**: ID's are unique identifiers that uniquely identifies an element in HTML.

### Selecting by class
In the example above, we set the background-color of every h1 to black. If we only want to add style to certain h1s, we can use class selectors. Try copying the following code into scratchpad.io to see how this works.


```
<div class="stop"></div>
<div class="slow"></div>
<div class="go"></div>

<style>
  div {
    height : 50px;
    width : 50px;
    border-radius: 25px;
  }
  .stop {
    background-color: red;
  }
  .slow {
    background-color: yellow;
  }
  .go {
    background-color: green;
  }
</style>
```

We should see a traffic light. Note how in the ```<style>``` element we refer to an HTML element's class name by writing **.class-name**

Also note how we can apply rules to **all divs** or just **certain divs** by using the **appropriate selector**.

### How do I include CSS Styling in my web page?
There are three ways you can do this.

#### Method 1: write CSS in the ```<head>``` of your HTML

This method is good for **very small projects** (like what you'd do in scratchpad.io). To do this:

At the top of your HTML document, add a ```<head>``` element.
Inside the ```<head>``` element, add a ```<style>``` element.
Write your CSS in the ```<style>``` element and then put the HTML for the rest of your page below.
For example:

```
<head>
  <style>
    div {
      background-color : red;
    }
  </style>
</head>
<body>
  <div>
    This will have a red background.
  </div>
</body>
```

#### Method 2: Link your HTML to a separate CSS file

This adds another step, but it lets you stay **more organized** when working on larger projects. To do this:

- Write all of your structural HTML in one file (let's call it **main.html**).
- In a separate file (let's call it **main.css**), put all of your CSS code.
- Add a ```<head>``` element to the top of your HTML.
- Add a ```<link>``` tag inside the <head> element. Since ```<link>``` is a "void tag" you don't need to add a closing ```</link>```.
- Add the following attributes to your ```<link>```:
	- rel="stylesheet"
	- href="main.css"

For example, you would have a main.html file that looked like this:

```
<head>
   <link rel="stylesheet" href="main.css">
</head>
<body>
  <div>
    This will have a red background.
  </div>
</body>
```

and in the same folder you would have a file called main.css like this:

```
div {
  background-color : red;
}
```

### Method 3: Write your style inline with your HTML

This is generally a very bad idea because it **leads to lots of repeated code**. But you may see code that uses this method so it's good to be familiar with it. If you want to know more, check out the question and answers in [this conversation](http://stackoverflow.com/questions/2612483/whats-so-bad-about-in-line-css) on **Stack Overflow** (Stack Overflow is the most widely used **programming Q&A community** out there).

With this method, you modify the style attributes of every individual HTML element. For example:

```
<body>
  <div style="background-color: red; color: white">
    This div will have a red background and white text.
  </div>
  <div style="background-color: red; color: white">
    So will this one.
  </div>
  <div style="background-color: red; color: white">
    Now, what if I change my mind?
  </div>
  <div style="background-color: red; color: white">
    I'd rather have a black background...
  </div>
  <div style="background-color: red; color: white">
    Never do this!
  </div>
</body>
```

NOTE: there are a lot of little mistakes you can and will at some point make that will cause any of these methods not to work. For example, when I was writing the code for method 2 I had main.html and main.css in different folders on my computer, and it didn't work at all.

## Prepare to Explore HTML and CSS
Spend 15 minutes or so exploring the following demos in order. You can even play around with changing the HTML and CSS by clicking the "Edit on Codepen" button in the top-right.

As you go through the code, make sure to read all of the **code comments** that I've added. Comments are lines of text that the computer ignores. They are just there so that programmers can leave notes for other people (or themselves) to read.

In HTML, code comments begin with ```<!--``` and end with ```-->```.   Everything in between is ignored.  
In CSS, code comments begin with ```/*``` and end with ```*/```.  

- I chose to put each lesson into it's own div. By putting a box around each lesson, the structure of the code reflects the structure of the lessons。
- I also put each new concept inside of a div. 
- Each lesson div has a class="lesson". The concepts, concept titles, and concept descriptions also have been put into divs with class names.
- Notice how I removed the ```<em>``` tags from the paragraph below. I didn't need to do this, I just wanted to show how you can use a span and some styling to achieve the same effect.

	```
	<span class="italic">HTTP Request</span>
	```
		
	```
	.italic {
	    font-style: italic;
	}
	```
- Note that the NOTHING changed in the HTML (besides the comments) between Demo Two and Demo Three. That's the **power of CSS**.
- The border-radius attribute makes the corners rounded and the margin clears out space for the stuff inside the lesson divs.
- Margins push other elements away.
- Change to a nicer font.
- This code sets the font size to 20 pixels, makes it bold, and centers it.
	
	```
	.concept-title {
	    font-size: 20px;
	    font-weight: bold;
	    text-align: center;
	}
	```
	
## Take a Break!
You've already covered the most conceptually important parts of this lesson. The rest will give you **impressive new ways to use CSS and HTML**, but it will be a little intense (especially if you're feeling mentally tired).

So **schedule a time to come back** (that's important), and **take a well-earned break**. Give your brain some time to digest what you've learned about HTML and CSS and **how HTML classes combined with CSS styling can help you avoid repetition** (and make really cool web pages).

## The Box Revisited
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-10/32863755.jpg)

## CSS to Use 
In your style.css you should set the screenshot class to max-width of 460px, and the description to 705px. The other things to set in your style.css file are the **box-sizing definitions** and the **outline that allows you to easily see all the boxes on your page**. Put the following in your style.css file:

```
* {
   outline: 1px solid red !important;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
} 
```

## Positioning Boxes
A great guide to flexbox can be found [here](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)!

At 01:02 in the video, Jessica uses Dev Tools to add the CSS rule ```display: flex``` to ```element.style```, which applies the CSS to the selected ```div``` element temporarily.

Students following along with the videos should create an .app class in their ```style.css``` as follows:

```
.app {
    display: flex;
}
```

This rule as-is works with Chrome 29+, IE 11+, and Mozilla 28+. In order to support Safari, the -webkit- prefix must be added:

```
.app {
    display: -webkit-flex;
    display: flex;
}
```

## Box Sizing and Positioning Summary
You can find more resources in [the example webpage I've made](http://learn-2-code.appspot.com/additional_resources/#topic-1).

### Box Sizing
There are four main points that Jessica addressed about box sizing.

- HTML elements are boxes and each box has 4 components.
- Because there are so many components to each box, it can often be hard to get the size of a box just right.
- There are two techniques you can use to help deal with sizing issues.
	- Set sizes in terms of **percentages** rather than pixels.
	- Set the box-sizing attribute to **border-box** for every element. 
	
	```
		* {
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    -ms-box-sizing: border-box;
	    box-sizing: border-box;
		} 
	```
- Different browsers work slightly differently. Sometimes this causes different browsers to display the same code differently.

### Box Positioning
- Divs are block elements (as opposed to inline), so by default they take up the entire width of a page.
- Adding the rule **```display: flex;```** to the appropriate CSS will override this behavior and **let divs appear next to each other**.

## Adding Image
```
<img src="img/app.png" alt="This is a screenshot">
```

## Code, Test, Refine
- Get the **structure** of the page right. You should be able to do that from the **design**, by visually **boxifying** it.
- Then move on to work on the **tags**. If something needs to be a heading, make it so.
- Then think about **the size of the boxes**. How big should they be?
- And then, how to **position** them where you want on the screen.
- Onece the general layout is complete, the time has come for **smaller details**, and these you can polish until the page looks exactly like the design image you were given.

![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-10/95346255.jpg)

## More on DevTools
Note that the changes you make in Dev Tools are temporary. If you want to save them, you must select the **source file** in the **'Sources' tab**, right or control+click on the file you wish to save, select 'Save As' and save the file to the directory that contains the original file. You may want to create a **back-up copy** of the file before making changes to it.