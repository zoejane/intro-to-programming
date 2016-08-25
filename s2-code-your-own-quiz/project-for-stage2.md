# Project for Stage2
## Tips
[How can I return two values from a function in Python?](http://stackoverflow.com/questions/9752958/how-can-i-return-two-values-from-a-function-in-python)
```
def select_choice():
    ...
    return i, card

my_i, my_card = select_choice()
```

[Replace first occurrence only of a string?](http://stackoverflow.com/questions/6005891/replace-first-occurrence-only-of-a-string)
```
text = text.replace("very", "not very", 1)
```

Note that if you are on Python 3.x, you will need to replace raw_input with input.


The third parameter is the maximum number of occurrences that you want to replace. From the document of python:

string.replace(s, old, new[, maxreplace]) Return a copy of string s with all occurrences of substring old replaced by new. If the optional argument maxreplace is given, the first maxreplace occurrences are replaced.

[Python: How to keep repeating a program until a specific input is obtained?](http://stackoverflow.com/questions/20337489/python-how-to-keep-repeating-a-program-until-a-specific-input-is-obtained)

There are two ways to do this. First is like this:

```
while True:             # Loop continuously
    inp = raw_input()   # Get the input
    if inp == "":       # If it is a blank line...
        break           # ...break the loop
```

The second is like this:
```
inp = raw_input()       # Get the input
while inp != "":        # Loop until it is a blank line
    inp = raw_input()   # Get the input again
```

## Project Submission

In this stage, you will use the Python programming language to build your own quiz. You will use a fill-in-the blank style to create a quiz that can even be used as a study tool to help you remember important vocabulary.

### 1 - Game Review
In this portion of the review, your reviewer will be checking to make sure the game works the way it's supposed to. See the rubric below for exact specs.

### 2 - Code Review
Your reviewer will also look at the Python code you've written and provide feedback on:

- Use of Variables: Your code should take advantage of variables and variable names should reflect the values they store.
- Functions: Your code should use functions appropriately to avoid repetition. Function parameters should have logical names and should all be used in the body of the function.
- Appropriate use of Data: Data types (strings vs lists for example) should be used appropriately.
- Appropriate use of other coding techniques: Your code should use statements like if, then, else, while, etc... appropriately.
- Each function includes a comment: Comments explain function behavior, inputs, and outputs (if applicable.)

The rubric that will be used is [here](https://review.udacity.com/?_ga=1.52242285.53639439.1458784522#!/projects/3568138824/rubric).

## My Thinking
### Breaking Down the Problem
The inputs are: 
- quiz with blanks
- blanks list
- user's answer

The outputs are:
- if right
	- replace the quiz with answer
	- move to next blank
- if wrong
	- tell user it's wrong and start the quiz again
	- if failed too many time, game over

### What To Do
Let's see if we can write an outline of what to do if we were to do this manually on pen and paper:  

#### Version 1
Every blanket replaced with user input.

- Print the quiz
- Loop through the blankets in the quiz
- Get user's input
- Comparer user's input and the answer of the quiz
	- if right: move to next blanket
	- if wrong: end the game
- Are we at the end of the loop? 
	- Yes, you win.
	- No, loop back.

```
sample = '''A ___1___ is created with the def keyword. You specify the inputs a ___1___ takes by
adding ___2___ separated by commas between the parentheses. ___1___s by default return ___3___ if you
don't specify the value to return. ___2___ can be standard data types such as string, number, dictionary,
tuple, and ___4___ or can be more complicated such as objects and lambda functions.'''

---------

blanks_list = ["___1___","___2___"...]

blanks_list = []
for index in range(1, 6):
	blanks_list.append("___"+str(index)+"___")
print blanks_list

---------

user_input = raw_input("What should be substituted in for " + blanket + " ?")

---------

check if sample have words in blankets_list

def word_in_blanks(word, blanks_list):
	for blank in blanks_list:
	    if blank in word:
	        return blank
	return None

---------
play a simple game
split samle, loop through, and join again

def play_game(sample, blanks_list): 
    print sample

    replaced = []
    sample = sample.split()

    for word in sample:
        replacement = word_in_blanks(word, blanks_list)
        if replacement != None:
            user_input = raw_input("What should be substituted in for " + replacement + " ?")
            word = word.replace(replacement, user_input)
            replaced.append(word)
        else:
            replaced.append(word)
	
    replaced = " ".join(replaced)
    return replaced
    
```
#### Version 2
Make the Version 1's output like the demo

```

print "\nThe current paragraph reads as such:"

---------
after every input, replace the blank, print it out

print sample.replace(replacement,word)

```

#### Version 3
Compare user's answer with real answer

```

add answer to def play_game(sample, answer, blanks_list)

---------

answer1 = ["world", "Python", "print","HTML"]

```

#### Version 4
add 5 tries to user's guess

```
guess = 0

...

guess += 1
if guess < 5:                       
    print "That isn't the correct answer!Let's try again; you have " \
    + str(5 - guess) \
    +" trys left!\n\n\nThe current paragraph reads as such:"
    print sample
else:
    return "You've failed too many straight guesses!  Game over!"

```

#### Version 5
add choose mode

```
def choose_mode():
    print "Please select a game difficulty by typing it in!"
    print "Possible choices include easy and hard."
    mode = raw_input()
    while (mode != "easy") and (mode != "hard"):
        print "\nThat's not an option!"
        print "Please select a game difficulty by typing it in!\n "
    if mode == "easy":
       return sample0,answer0, blanks_list(len(answer0))
    if mode == "hard":
        return sample1,answer1, blanks_list(len(answer1))
```