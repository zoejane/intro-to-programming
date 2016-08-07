# Basics of the Web and HTML

## Resources
### HTML Playground
[CodePen](http://codepen.io/) is a playground for the front end web.  
[scratchpad.io](http://scratchpad.io/) - (a realtime html + css editor)

## An Early Win
- Throughout this lesson you will be taking notes on what you're learning. Afterwards, you will convert your notes to simple HTML (like what you're reading now) and then submit them for personalized feedback from a Udacity reviewer.
- **Personal feedback is one of the best parts about taking a Nanodegree**, and we want you to experience it as early in the program as possible.

## Where to Focus Your Attention
Your instructor for this lesson is Steve Huffman.   
Steve is the cofounder of Reddit, an incredible programmer, and an amazing teacher. He taught me a lot of what I know about building real web pages with code.  
喵，有这样超棒的、世界一流的、年轻可爱的老师教我，感觉好幸福。

### Part 1
In Part 1 you will develop enough [technological empathy](https://www.udacity.com/course/viewer?_ga=1.246187200.53639439.1458784522#!/c-ud440/l-3521029360/m-3503049573) to understand what happens when you open (or create) a web page. Specifically, you'll gain:

- Basic understanding of how the internet works.
- Understanding of how users, computers, servers, http, and the internet all fit together.

### Part 2
In Part 2 you will use HTML tags to create a simple HTML document that a browser can display as a web page.  

## Components of the Web
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/69230010.jpg)

## Intro to HTML Tags
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/83830339.jpg)

## Computers Are Stupid
Programmers often describe computers as "stupid."  

When they say this, they (usually) aren't insulting computers. They are addressing an important point about how computers understand the instructions that human programmers give them.  

In spoken languages, we can craft sentences with a great deal of **ambiguity**. Consider, for example, the sentence "Each of us saw her duck." Does that mean each of us saw her pet duck? Or did we each see her duck under something? Depending on the context, you might be able to infer which interpretation is correct.  

Computers can't make these inferences and so they interpret language literally. Computer programming languages are designed to limit ambiguity, but sometimes this can result in issues between the programmer and the machine.  

Keep this idea in mind as you watch the next video. Think about how sensitive computers are to typos and how small mistakes (mistakes that a "smart" human could easily correct) can lead to huge problems when given to a "stupid" computer.

## Making Links
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/42218207.jpg)

## Adding Images
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/94104351.jpg)

## It's OK to Forget
You may be wondering why anchor tags use the href attribute while img tags use the src attribute. And you may become frustrated when (not if) you make the mistake of using one when you really need the other. Because when you make this mistake, your HTML will not work.  

So how will you ever remember details like this? Well... **you don't have to!**    

In fact, you may have already forgotten how to add links to HTML. That's fine. Unless you're writing HTML all the time, **details like these aren't worth remembering**. A **Google search** for "adding links in html" will always get you your answer.  

New programmers often struggle with this because in other learning environments it's often important that you remember a lot of facts. But **programming doesn't work like that!** There's just too many facts to remember them all. Instead, **you need to understand a few big ideas and know how to get the details you need when you need them.**  

When you do forget stuff, there's lots of resources to help you out. A Google search is usually helpful. Another great place is http://www.w3schools.com/, a website with lots of documentation on web development, including a huge reference guide of HTML tags. As you get more experience programming, the more you'll learn about all the amazing resources the web has for new and professional programmers.

这就是我为什么喜欢programming.  
它教会你的不是繁复的记忆，而是解决问题的方式。  
比如解决问题的思路、出发点，比如如何搜索到自己想要的资源、知识。  
知识管理也是这样，你不用把所有的东西都记得，需要把握的是整体的脉络，同时知道需要的素材时在哪里能找到就好。

## Inline vs Block
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/60520507.jpg)

## Boxes and Containers
In the previous video Steve explained the distinction between **inline** and **block** elements. You might be a bit confused about the difference between the two, and that's okay. **It's not necessary to understand everything right now** and this topic will be revisited in the next lesson.  

In the next video you will have your first encounter with **container elements**: elements that do nothing but contain stuff inside themselves. The purpose of these elements will not be clear yet, but in the next lesson you will see how these elements can be used to create web pages with complex structures.

## Span and Div
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/43938046.jpg)

## Document Strcture
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/7953672.jpg)
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/49684379.jpg)

## HTML Document Structure
The concept of code structure will come up frequently thoughout this Nanodegree program. That's because programmers write code not just for computers, but for people as well. **Writing code that people can easily read** is a VERY important idea in computer programming. And a huge part of writing good code is **structuring it well**.

If you've ever written an English essay, you're familiar with the purpose of indenting every paragraph. It's a visual marker that a new idea has begun. Indentation serves a similar purpose in writing code. Some languages have slightly different rules about proper indentation, but the concept is generally the same as in English - a new indent is a new idea.

One big difference between indenting programming languages and indenting English, however, is that an indentation level persists throughout an idea. In HTML particularly, the indentation level increases when an idea begins and decreases when an idea is finished. If this is a bit confusing, let's look at an example:

HTML example  
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-7/85976958.jpg)

Let's disect this code a bit:

1) The first line is something that should appear on every webpage you make. <!DOCTYPE html> defines the type of the document so the browser will render it correctly.

2) The ```<html>``` tag opens our document. Everything that shows on the webpage is placed within this tag.

3) The ```<head>``` tag defines metadata for our web page. This includes the title of the page (this is what appears in the top of your tab or browser window). Notice that the ```<head>``` tag is indented to a new level because the <html> tag was opened but not closed (a new idea was started but not completed). Moreso, the ```<title>``` tag is indented another level further (the <head> tag was opened but not closed).

4) The ```<title>``` tag is closed on the same line it was opened which we usually do if the content of a tag is short. On the other hand, the ```<head>``` tag is closed on a different line. The closing tag is indented to the same level as the matching opening one.  

Now take a look at the contents of the ```<body>``` tag. Is there anything about the structure that is surprising to you?

## Lesson 1 Summary
You've learned a lot so far! Let's recap some of the big ideas:

### The World Wide Web
The web is composed largely of HTML documents. HTML stands for Hypertext Markup Language and is the language the browsers use to interpret web pages. The components of the web include the client (your computer and browser), the Internet, and servers. The client and servers interact through something called the Hypertext Transfer Protocol (HTTP).

### Basic HTML Elements
HTML Elements are what we use to tell a web browser how to display content in a web page.  
Most HTML elements consist of an opening and a closing tag with some content between them.  

```<b>text</b>``` Makes the 'text' content bold  
```<em>text</em>``` Makes the 'text' content italic

### HTML Attributes
Some elements accept additional values called attributes in their opening tags. Attributes provide additional information to the browser. For example, the anchor tag takes an attribute called href that defines a URL to link to. 

```<a href="url">link</a>``` Creates a hyperlink to the href attribute value url and names it link  
```<img src="url" alt="text">``` Displays the image hosted at the src attribute value "url" (this can also be a path to a local file on your computer). If the image cannot be displayed, then the alt attribute value "text" is shown.

### More HTML Elements
```<p>text</p>``` Defines a paragraph. The content of the <p> element is in a "box" 
```<br>``` Creates a line break 
```<div>content</div>``` Creates a "box" container element 
```<span>content</span>``` Creates an "inline" container element