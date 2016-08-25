# How to Solve Problems
## Resources
[The Problem with Time & Timezones - Computerphile](https://www.youtube.com/watch?v=-5wpm-gesOY&list=TLBBCouWmde2kE6qFG90Fsn3GusE_aTr8k)
Learn More: How to Solve Problems - In this recorded session, Andy and Mark step through how to write a Python program to check whether a Sudoku grid is valid or not.
[Video](http://bit.ly/1RAGhlc)
[Transcript](http://discussions.udacity.com/t/stage-2-webcasts/16001?_ga=1.46359523.53639439.1458784522)


## How to Solve Problems
This unit wasn't part of the original CS101 class, but was added to provide some more help with how to actually solve problems. It is very common for students to feel like they understand solutions after they see them, but not be able to solve problems on your own. **You shouldn't be dismayed or frustrated if that's the case! It takes time and practice to get good at solving programming problems yourself, but as you improve you will find it a rewarding and enjoyable activity.**  

Learning to program is a challenging skill that involves very different types of thinking than most people are used to. I hope this lesson will give you some helpful strategies for how to go about solving problems yourself, especially as you face more complex problems like the example one here (which was contributed by a CS101 student in the forums).  

## About this Lesson
I found this lesson really helpful when I was learning to code. In going through a single problem from start to finish Dave does a good job of revealing how to think about solving problems on your own.  

Next, Dave will introduce the problem you'll be working on.

## First Step
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-21/49755064.jpg)

## Understanding a Problem
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-21/48623883.jpg)

## The First Rule
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/77018178.jpg)

## What Are the Inputs
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/93920450.jpg)

## How Are Inputs Represented
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/44306891.jpg)

## What Are the Outputs
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/18668889.jpg)

## Obey the Rules
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/60141600.jpg)

## Next Step
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/57554120.jpg)

## The Expected Output
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/84688593.jpg)

## Take the Next Step
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/89676457.jpg)

## Harder Example
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/13501931.jpg)
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/42939274.jpg)

## Algorithm Pseudocode
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/32435793.jpg)

## Should We Implement It
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/27417504.jpg)
Our goal as programmers should be to try and find a simple solution first.  
Something this complicated is very difficult to get correct.  
Once you start handling lot's of special cases, and I've seen lots of disscussions on the forum of people who try to handle all these special cases.  
It's really hard to get them all right and it makes the code very complicated.  
So let's start by thinking of a simpler way.  
Often the way humans solve a problem is not the simplest way, because humans are lazy.  
We want find shortcuts, instead of doing things in a real, simple ,mechanical way.  
On the other hand, computers are not lazy.  
Doing things in a simple, mechanical way is great for computers.  
It makes the program easier to write, makes it more likely to be correct.

## Different Approach
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/35461774.jpg)

## Simple Mechanical Algorithm
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/65177568.jpg)

## Don't Optimize Prematurely
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/37831274.jpg)

## What Should We Write First
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/75694498.jpg)

## Define Simple nextDay
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/74484386.jpg)

## Making Progress Is Good
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/85091507.jpg)  
The way to make progress is not to write lots of code.  
It's to write small bits of code to test them and to know what they do.  

## What Should We Do Next
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/76558981.jpg)

## Define daysBetweenDates
Well done for getting this far! The solution to this problem is broken down into three parts:

- Step One Pseudocode

- Step Two Helper Function

- Step Three daysBetweenDates

## Step One Pseudocode
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/49971808.jpg)

## Step Two Helper Function
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/33134862.jpg)

## Step Three daysBetweenDates
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/33183067.jpg)

## Best Strategy
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/34215769.jpg)
You're writing small bits of code that you can test independently as you go.  
You don't want to be writing a lot of code and not being able to test it.  
That's one of the most important things to learn as a developer is to think of ways to structure a code, to organize the way you build code, so you're able to do meaningful tests as you go and see the code incrementally get closer to the solution that you need for that.

## Conclusion
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-22/78082730.jpg)
### Pythonista's Guide to All Problems in the Galaxy
- Don't panic.
- What are the input?
- What are the output?
- Work through some examples by hand
- Simple mechanical Solution
- Develop incrementally and test, as we go