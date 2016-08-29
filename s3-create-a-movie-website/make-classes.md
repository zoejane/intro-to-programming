# Make Classes
## Resources
[Google Style Guide for Python](https://google.github.io/styleguide/pyguide.html)
[fresh_tomatoes.py](https://github.com/adarsh0806/ud036_StarterCode/blob/master/fresh_tomatoes.py)  
[Learn Python the Hard Way](http://learnpythonthehardway.org/book/)

### Using Predefined Class Variables
[Documentation on pre-defined variables _name_ and _module_](http://www2.lib.uchicago.edu/keith/courses/python/class/5/)  

Documentation on pre-defined variables _name_ and _module_: 1) [The University of Chicago Library](http://www2.lib.uchicago.edu/keith/courses/python/class/5/) 2) [Python documentation](https://docs.python.org/2/reference/datamodel.html)

## What Should Class Movie Remember?
class Movie  

Things to remember
- title
- storyline
- poster_img
- youtube_trailer

Things to do
- show_trailer()

## Recap Vocab
![](https://s23.postimg.io/tlvgsbiqz/Screen_Shot_2014_04_18_at_4_52_12_PM.png)

## Using Predefined Class Variables
```__doc(/name/module)__ ```

```
import turtle
print turtle.Turtle.__doc__
```

Add some documentation, at the beginning of the class Movie.
Use triple codes, to define my documentation.(create documentation for multiple lines)

```
class Movie():
	"""This is class provides a way to sotre movie related information"""
```

## Inheritance
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-29/93521916.jpg)

## Updating the Design for Class Movie
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-29/59014872.jpg)

## Fish, Salmon, Classes, and Objects
When I was learning Object Oriented Programming I remember being fascinated by the idea (especially the idea of inheritance) but struggling with all the vocabulary. But learning the vocabulary becomes really important when you actually want to use OOP in the code you write.  

The most important linguistic distinction is between Objects and Classes. The resource I want to share comes from a free online book called "Learn Python the Hard Way," which I definitely recommend you check out if you want to learn more about Python. The section I want you to read does a fantastic job explaining the difference between a Class and an Object and it uses a simple question to motivate the whole thing:  

What's the difference between a salmon and a fish?