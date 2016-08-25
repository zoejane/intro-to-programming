# IPND Stage 2 Final Project 
# by Zoe Jane
# Email:  dadac123@gmail.com
# GitHub: https://github.com/zoejane

# Create quiz and answer for different mode.
quiz0 = '''A ___1___ is created with the def keyword.'''
answer0 = ["function"]

quiz1 = '''Hi, this is a program written by a programming language called ___1___. 
These days I am learning program in ___2___. '''
answer1 = ["Python", "Udacity"]

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

# A list of blanks(which need users to fill in) to be passed in to the play game function. 
# The blanks depend on how many answers in our quiz.
def blanks_list(answer):
    blanks_list= []
    blank_numbers = len(answer)

    for index in range(1, blank_numbers + 1):
        blanks_list.append("___"+str(index)+"___")
    return blanks_list

# Checks if the blank in blanks_list is a substring of the word passed in.
def word_in_blanks(word, blanks_list):
    index = 0
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

    if mode == "easy":
        return quiz0, answer0, blanks_list(answer0)
    if mode == "medium":
        return quiz1, answer1, blanks_list(answer1)
    if mode == "hard":
        return quiz2, answer2, blanks_list(answer2)
    

# Play a full game of Fill-in-the-Blanks quiz. 
# After the user choose a game mode, it will show a quiz with blanks.
# The user be asked to fill in each blank appropriately.
def play_game(): 

	# After the user choose a mode, 
	# the program prepare for the quiz, answer, blank_list. 
    quiz, answer, blanks_list = choose_mode()

    print "\nThe current paragraph reads as such:"
    print quiz
    
    # Split the words in quiz. 
    # It helps to find the blanks need to be filled in quiz.
    quiz_list = quiz.split()

    # Users could guess 5 times.
    guess = 5
    guess_count = 0

    for word in quiz_list:
        blank_now, blanks_index = word_in_blanks(word, blanks_list)
        
        # if this is a blank need user to fill in
        if blank_now != None:
            user_input = raw_input("\nWhat should be substituted in for " + blank_now + " ?")
            
            # Loop until we get the correct answer(case-insensitive). 
            while (user_input.lower()) != (answer[blanks_index].lower()):
            	# if we still have guess times
                if guess_count < guess:                       
                    print "That isn't the correct answer!Let's try again; you have " \
                    + str(guess - guess_count) \
                    +" trys left!\n\n\nThe current paragraph reads as such:"
                    print quiz
                    user_input = user_input = raw_input("\nWhat should be substituted in for " + blank_now + " ?")
                    guess_count += 1
                # if we don't have guess times
                else:
                    return "You've failed too many straight guesses!  Game over!"
                
            # Now, users answer correct.
            # user_input == answer[blanks_index]
            print "\nCorrect!\n\nThe current paragraph reads as such:"
            # Replace the blank with answer, and print the quiz again.
            quiz = quiz.replace(blank_now,answer[blanks_index],1)
            print quiz
    # We already loop through every words in quiz.        
    return "\nYou won!"

print play_game()
