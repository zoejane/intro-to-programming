# IPND Stage 2 Final Project 
# by Zoe Jane
# Email:  dadac123@gmail.com
# GitHub: https://github.com/zoejane

# Create quiz and answer for different mode.
quiz0 = '''Pythonista's Guide to All Problems in the Galaxy
0. Don't ___1___.
1. What are the ___2___?
2. What are the output?
3. Work through some ___3___ by hand
4. Simple mechanical Solution
5. Develop incrementally and ___4___, as we go'''
answer0 = ["panic","input","examples","test"]

quiz1 = '''Hi, this is a program written by a programming language called ___1___. 
These days I am learning program in ___2___. 
I have learded ___3___ and ___4___ in last stage.'''
answer1 = ["Python", "Udacity","HTML","CSS"]

quiz2 = '''Hello ___1___!'  In ___2___ this is particularly easy; all you have to do
is type in:
___3___ "Hello ___1___!"
Of course, that isn't a very useful thing to do. However, it is an
example of how to output to the user using the ___3___ command, and
produces a program which does something, so it is useful in that capacity.

It may seem a bit odd to do something in a Turing complete language that
can be done even more easily with an ___4___ file in a browser, but it's
a step in learning ___2___ syntax, and that's really its purpose.'''
answer2 = ["world", "Python", "print","HTML"]

# Prepare the list of blanks which need users to fill in. 
# The blanks depend on how many answers in our quiz.
def blanks_list(answer):
    blanks_list= []
    blanks_length = len(answer)

    for index in range(1, blanks_length + 1):
        blanks_list.append("___" + str(index) + "___")
    return blanks_list

# Checks if the blank in blanks_list is a substring of the word( from quiz.split() ) passed in.
def word_in_blanks(word, blanks_list):
    index = 0
    # Loop through the blanks_list to make comparision.
    while index < len(blanks_list):
    	if blanks_list[index] in word:
    		return blanks_list[index],index
        index = index + 1 
    return None, None

# Let users choose different game mode.
def choose_mode():
    print "Please select a game difficulty by typing it in!"
    print "Possible choices include easy, medium and hard."

    mode = raw_input()
    
    # Loop until we get a valid input.
    while (mode != "easy") and (mode != "medium") and (mode != "hard"):
        print "\nThat's not an option!"
        print "Please select a game difficulty by typing it in! "
        mode= raw_input()
    
    print "\nYou've chosen " +mode +"!\n"
    if mode == "easy":
        return quiz0, answer0, blanks_list(answer0)
    if mode == "medium":
        return quiz1, answer1, blanks_list(answer1)
    if mode == "hard":
        return quiz2, answer2, blanks_list(answer2)

def choose_guess():
    # Users could guess 5 times.(default value)
    guess = 5

    print "You will get 5 guesses per problem."
    user_input = raw_input("If you want to change it, please press 'y'.")

    if user_input.lower() == 'y':
        print "Please input a number."
        guess = raw_input()
        try:
            guess = int(guess)
            print "Now you get " + str(guess) + " guesses per problem."
        except ValueError:
            print "That's not a valid number. "

    return guess
    

# Play a full game of Fill-in-the-Blanks quiz. 
# After the user chooses a game mode, it will show a quiz with blanks.
# The user is asked to fill in each blank appropriately.
def play_game(): 

	# After the user chooses a mode and guess times.
	# the program prepares for the quiz, answer, blank_list, guess times. 
    quiz, answer, blanks_list = choose_mode()
    guess = choose_guess()

    guess_count = 0

    print "\nThe current paragraph reads as such:"
    print quiz
    
    # Split the words in quiz. 
    # It helps to find the blanks need to be filled in quiz.
    quiz_list = quiz.split()

    for word in quiz_list:
        blank_now, blanks_index = word_in_blanks(word, blanks_list)
        
        # if this is a blank need user to fill in
        if blank_now != None:
            user_input = raw_input("\nWhat should be substituted in for " + blank_now + " ?")
            
            # Loop until we get the correct answer(case-insensitive). 
            while (user_input.lower()) != (answer[blanks_index].lower()):
            	# if we still have guess times
                if guess_count < guess:                       
                    print "\nThat isn't the correct answer!Let's try again; you have " \
                    + str(guess - guess_count) \
                    +" trys left!\n\nThe current paragraph reads as such:"
                    print quiz
                    user_input = user_input = raw_input("\nWhat should be substituted in for " + blank_now + " ?")
                    guess_count += 1
                # if we don't have guess times
                else:
                    return "You've failed too many straight guesses!  Game over!"
                
            # Now, users answer correct. (user_input == answer[blanks_index)
            print "\nCorrect!\n\nThe current paragraph reads as such:"
            # Replace the blank(only the blank users filling in now) with answer, 
            # and print the quiz again.
            quiz = quiz.replace(blank_now, answer[blanks_index], 1)
            print quiz

    # We already loop through every word in quiz.        
    return "\nYou won!"

print play_game()
