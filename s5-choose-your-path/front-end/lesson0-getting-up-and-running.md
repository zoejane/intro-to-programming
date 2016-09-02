# Lesson 0 - Getting Up and Running
## Resources

## The Resume's HTML
The instructor is viewing index.html from the [résumé project's Github repository](https://github.com/udacity/frontend-nanodegree-resume) you downloaded earlier in this lesson.

Mozilla Developer Network has a great [article](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction) on HTML and the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model). Web Platform.org also has some pretty complete [tutorials](http://docs.webplatform.org/wiki/css) on CSS.  

Want to learn more about the critical rendering path? Check out [Website Performance Optimization](https://www.udacity.com/course/ud884?_ga=1.71573719.53639439.1458784522), taught by Cameron and Ilya Grigorik, a performance engineer at Google.

![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-2/53102449.jpg)

## CSS And JS In The Resume
Web Platform.org also has some pretty complete [tutorials](http://docs.webplatform.org/wiki/css) on CSS.  
Check out the [jQuery website](http://jquery.com/) website to learn more  
The [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/) is a fantastic resource for all things web and [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## The Browser JavaScript Console
For this quiz you will open your browser and work in the JavaScript console. The following describes how to open the javaScript Console in various browsers.

Chrome: go to View > Developer > JavaScript Console ([here’s a guide](https://developer.chrome.com/devtools/docs/console))

FireFox: go to Tools > Web Developer > Web Console ([here’s a guide](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console))

IE11: go to Tools > Developer Tools > Console icon ([here’s a guide](http://msdn.microsoft.com/en-us/library/ie/bg182326(v=vs.85).aspx#The_Console_tool__CTRL___2_))

Safari: turn on the Develop menu: Preferences > Advanced > Show Develop menu in menu bar go to Develop > Show Web Inspector ([here’s a guide](https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html))  

## console.log()
```console.log("Hello world!");```
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-2/67526328.jpg)

## Hacking Udacity's Front Page
With your browser open: [a static version of the Udacity homepage](http://udacity.github.io/js-basics/static-home/index.html) made specifically for this quiz.

Here's the line of code you'll be copying in a moment:

```$(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");```
Don't worry if you aren't familiar with CSS classes. The main point here is that ```.super-header-wrapper``` is an element on the page that contains the background and the jQuery method ```.html()``` changes what's inside it.

## Using .Append() To Build A Page
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-9-2/30227710.jpg)