# Back-End Path Intro
## Resources
[Git and Github](https://www.udacity.com/course/ud775?_ga=1.241790918.53639439.1458784522)  

## Course Summary
Students have the option of completing five possible paths for Stage 5 of the nanodegree: Front-End Developer, Back-End (Full-Stack) Developer, Data Analyst, iOS Developer, and Android Developer. This course is part of the Full Stack Developer path.   

This course is a quick, fun introduction to using a relational database from your code, using examples in Python. You'll learn the basics of SQL (the Structured Query Language) and database design, as well as the Python API for connecting Python code to a database. You'll also learn a bit about protecting your database-backed web apps from common security problems.  

After you’ve completed this course, you’ll be ready to dive into the Full Stack Web Nanodegree, which is the ultimate stepping stone to a career in Full Stack web development!

## Why Take This Course?
If you look under the hood of a lot of major web sites — from Wikipedia to Reddit — you'll find a relational database somewhere.  

Database systems such as PostgreSQL and MySQL have been part of the web developer's toolkit for many years, and remain some of the most powerful tools available for storing and manipulating structured data.  

If you're planning to continue on in full-stack development, knowing about databases is essential background. Even though many toolkits hide the details of the database from your application code, being able to interact with the database will serve you well in designing, debugging, and maintaining your applications.

## Prerequisites and Requirements
**You can read and write basic code in Python. **This course uses programming exercises in Python. If you haven't worked with Python before, check out our course Programming Foundations with Python.  

If you can understand this code (maybe with the help of the random module documentation), you know enough Python for this course:

```
import random

def ChooseTwice(items):
    a = random.choice(items)
    b = random.choice(items)
    return a, b

names = ["Alice", "Bob", "Charlie", "Debra"]
(one, two) = ChooseTwice(names)
if one == two:
    print "%s is happy!" % one
else:
    print "%s likes %s!" % (one, two)
```

 
**You can use a command-line interface (terminal). **Some of the exercises in this course involve using a Unix-style command-line interface to enter commands, run Python programs, and navigate directories.  

If you have taken our course on Git and Github, the level of command-line use in this course is similar.  

**You don't need to be a Web programmer.** This course does include a small Web application and some HTML and JavaScript in examples, but you will not need to make changes in these languages.

**You don't need any previous database experience.** This course is an entry-level introduction to relational databases.

**You need a programming text editor** (such as Sublime Text) installed on your computer. You should be able to use it to open and edit files of Python code.

## Syllabus
### Lesson 1: Data and Tables
In this lesson, you'll learn about how relational databases let you structure data into tables. You'll learn about the importance of unique keys and relationships between tables.

### Lesson 2: Elephants Elements of SQL
In this lesson, you'll begin learning SQL, the Structured Query Language used by most relational databases. You'll learn about the select and insert statements, the basic operations for getting data out of a database and putting data into a database. You'll learn about the operators and syntax available to get the database to scan and join tables for you.

### Lesson 3: Python DB-API
In this lesson, you'll learn how to access a relational database from Python code. You'll use a virtual machine (VM) running on your own computer to run a Python web application, and adapt that application to use a database backend. Then you'll learn about some of the most common security pitfalls of database-backed applications, including the famous Bobby Tables. This lesson also covers the SQL update and delete statements.

### Lesson 4: Deeper Into SQL
In this lesson, you'll learn how to design and create new databases. You'll learn about normalized design, which makes it easier to write effective code using a database. You'll also learn how to use the SQL join operators to rapidly connect data from different tables.

### Lesson 5: Final Project
In this project, you'll use your Python and SQL knowledge to build a database-backed Python module to run a game tournament. You'll design the database schema and write code to implement an API for the project.

## Relational Databases Tips and Tricks
Karl will be guiding you through this course on Relational Databases. Before you dive in, familiarize yourself with some useful resources on Virtual Machines(VM) which will support you in your journey as a back end programmer.  

### What is a Virtual Machine?
In this course Karl uses Vagrant to create a virtual machine. A virtual machine is a computer system that exists virtually on your local machine. It comes with virtual hardware devices and performs as if it is a physical machine. This virtual computer system functions on your current operating system in a separate window, and in the case of Vagrant, through your command line.  

### Vagrant: Everything You Need To Know!
Vagrant is a command line tool that interfaces with [VirtualBox](https://www.virtualbox.org/) to make configuring and creating virtual machines simple.

### Why do we have to use it?
We use Vagrant for its simplicity and ease of use. It's an industry standard and helps get you used to working in the command line!

### Commands Overview
Here are the basic commands you need to know to use Vagrant:

- vagrant init: Creates a new Vagrantfile in current directory
- vagrant up: Starts a VM
- vagrant ssh: Connects to a VM via SSH
- vagrant halt: Stop the VM
- vagrant destroy: Stop & delete the VM (will delete all files related to it)
- vagrant status: Show the status of the VM

Type ```vagrant help``` in your terminal to learn even more!

### FAQ
Although we love Vagrant for it's ease of use, problems can still pop up. Here are some common ones and their solutions:

- "I ran ```vagrant up && vagrant ssh``` from my project directory, but now I can't see any files when I type ls! What's happening?"  
You did everything correctly, you're just not in the folder you expected to be in inside the VM! Simply ```cd /vagrant``` to see your project files. Remember, you can also use ```pwd``` to check that you're in the right place at any time!
- "Why does nothing happen / why do I get an error message when I run ```vagrant ssh```?"  
Check to make sure you're in the right directory! ```cd``` to the folder that contains the Vagrantfile you're using. Also, make sure your box is up and running with a quick ```vagrant status```!
- "I'm on Windows, and Vagrant seems to hang when I run any command. What's going on?"
This issue is usually related to permissions; perhaps you started VirtualBox as an admin and tried to use Vagrant as a normal user, or vice versa. The solution is easy: shut down all VMs, close VirtualBox, and open it again as the user you want to use Vagrant as. [This article](http://windows.microsoft.com/en-us/windows7/how-do-i-run-an-application-once-with-a-full-administrator-access-token) regarding running applications as an admin could also be helpful.
"DNS isn't working! Help me!"
- A proxy might need to be enabled to fix DNS issues. See this [this great thread](https://serverfault.com/questions/453185/vagrant-virtualbox-dns-10-0-2-3-not-working) for help!
Here are some additional resources for those who want to learn more:

- [Vagrant Tutorial](http://blog.osteel.me/posts/2015/01/25/how-to-use-vagrant-for-local-web-development.html)
- [Vagrant: Features & Functionality Webcast](https://plus.google.com/events/ca6ndfsdj4timcjplsfcqlh1vmc?authkey=CLCDip6m-KmeBQ)
- [Official Vagrant Documentation](https://www.vagrantup.com/docs/)
- [Setting up Vagrant for Intro to Relational DBs](https://www.udacity.com/wiki/ud197/install-vagrant?_ga=1.43081825.53639439.1458784522)

Now that you know more about Virtual Machines, lets dive into Relational Databases!
These tips and tricks were borrowed from our forum post [Vagrant Everything You Need to Know](https://discussions.udacity.com/t/vagrant-everything-you-need-to-know/45642?_ga=1.43081825.53639439.1458784522).