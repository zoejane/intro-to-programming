# Intro: Code Your Own Quiz

## Interview with Mike Wales

You can also download software to help you set up your space. Mike uses a program called Divvy for his set-up. Another popular (and free!) option is BetterTouchTool. Of course, you can also just resize and position the windows yourself!

## Writing and Running Python on Mac
- We are using Python 2 in this Nanodegree
- Verifying Installation
	- Launchpad - terminal - python

### Updating the System Path
If you need to alter the Path environmental variable on a Mac, do as follows:

- Open up your Terminal. You can see what the Path environmental variable currently is set to by typing ‘```echo "$PATH"```‘. 
- The problem you are currently having is that a different version of Python appears before the one you just installed in this 'PATH' variable. To fix this, you can alter the PATH variable by opening up your '.bash_profile'. Open your .bash_profile file by typing ```open $HOME/.bash_profile``` in the terminal. 
- If you get an error because there is currently no file called .bash_profile, first verify that you are in the correct location by typing simply ```cd```, and then type in ```touch .bash_profile```. After that is done, go back and open up that file as explained by step 2. 
- Now that you have your .bash_profile open, add this line to the end of it: 

 ```PATH="/new/dir/location1:${PATH}"```


 ```export PATH```

Here, /new/dir/location1 is the location of your Python installation. If you installed Python in the default location (you did if you were following these instructions), this command would then be:

 ```PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"```


 ```export PATH```


Here, ```$PATH``` refers to the current path, the colon ‘:’ separates different directories, and everything before will be the new location you want the PATH environmental variable to search. The PATH variable searches directories in order, so you would flip the location of the export statement if you want to add a searched directory at the end: ```export PATH=/new/dir/location1:$PATH```

Hopefully, everything is now installed! Once you have Python installed, you can run code by opening your .py file in Sublime and then selecting ```Tools > Build``` to run your code! You can also simply navigate to the directory a file is located in with the Terminal and run a Python file by typing in ```python file_name.py``` to run a Python file called file_name.py.

## Setting Up Your Workspace
- running code
	- Sumblime - *.py - Cmd + B

If you're using a text editor other than Sublime, you may want to download a "package" to enable something similar to the "Build" feature demonstrated in this video. One favorite of ours for Atom is called "terminal-plus". Simply go to your preferences (Atom -> Preferences or File -> Preferences), go to Install, and search for "terminal-plus"  

We should also note that Sublime's Build feature is not the best for large projects (as you'll find when working on this Stage's final project). For code longer than just a few lines, we recommend using the command line, which you'll learn about next!

## Introducing the Command Line
There's one more thing you should know before you start Stage 2: the command line.  

Technically, there isn’t just one command line. A command line interface (CLI) is simply a text-based interface where you can type some commands. The system then runs those commands, performs some action, and shows you some output.  

Perhaps you’ve entered cheat codes in a video game. Some games have a command console that you use to enter cheat codes and enable secret features for the game! That's a CLI!  

In this Nanodegree program, we will focus on the Unix shell. It’s the CLI that most developers use, and it’s so ubiquitous that it’s often referred to as just “The Command Line”.  

Think of using the Unix shell as a way to send messages directly to the brain of your computer. You can give it commands that **it will immediately execute, without you having to click buttons, or use your mouse. This is extremely powerful**. It’s **so powerful that a single line of code can create, move, or delete large numbers of files all at once**.

### Wait, This Doesn’t Sound Like Programming
If you’re a fashion designer, you need to understand how to use a sewing machine. If you’re a chef, you’ll need to understand how to use an oven. **You’re on track to becoming a developer now (omg!)**, so you’ll need to understand a bit more about how computers work.  

No, the CLI isn’t programming. But as you’ll soon discover, Python and many other programming languages run inside the CLI. The skills covered here apply to all developers.  

## Navigating Directories
Let’s start by using the command line to navigate your computer’s file system. In this section, we’ll cover the following four commands:

- pwd
- ls
- open
- cd

Before we dive into these new commands, let’s take a look at how we navigate our computer using the traditional mouse and graphical user interface (GUI). The **GUI** (often pronounced "gwee") is the visual way of interacting with your computer using **windows, buttons, and mouse clicks**.  

If you’ve used a computer in the last 20 years, you should be familiar with this type of interface. You might have experience with a different operating system like Windows, but the underlying concepts are the same:  

- A window shows you a graphical representation of folders and files.
- You navigate to a folder by clicking on it.
- The window changes to show you the contents of the folder you clicked on.
- You open a file by clicking on it.
- You use the “Forward” and “Back” buttons to navigate through your history.

Pretty much all of these things can be done with the command line. Let’s look at a more specific example and compare the two interfaces.  

Here’s a sample file structure I’ve set up:  

To follow along, add a TopSecret folder to your desktop with a Notes folder and a Photos folder inside of it. In the Photos folder, add an image (any image will do) and call it adorable.jpg.

