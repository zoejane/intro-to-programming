# Front-End Project 
## Front-End Project Details
### How do I complete this project?

- If you need a refresher on JavaScript syntax, go to the [Javascript Basics course](https://classroom.udacity.com/courses/ud804); if you would like to understand how this project is manipulating and traversing the DOM, check out [Intro to jQuery](https://www.udacity.com/course/ud245-nd).
- Go through the videos and assignments in this course to learn the JavaScript necessary to build your resume.
- Read all the project details outlined below and make sure you understand each part. If you are unsure of anything please check with your cohort or private message your cohorts coaches.
- Fork the project repo from [Github](https://github.com/udacity/frontend-nanodegree-resume) and begin building you resume.
- Review your work against the Project Rubric (on the next page).
- When you are satisfied with your project, submit it according to the Submission Instructions on the next page.

#### By the end:
Your resume will look something like this:

![](http://i.imgur.com/pWU1Xbl.png)

And your repository will include the following files:

- index.html: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
- js/helper.js: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
- js/resumeBuilder.js: This file is empty. You should write your code here.
- js/jQuery.js: The jQuery library.
- css/style.css: Contains all of the CSS needed to style the page.
- README.md: The GitHub readme file.
- and some images in the images directory

### Your starting point...
#### js/helper.js
Within helper.js, you’ll find a large collection of strings containing snippets of HTML. Within many snippets, you’ll find placeholder data in the form of %data% or %contact%.  

Each string has a title that describes how it should be used. For instance, HTMLworkStart should be the first <div> in the Work section of the resume. HTMLschoolLocation contains a %data% placeholder which should be replaced with the location of one of your schools.  

### Your process:
The resume has four distinct sections: work, education, projects and a header with biographical information. You’ll need to:  

1. Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. All properties should be included and contain a value of the type specified unless the property is marked 'optional'. Property values may contain real or fake data. Property names are case-sensitive. Make sure your javaScript objects are formatted correctly using jshint.com.
2. bio contains:

```
name : string
      role : string
      contacts : an object with
            mobile: string
            email: string 
            github: string
            twitter: string (optional)
            location: string
      welcomeMessage: string 
      skills: array of strings
      biopic: url
      display: function
```
3. education contains:
```
      schools: array of objects with
           name: string
           location: string
           degree: string
           majors: array of strings
           dates: string (works with a hyphen between them)
           url: string
      onlineCourses: array of objects with
           title: string
           school: string
           dates: string (works with a hyphen between them)
           url: string
      display: function
```

4. work contains
```
      jobs: array of objects with
           employer: string 
           title: string 
           location: string 
           dates: string (Can be 'in progress')
           description: string 
      display: function
```

5. projects contains:
```
      projects: array of objects with
            title: string 
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function
```

- 1.Iterate through each javaScript object and append its information to index.html in the correct section.
	- First off, you’ll be using jQuery’s selector.append() and selector.prepend() functions to modify index.html. selector.append() makes an element appear at the end of a selected section. selector.prepend() makes an element appear at the beginning of a selected section.
	- Pay close attention to the ids of the <div>s in index.html and the HTML snippets in helper.js. They’ll be very useful as jQuery selectors for selector.append() and selector.prepend()
- 2.You’ll also be using the JavaScript method string.replace(old, new) to swap out all the placeholder text (e.g. %data%) for data from your resume javaScript objects.
- 3.Here’s an example of some code that would add the location of one your companies to the page:
	- ```var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);```
	- ```$(".work-entry:last").append(formattedLocation);```
		- Use the mockup at the bottom of this document as a guide for the order in which you should append elements to the page.
- 4.The resume includes an interactive map. Do the following to add it.
		- In resumeBuilder.js, append the googleMap string to ```<div id=”mapDiv”>```.
		- In index.html, uncomment the Google script element: ```<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places"></script>```
		- In helper.js, at the bottom of the file, uncomment code to initialize map and set fitBounds.
- 5.All of your code for adding elements to the resume should be contained within functions.
- 6.As described in the javaScript object schema, each display function should be encapsulated within the javaScript object it displays in the resume. For instance, your display function for appending 'work' experience data to the resume should be encapsulated within the work javascript object. The display function can be encapsulated within the work javaScript object definition in the same way other properties are defined there, or it can be encapsulated later in the file using dot notation. For example: work.display =
- 7.It’s possible to make additional information show up when you click on the pins in the map. Check out line 174 in helper.js and the Google Maps API to get started.

## Evaluation and Submission
### Evaluation
Your project will be evaluated by a Udacity reviewer according to the rubric below. Be sure to review it thoroughly before you submit. All criteria must "meet specifications" in order to pass.  

Please make note of the [Udacity Front End Javascript Style Guide](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) to make sure your project meets code quality and readability requirements.  

### Online Resume Project Rubric
#### Submission
The master branch is the default Github repository branch. If you wish to submit another branch, you'll need to set it as the [new default branch](https://help.github.com/articles/setting-the-default-branch/) inside your Github repository.  
When you're ready to submit your project go back to your [Udacity Home](https://www.udacity.com/me), click on Project 2, and we'll walk you through the rest of the submission process. Due to the high volume of submissions we receive, please allow up up to 7 business days for your evaluation to be returned.  
If you are having any problems submitting your project or wish to check on the status of your submission, please email us at frontend-project@udacity.com or visit us in the [discussion forums](http://discussions.udacity.com/).

#### What's Next?
You will get an email as soon as your reviewer has feedback for you. In the meantime, review your next project and feel free to get started on it or the courses supporting it!

####Useful Links
[Udacity Front End Javascript Style Guide](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

