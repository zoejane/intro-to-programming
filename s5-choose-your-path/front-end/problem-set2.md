# Problem Set 2
## Function-Level Scope

Example 1
```
var outsideExample = "First string";
function example() {
    var outsideExample = "Second string";
}
example();
console.log(outsideExample); // "First string"
```

Example 2
```
var outsideExample = "First string";
function example() {
    outsideExample = "Second string";
}
example();
console.log(outsideExample); // "Second string"
```

In the first example, notice that we're using var within example(). var means we're declaring a new outsideExample variable within example(). There are two outsideExamples in our program, one with a global scope ("First string") and one with a function-level scope inside example().  

After we run example() and try to log outsideExample, we'll log the global version of outsideExample, which is "First string" because console.log() doesn't have access to the version of outsideExample that was created within example().  

A global scope means that the variable is accessible anywhere inside our program, which is why we don't need to use var in example 2. In example 2, there's only one version of outsideExample because we aren't declaring a new variable inside example(). Instead we're simply modifying the value of the original global variable outsideExample, which is why we log "Second string" at the end of example 2.  

To learn more, check out [this in-depth article](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html) on JavaScript scope.

## Map Making
### Can you extend the resume's Google Map?
Within helper.js, you'll find the logic that controls the Google Map starting at line 70.  

Essentially, the function initializeMap() is called when the page loads. From there, the script iterates through all of the objects in the resume, collects the location strings and sends off those locations to the Google Place Search service. From there, the place search service results are turned into location pins on the map itself!

### Your Challenge
Your goal is to add an overlay with the name of each city that will appear when a user clicks on your map.  

Start by checking out the createMapMarker() function in helper.js, which includes a few lines that add an event listener to the map that fires off an event when each marker gets clicked.  

```
google.maps.event.addListener(marker, 'click', function() {
    // your code goes here
});
```

The code inside the event listener will run every time a user clicks on your map.  

createMapMarker() also creates an infoWindow object that will determines the properties of the overlay.  

Read through the Google Maps API for [info windows](https://developers.google.com/maps/documentation/javascript/reference#InfoWindow) and take a look at [this example](https://developers.google.com/maps/documentation/javascript/infowindows). Can you figure out the right function to call within the event listener to ensure that the infoWindow object opens when a user clicks on a location? Click "Continue to quiz" when you're ready to give it a shot!
SKIP TO QUIZ  

Let's start by reading through the infoWindow constructor in the [Google Maps API](https://developers.google.com/maps/documentation/javascript/reference#InfoWindow).  

It says that "After constructing an InfoWindow, you must call open to display it on the map."  

In other words, the infoWindow has an open method encapsulated in it that we must call to open each overlay.  

This is a good place to start. Let's take a look at [the example](https://developers.google.com/maps/documentation/javascript/infowindows) to see how they open each infoWindow.  

Looking down through the example, it looks like they're opening the window here:  

```
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});
```

They're calling the open() method on the infowindow object (in helper.js, we call it infoWindow) and pass in the map object and the marker object.  

But how did they know to pass in map and marker? The open(map, anchor) method described in the API explains that it needs a map first and then an anchor point. The anchor point is simply the position to open the map, which we obviously want to be the same as the map marker.  

So, in the end we simply add the line  

```
infoWindow.open(map, marker)
```

to the event listener for each map marker and we've got overlays!  

Next step, try formatting the content of the infoWindow, which is simply a string that contains the overlay's HTML. Right now it's set to name, which is just the name of the city. Try learning some [HTML and CSS](https://www.udacity.com/course/ud304?_ga=1.82127954.53639439.1458784522) to make the overlay really stand out!  

## Pagespeed Insights (Optional)
Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.  

By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.  

Let's assume you're building the front-end testing framework and you make a call to the PSI [API](https://developers.google.com/speed/docs/insights/v1/getting_started). You receive the JSON below as a response.  

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.  

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.

```
var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}
```
See the example [here](https://developers.google.com/speed/docs/insights/v1/getting_started).
SKIP TO QUIZ