Using both the GUI and the Command Line, we want to:

- Navigate to the Desktop
- Open the TopSecret folder
- Open the Photos folder
- View the adorable.jpg image

We’ll start by doing this using the GUI:

opening files with GUI

## Navigating with a CLI

Now let’s perform the same actions as before with the command line. First, we need to open a new CLI window. If you're on Mac or Linux, you'll want to open a program called Terminal (the simplest way to find it is **by searching - press command + Space** on Mac).  

You might see some other text here, like your username, but you can safely ignore that. At this point, you might be saying, “Uh, now what do I do? There’s nothing here.” Well, the first thing we might want to do is figure out where we are (what folder we’re currently inside of). It’s time for our first command!  

### pwd
pwd stands for “**print working directory**”. Think of it as the “**Where am I**?” command. It will always print out the path to the current directory. Note that directory is just the technical term for what a GUI typically calls a folder.  

When using the command line, you’ll always be in a specific location on your computer. We can use pwd to let us know exactly where in the computer we are.  

Notice that when we opened up a new terminal window and typed pwd, the console prints /Users/udacity. This is known as the home directory. Every time you open up a **new window**, you will start out in your **home directory**. The path to your own home directory will differ depending on your username and operating system.  

We also have now seen the basic command line workflow that holds true for every other command we will learn:

- User types a command and hit enter
- The terminal prints something
- Repeat!

### ls
So how do we know what’s inside the home directory? Fortunately, there’s a super useful command, ls, which helps us view the contents of a directory. ls stands for “list” because it will **list the directories and files inside of a given directory**.

Let’s try entering ls in the home directory.

## open
Note: If you're using the Ubuntu operating system, you'll need to use the xdg-open command here instead. If you're using Windows, you may have to use the start command (this depends on your version of Windows and Git Bash).

You can use the ```open <directory_name> command``` to **view the current directory’s contents in a window**. To open the directory you are currently in, you can use a period . instead of the directory name.  

```$ open .```

Note the period. In the command line, **a . symbolizes the current directory**. Therefore, open . will open the current directory. Let's open something else, like say the Downloads directory.  

```$ open Downloads```

Pro Tip: If you start typing the name of the directory or file (Dow…), you can hit **TAB** to **autocomplete the word**, so you don’t have to type everything out!

## Changing Directories
When we first open up the command line, we are placed in the home directory. If we ever want to leave the home directory, we can use another helpful command, cd, to help us “move” to somewhere else.  

### cd
cd stands for “```change directory```”. To use it, we need to provide a path to the directory we want to change into. For example, to change from our home directory to the Desktop:

```$ cd Desktop```

Notice that the prompt changed from ~ to ~/Desktop to show my new current directory. **~ in this context represents the home directory**. ls should now show the contents of my Desktop rather than the contents of my home directory.

We can also use cd to navigate “backwards”. It is common to use **a double period (..)** to refer to the **parent directory** of the current directory. To move up one directory, use cd ..

```$ cd ..```

Now that we’ve covered pwd, ls, open, and cd we can revisit the initial goal that we set at the beginning of this lesson:

- Navigate to the Desktop
- Open the “TopSecret” folder
- Open the “Photos” folder
- View the “adorable.jpg” image

There are multiple ways to accomplish this using the commands we’ve seen. We could navigate to each folder separately and then open “adorable.jpg”:

```$ cd Desktop $ cd TopSecret $ ls $ cd Photos $ ls $ open adorable.jpg```

We can do this in less steps however, by "chaining" directories together. This allows us to navigate to Desktop/TopSecret/Photos in one step and then open “adorable.jpg”:

```$ cd Desktop/TopSecret/Photos $ open adorable.jpg```

## Creating Files and Directories
In the last lesson, we learned to use ls, cd, and pwd to move around our computer’s file tree. The next logical step is to learn about creating and removing files and directories. In this mini-lesson, we’ll focus on the creation of files and folders using two new commands: touch and mkdir. To demonstrate how to use these commands, we will create a file structure to represent a very simple animal hierarchy.

### mkdir
First, let's take a moment to think about how you would create a folder using the GUI. On a Mac, we can create folders by:

- Opening Finder
- Clicking “New Folder” from the “File” menu.

Let’s take a look at how we can achieve the same end result using the command line.  

mkdir (pronounced m-k-dur, make-dur, or make-deer depending on who you ask) is the command we use to **make a directory**. It will create a new folder with the name that we provide. To create an animals directory, you'd run:

```$ mkdir animals```

This creates the animals directory in the current directory, which happened to be Desktop in the above example. If I wanted to create a rodents directory inside of animals, I could either:

- ```cd``` into animals and then run ```mkdir rodents```
- Stay in Desktop and run ```mkdir animals/rodents```

Those are not the only two approaches, but they are the most sensible.  

We can also create **multiple directories** at once using mkdir by providing a list of directory names **separated by spaces**. For example, to create marsupials, cloven_hoofed_animals, and carnivores directories inside of the animals directory, we can write this line:

