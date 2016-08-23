# Input -> Function -> Output
## Resources
[Unit 2 Notes](http://wiki.udacity.com/CS101%20Unit%202?_ga=1.120169292.53639439.1458784522)
[Python Reference 2](http://wiki.udacity.com/CS101%20Unit2%20Python%20Reference?_ga=1.120169292.53639439.1458784522)
Learn More: Python Basics - IPND: Stage 2, Functions, Prints vs Return statements
- [Video](http://bit.ly/1Kj8QiP)
- [Transcript](https://discussions.udacity.com/t/stage-2-webcasts/16001/6?_ga=1.115108675.53639439.1458784522)
Learn More: Problem Solving 1
- [Video](http://bit.ly/1MSB9Vl)
- [Transcript](https://discussions.udacity.com/t/stage-2-webcasts/16001/8?_ga=1.119819340.53639439.1458784522)
Learn More: Problem Solving 2
- [Video](http://bit.ly/1Bt51a3)
- [Transcript](https://discussions.udacity.com/t/stage-2-webcasts/16001/9?_ga=1.86189276.53639439.1458784522)


## Where You Left Off
In the last lesson you learned one of the most important ideas in programming: **variables**.  

In this lesson, you'll learn one of the other most important ideas: **functions** (Dave will call them "procedures").  

Before you jump into learning about functions, the next three segments will let you see functions in action. You won't understand everything that's going on, but spend some time trying to understand the code you're about to see and it will help you prepare your brain for the rest of the lesson.

## Where to Focus
- Next you'll see Dave talk to Sebastian (who happens to be the CEO of Udacity) about self-driving cars.
- They will talk a lot about **inputs** and **outputs**. Pay attention to how they use these words.

## Focus Checkpoint
Dave is about to explain how to use functions (note that he calls them "procedures") in Python.  

This stuff is hard. It takes time and practice to really understand:

- **what** a function is
- **how** to make a function
- **how** to use a function
- **when** you should write a function
- **why** functions are so valuable.

**So don't worry if you feel confused at first. That's normal.** Stick with it and don't expect complete mastery yet!

### Where to Focus
**Try to avoid becoming overwhelmed by first focusing on only a few of the ideas** presented in the next video. It's such an important video that I will ask you to watch it again afterwards.  

This time, just focus on the following question:

- How do functions take **input** and produce **output** and what role do the keywords ```def``` and ```return``` have to do with this process?

## Inputs and Outputs
Functions take **input**, do something with it, and then produce **output**.

## Focus Checkpoint
You just watched a video and answered some questions about how functions handle input and output.  

Now, you'll see the **same video** you saw earlier, but this time you should focus on the difference between how functions are **defined** vs how they are **used**.  

Pay attention to the difference in what goes between the ```(parentheses)``` in code like this:  

```def rest_of_string(s):```

versus code like this:

```print rest_of_string("audacity")```

## Sum Procedure With A Return Statement
The reason the fourth choice is incorrect is because **the sum procedure does not actually change the values of the inputs**. In fact, **it is impossible to write a procedure that changes the value of an integer or string input, since these types are immutable**. That means that **once we create an object of an integer or string type, there is nothing that can be done to change the value of that object**. For example,

```
 x = 17
 z = 'hello'
 any_mysterious_procedure(x, z)
 ```
 
After this code, we know the value of x is still 17 and the value is z is still 'hello' even though we know nothing about what the any_mysterious_procedure does.  

In the next unit, we'll see our first example of a type (lists) that is mutable!

## Focus Checkpoint
You've had a lot of information thrown at you at this point. **If you're feeling overwhelmed: that's okay. **You aren't supposed to be an expert with functions at this point.** That will take time.**   

Now would be a good time to pause and collect your thoughts.  

When you continue, you will be asked to practice defining some functions of your own. **You will make mistakes. Try your best to solve each question on your own, but don't be surprised if you get stuck. **In this case, there's nothing wrong with watching the solution video.

