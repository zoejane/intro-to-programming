# IPND Stage 2 Final Project

# You've built a Mad-Libs game with some help from Sean.
# Now you'll work on your own game to practice your skills and demonstrate what you've learned.

# For this project, you'll be building a Fill-in-the-Blanks quiz.
# Your quiz will prompt a user with a paragraph containing several blanks.
# The user should then be asked to fill in each blank appropriately to complete the paragraph.
# This can be used as a study tool to help you remember important vocabulary!

# Note: Your game will have to accept user input so, like the Mad Libs generator,
# you won't be able to run it using Sublime's `Build` feature.
# Instead you'll need to run the program in Terminal or IDLE.
# Refer to Work Session 5 if you need a refresher on how to do this.

# To help you get started, we've provided a sample paragraph that you can use when testing your code.
# Your game should consist of 3 or more levels, so you should add your own paragraphs as well!

#sample = '''A ___1___ is created with the def keyword. You specify the inputs a ___1___ takes by
#adding ___2___ separated by commas between the parentheses. ___1___s by default return ___3___ if you
#don't specify the value to return. ___2___ can be standard data types such as string, number, dictionary,
#tuple, and ___4___ or can be more complicated such as objects and lambda functions.'''

# The answer for ___1___ is 'function'. Can you figure out the others?

# We've also given you a file called fill-in-the-blanks.pyc which is a working version of the project.
# A .pyc file is a Python file that has been translated into "byte code".
# This means the code will run the same as the original .py file, but when you open it
# it won't look like Python code! But you can run it just like a regular Python file
# to see how your code should behave.

# Hint: It might help to think about how this project relates to the Mad Libs generator you built with Sean.
# In the Mad Libs generator, you take a paragraph and replace all instances of NOUN and VERB.
# How can you adapt that design to work with numbered blanks?

# If you need help, you can sign up for a 1 on 1 coaching appointment: https://calendly.com/ipnd1-1/20min/

sample0 = '''A ___1___ is created with the def keyword.'''

answer0 = ["function"]

sample1 = '''Hi, this is a program written by a programming language called ___1___. 
These days I am learning program in ___2___. '''

answer1 = ["Python", "Udacity"]

sample2 = '''Hello ___1___!'  In ___2___ this is particularly easy; all you have to do
is type in:
___3___ "Hello ___1___!"
Of course, that isn't a very useful thing to do. However, it is an
example of how to output to the user using the ___3___ command, and
produces a program which does something, so it is useful in that capacity.

It may seem a bit odd to do something in a Turing complete language that
can be done even more easily with an ___4___ file in a browser, but it's
a step in learning ___2___ syntax, and that's really its purpose.'''

answer2 = ["world", "Python", "print","HTML"]

# A list of blanks(replacement words) to be passed in to the play game function. 
def blanks_list(blank_numbers):
    blanks_list= []
    for index in range(1, blank_numbers + 1):
        blanks_list.append("___"+str(index)+"___")
    return blanks_list

# Checks if a word in blanks_list is a substring of the word passed in.
def word_in_blanks(word, blanks_list):
    index = 0
    while index < len(blanks_list):
    	if blanks_list[index] in word:
    		return blanks_list[index],index
        index = index + 1 
    return None, None

def choose_mode():
    print "Please select a game difficulty by typing it in!"
    print "Possible choices include easy, medium and hard."
    mode = "medium"
    #mode = raw_input()
    while (mode != "easy") and (mode != "medium") and (mode != "hard"):
        print "\nThat's not an option!"
        print "Please select a game difficulty by typing it in! "
        mode= raw_input()
    if mode == "easy":
        return sample0,answer0, blanks_list(len(answer0))
    if mode == "medium":
        return sample1,answer1, blanks_list(len(answer1))
    if mode == "hard":
        return sample2,answer2, blanks_list(len(answer2))
    


def play_game(): 
    sample, answer, blanks_list = choose_mode()

    print "\nThe current paragraph reads as such:"
    print sample
    
    sample_list = sample.split()
    guess_count = 0
    guess = 5

    for word in sample_list:
    #index = 0
    #while index < len(sample_list):
    	#word = sample_list[index]
        blank_now, blanks_index = word_in_blanks(word, blanks_list)
        
        if blank_now != None:
 
            user_input = raw_input("\nWhat should be substituted in for " + blank_now + " ?")
            
            while user_input != answer[blanks_index]:

                if guess_count < guess:                       
                    print "That isn't the correct answer!Let's try again; you have " \
                    + str(guess - guess_count) \
                    +" trys left!\n\n\nThe current paragraph reads as such:"
                    print sample
                    user_input = raw_input()
                    

                else:
                    return "You've failed too many straight guesses!  Game over!"
                guess_count += 1

            if user_input == answer[blanks_index]:
                word = word.replace(blank_now, user_input)
                print "\nCorrect!\n\nThe current paragraph reads as such:"
                sample = sample.replace(blank_now,answer[blanks_index],1)
                print sample


                #print sample.replace(replacement,word)
                #index += 1
            #else:
                #guess_count += 1
                #if guess_count < guess:                       
                    #print "That isn't the correct answer!Let's try again; you have " \
                    #+ str(guess - guess_count) \
                    #+" trys left!\n\n\nThe current paragraph reads as such:"
                    #print sample


                #else:
                    #return "You've failed too many straight guesses!  Game over!"
        #index = index + 1
    
    return "\nYou won!"


print play_game()