```$ mkdir marsupials cloven_hoofed_animals carnivores```

Note: It’s a good idea **not to put spaces in your directory and filenames** (hence cloven_hoofed_animals). If for some reason you really need a space in your directory name, you can **escape it using a backslash** like this: ```mkdir cloven\ hoofed\ animals```  

## touch
Creating a file using the command line is a bit less straightforward. Normally I would open a particular application relevant to the file type that I want to create (Microsoft Word for .docx, Adobe Acrobat or Preview for .pdf, TextEdit for .txt). Then, from inside the application, I would create a new file, save it, give it a name, and select a place to save it to. It’s a multi-step process that most people go through any time they want to create a new file.  

We use the touch command to create new files in one step. For example, to create a file named first_file.txt, we can run:

```$ touch first_file.txt```

We now have a brand new (and completely empty) file named first_file.txt in our home directory.

I can run ls and see the file listed with the other contents of the directory.

Just like with ls and cd, we can also use touch to make a new file in a directory other than our current directory, by providing the path where we want the file to be located. For example, to add a new capybara.txt file inside of the rodents directory inside of the animals directory, we can run:

```$ touch animals/rodents/capybara.txt```

To create multiple files, we can provide a list of file paths **separated by spaces to touch**, just like we did with mkdir.

```$ touch animals/marsupials/kangaroo.txt animals/cloven_hoofed_animals/giraffe.txt```  

It’s worth noting that we’re not limited to creating .txt files. We can create any sort of file that we want.  

## Removing Files and Directories
To delete a file on a Mac using Finder, you’d need to drag the file to the Trash.  

Just dragging something to the Trash doesn’t actually delete it, though. It just moves the file to the Trash, waiting for us to delete it forever by clicking the “Empty Trash” button.  

While the two-step deletion process provides a nice fail-safe if you accidentally delete something, it’s extremely slow! To **delete a file totally** (i.e., you won’t find it in the Trash) using the command line, we run ```rm <filename>```. For example, to delete the first_file.txt file on my Desktop, you can run:

```$ rm first_file.txt```

You can also delete multiple files at once by providing a list of filenames **separated by spaces**:

```$ rm apples.txt carrots.txt fruits.txt```

Warning: The commands you will learn in this section will result in permanent deletion of files and cannot be undone. Please use caution with these commands!  

Removing directories is slightly more complicated because there is more than one way to do it. The two ways that we’ll focus on are:

- rmdir
- rm -rf (Be careful with this command!)

We can use ```rmdir <directory_name>``` to delete a directory, but it only works on **completely empty directories**. Here’s a quick example:

```$ rmdir cats```

If we try and run rmdir on a directory that isn’t empty, this happens:

### Removing, with FORCE
To **delete a non-empty directory**, we can use ```rm -rf <directory_name>```. This is the same rm command we used to delete individual files but with an added -rf flag. The **-rf stands for “recursive force”**. It basically tells rm to **delete the directory and all files and folders inside of the provided directory** (using an approach called recursion).

```$ rm -rf cats```

### Beware!
rm -rf is very useful, but it’s also potentially a very dangerous command. It doesn’t ask you for confirmation before deleting items, nor does it allow you retrieve items from the Trash. You can potentially delete all of your files with one simple command!  

##  Command Line Summary
### Summary
We’ve covered a ton in this short lesson! Let’s review the commands covered:

- ls : List the contents of a directory
- cd : Change to a different directory
- pwd : Print the location of the current directory (or working directory)
- open : Opens a file (on Mac)
- touch : Creates a new file if one doesn’t already exist or update the file’s timestamp
- mkdir : Creates a new directory
- rm : Removes a file
- rmdir : Removes an empty directory
- rm -rf : Removes a directory and its contents (Without confirmation! Be careful!)

### Why This Matters
We recommend that you use your CLI to run Python code, it is the cleanest and easiest way to do so. To run Python code in the CLI, simply **use the above commands to navigate to the directory where your Python file is saved**, then type ```python <name_of_file>```. This will immediately execute the Python file. If the program has an error, you'll see that in the CLI too.

## Why You'll Make it
As you build this project, you'll be learning some of the most pervasive skills in computer programming:

- How to use "variables" effectively.
- How to write "functions" to **do repetitive work**.

You will also continue to think like a programmer even more.

##  How You'll Make It
- Go through lessons 2.1-2.7 (immediately following this lesson.)
- After some lessons, you'll find a Work Session, during which you'll work on your project by building a couple versions of the mad libs generator.
- Go to the next node, where you will find instructions about how to write Python code on your computer so you can apply your skills and work on your project.

If you work 10 hours per week, you can expect to spend 3 - 5 weeks on these lessons and work sessions.  

If you haven't already, I recommend you download the starter code for this Nanodegree program here. These files will help you follow along and take notes during each lessson.