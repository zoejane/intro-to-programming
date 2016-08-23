# Variables and Strings

## Where You Left Off
This lesson picks up right where you left off in the previous lesson. At the end of the previous lesson, you were asked to solve a programming problem (I'm not going to tell you what the question was yet).  

The code that solved the problem looked something like this:  

```print 299792458 * 1.0 / 1000000000 * 100```

Now, maybe you remember what that problem was and maybe you don't. But either way, this code is actually really **hard to understand**! In the language of programmers, this is **bad code readability**.  

**If you showed this code to someone who hadn't seen this problem they would have a lot of questions:**  

What is 299792458?  

Why are you multiplying all these numbers?  

But there's a solution to this problem.  

The concept you are about to be exposed to is one of the most important in all of computer programming and it empowers you to **write readable code** and much much more.

## Where to Focus Your Attention
This is one of the most important lessons you will take in this Nanodegree because it introduces one of the most important (and potentially confusing) topics in all of programming: **the variable**.  

As you watch the next few segments, focus on these three questions (these questions could go into your notes web page):

- What is a variable?
- What does it mean to assign a value to a variable?
- What is the difference between what the equals = means in math versus in programming. What's the difference between this: 2 + 3 = 5 and this: my_variable = 5?  

Also keep in mind that this is often the single most challenging concept for people learning to program. But If you ask questions and persevere, you will succeed.  

In the next video, Dave continues to talk about how to save the numbers in the speed of light calculation:  

```print 299792458 * 1.0 / 1000000000 * 100```  

using variables.

## Another Hard Thing
Variables can be hard to learn. Lots of things can be hard to learn. Something that makes learning hard things so hard is that it's often even harder to ask for help.  

As I was learning to code, I started using one particular phrase:  

"I don't understand."  

This was really difficult to ask the first time I asked it. **I knew that what I was asking about was supposed to be "simple" (whatever that means), and I was worried that the person I was asking would think I was stupid.  **

Luckily, the person didn't. **She answered my question patiently and clearly and I was able to move on.**  

If that person had been condescending and not completely patient and kind, I would have felt pretty stupid.  

Right now, you may be totally confused about variables, or you may be wondering why I'm making such a fuss about something that seems intuitive to you.  

If you're confused: **ask for help**. It will be a good decision.  

If you're not confused: **help others. Be patient and respectful and help someone else get to where you are. You'll probably learn something in the process.**

## Variables Can Vary
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-16/12026839.jpg)

## Spirit Age
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-16/45809854.jpg)
那一年，我学这门课程的时候26岁。  
那时我觉得，这个年龄学编程是不是太老了，是不是不务正业。  
兜兜转转两年后，我又回到了这个课程。  
突然觉得那时的自己好傻。觉得26岁，其实也还很年轻啊。觉得两年，其实也足够学很多东西做很多事情了。  
而且，就算是晚了那有怎样？两年后的我，不还是想做这些事情吗？  
既然是我想做的，迟早都打算做的事情，与其现在纠结是不是太晚了，不如现在一鼓作气学下去呢。  
我也不知道学了这些，我生活会有什么新的变化。但即使没有变化，我也可以和自己说，我终于做了那时想做的事，我终于完成了我的小小心愿，不是吗？  
左手音乐，右手计算机。这是那时的我所想过的生活。  
我想像MagicLife里的那个姑娘一样，做一个快乐的吟游诗人。不因别人的语言而扰乱了自己的心绪，而是一直向着自己想去的地方前进，纯粹而快乐。  
这是我余生终要做的事情，那就别管那么多，好好去做吧。  
我只是把看电视看八卦的时间节约下来，给我内心热爱的东西。  
即使最终什么也没有，我很高兴有你们在我身边，陪我过一生。

## Ada
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-16/57813518.jpg)

## Same Value
When it says ```s = '<any string>'```, it means that the pairs of answers must be equal for **every** possible string you could make s equal to.  

In particular, you should be careful with so-called **"edge cases"** which are things like **when s is the empty string**, a string containing no characters at all, that is, s="". You should also think about **short strings** like s = "a" or **longer strings** such as s = "The rain in Spain falls mainly on the plains."  

It's a good idea to think about what the answer might be and then to check it using the interpreter.

## Selecting Sub Sequences
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-17/38361669.jpg)

## Focus Checkpoint
That last quiz was a great example of **abstract thinking**. You didn't even know what the value of the string s was, so you were forced to think about s as **the abstract idea of ANY string**.  

If you found this difficult, that's normal. Abstract thinking, like anything, requires practice.  

In the next segment, Dave will explain how you can use a "method" called find to find strings within other strings. He'll use some words you don't know yet like method and procedure. You'll learn more about procedures (also known as functions) in the next lesson and more about methods in the next stage.   

For now, don't worry if you don't understand everything, there are some complex concepts underlying find.  

But try to understand how to use find. If you get stuck, ask for help on the discussion forums!  

## Finding Strings in Strings
![](http://7xsjcm.com1.z0.glb.clouddn.com/16-8-17/70367518.jpg)

## Focus Checkpoint
Right now, you may be feeling a little uncomfortable with find. You may have an idea of what it does, and you might be able to use it, but how does it work?!  

This is a normal feeling in programming. Even experienced programmers sometimes have to use a tool (like find) without fully understanding how it works.  

In the next segment, things will probably feel even more confusing. Dave is going to show you how you can make find even more powerful by adding a second "parameter".  

What's a parameter? In this code: ```"text".find("t")``` the "t" is a parameter.  

Next, you're going to see code like: ```"text".find("t", 1)``` and in this case, there are two parameters, "t" and 1.  

So **parameters** are what go **inside the parentheses**. It's not important that you know anything else about them at this point.  

Try to focus on what added power this second parameter gives you.

## More Practice with string.find()
```
# This segment is just a chance for you to play around with 
# finding strings within strings. Read through the code and 
# press Test Run to see what it does. Is there anything 
# interesting or unexpected?

print "Example 1: using find to print the second occurrence of a sub-string"
print "test".find("t")
print "test".find("t", 1)

print "Example 2: using a variable to store first location"
first_location = "test".find("t") # here we store the first location of "t"
print "test".find("t", first_location+1) # then we use that location to find the second occurrence.

print "Example 3: using find to get rid of exclamation marks!!"
example = "Wow! Python is great! Don't you think?"
first = example.find('!')
second = example.find('!', first + 1)
new_string = example[:first] + example[first+1:second] + example[second+1:]
print new_string # oops, I should probably replace the !s with periods
new_string = example[:first] +'.'+ example[first+1:second] +'.'+ example[second+1:]
print new_string
```

## String
For most strings, all of these options would work.  


But if s is the **'' empty string**, then **s[0] will cause an error **because there is no character at position 0.  


This is called an **edge case** in programming. It's a situation that doesn't come up too often (you usually don't need to use an empty string), but it does happen sometime.


It's easy to forget about **edge cases** and doing so is **a common cause of bugs**.