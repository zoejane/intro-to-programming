# Work Session 5
## Practice: Apply What You Learned
Next, you will attempt 3 problems dealing with lists.

- Exploring List Properties: You'll explore the difference between concatenating two lists with the ```+``` operator and appending with ```.append()```. You'll also be introduced to a new operator ```+=```.
- Product List: You'll write code that multiplies all the numbers in a list together.
- Greatest: You'll write code that takes a list of numbers and returns the greatest number.

## While Loop 1
### Breaking Down the Problem
We first need to understand what are the inputs and what are the outputs (or results) that we want to obtain.  

The inputs are:

- An empty list
- A variable that has the value 20, telling us that we want to create a list of length 20

The output is:

- A list of random integers between 0 and 10 that could look like:
[7, 5, 1, 6, 4, 1, 0, 6, 6, 8, 1, 1, 2, 7, 5, 10, 7, 8, 1, 3]

### What To Do
Therefore we want to generate a list of random integers given an empty list. One way is to use the append() method for lists and add in a random integer, 20 times.  

That's how a person would do it manually on pen and paper anyway. Let's see if we can write an outline of what to do if we were to do this manually on pen and paper:  

- Generate a random integer between 0 and 10
- Add this random integer to our list
- Do we have a list of length 20 yet?
- If not, we loop back up and go through steps 1 to 3 again while length of the list is less than 20

If we translate these steps into real code, we can use a while loop that checks whether the length of the list is less than 20.

### Answer Code
```
import random

random_list = []
list_length = 20

while len(random_list) < list_length:
   random_list.append(random.randint(0,10))
```

Here's alternative code that simplifies the logic a bit if the above code is complicated to understand. 

```
import random

random_list = []
list_length = 20
count = 0

while count < list_length:
   random_list.append(random.randint(0,10))
   count += 1
```
## While Loop 2

### Breaking Down the Problem
We first need to understand what are the inputs and what are the outputs (or results) that we want to obtain.  

The inputs are:

- A list of 20 randomly generated integers

The output is:

- A number representing the count of the number of times the number 9 is in the list

### What To Do
Therefore we want to loop through the list and count how many times the number 9 appears. If the current element is the number 9, we can increase the count by 1 and move on to the next element in the list.  

Let's see if we can write an outline of what to do if we were to do this manually on pen and paper:  

Loop through each element in the list
- If the element is 9, we increase our count by 1
- Are we at the end of the list yet?
- If not, we loop back up and go through steps 1 to 3 again while we are still going through the list

### Translation
Let's step through these steps and translate these steps into computer code.

#### 1. Loop through each element in the list
It seems like we first need to set up the loop structure to loop through each element in the list. In order to do this, we should setup some variables to hold the current index of the list and the current count:

```
index = 0
count = 0
```

We can now set up our loop structure:  
```
while index < len(random_list):
  # Put other code here
  index = index + 1
```

Please keep in mind how we are already adding index = index + 1 to the loop. This code is crucial to guarantee that the computer not step into an infinite loop. For most loops, we want to always clearly define a stopping point. In this case, the stopping point is when the number index is greater than the length of our list.  

#### 2. If the element is 9, we increase our count by 1
This is a classic example of an if statement. We can access the current element in the list by using random_list[index] and then use an if statement to check whether the element is 9. We can then increment the count by 1 if the element equals 9.

```
if random_list[index] == 9:
  count = count + 1
```

#### 3 - 4: Let's loop back up to our steps if we have not reached the end of the list yet.
Our loop construct already takes care of this criteria because at the top of our loop, we are always checking whether our index number is still less than the length of the random list: index < len(random_list)  

We use the logic: if the index number is less than the length of our list, then we can safely say that whenever we access the list with index, we will never create an error and will be able access elements in the list with the number index.

### Answer Code
```
index = 0
count = 0

while index < len(random_list):
  if random_list[index] == 9:
    count = count + 1
  index = index + 1
```

### Full Answer Code
```
import random

random_list = []
list_length = 20

while len(random_list) < list_length:
   random_list.append(random.randint(0,10))

index = 0
count = 0

while index < len(random_list):
  if random_list[index] == 9:
    count = count + 1
  index = index + 1
```

## While Loop 3
Breaking Down the Problem
Let's first identify what are the inputs and what are the outputs (or results) that we want to obtain.  

The inputs are:

- A list of 20 randomly generated integers

The output is:  

- A list of integers where each number (let's call it "n") represents the count of an integer that occurs n number of times in the list of randomly generated integers.
- For example, if the number 4 is in the randomly generated list 5 times, then we will have another list that contains the number 5 at index 4 of this list. If the number 6 is in the randomly generated list 2 times, then our output list will have the number 2 at index 6 of this list. The output list so far would look like this: [0,0,0,0,5,0,2,0,0,0,0]

### What To Do
Let's see if we can write an outline of what to do if we were to do this manually on pen and paper:

- Loop through each element in the randomly generated list
- Get the current number in our list
- We now need to increment our count for this number by one
- Let's get the current count of this number by checking our output list and then increment that count by one
- Are we at the end of the loop?
- If not, we loop back up and go through steps 1 to 5 again while we are still going through the list

### Translation
Let's step through these steps and translate these steps into computer code.  

#### 1. Loop through each element in the list
It seems like we first need to set up the loop structure to loop through each element in the list. In order to do this, we should setup some variables to hold the current index of the list and create the initial count_list:

```
count_list = [0]*11
index = 0
```

We can now set up our loop structure:

```
while index < len(random_list):
  # Put other code here
  index = index + 1
```

Please keep in mind how we are already adding ```index = index + 1``` to the loop. This code is crucial to guarantee that the computer not step into an infinite loop. For most loops, we want to always clearly define a stopping point. In this case, the stopping point is when the number index is greater than the length of our list.  

#### 2. Get current number in our list
We get the number by accessing the list with the current index:

```
number = random_list[index]
```

#### 3-4: We now need to increment our count for this number by one.
Since the index of count_list will serve as our lookup, we can increment the count of our current number like this:

```
count_list[number] = count_list[number] + 1
```

### 5: Are we at the end of loop? If not, we loop back up and go through the while loop instructions all over again.
Our loop construct already takes care of this criteria because at the top of our loop, we are always checking whether our index number is still less than the length of the random list: ```index < len(random_list)```  

We use the logic: if the index number is less than the length of our list, then we can safely say that whenever we access the list with index, we will never create an error and will be able access elements in the list with the number index.

### Answer Code
```
count_list = [0]*11
count = 0

while index < len(random_list):
  number = random_list[index]
  count_list[number] = count_list[number] + 1
  index = index + 1
```

### Full Answer Code
```
import random

random_list = []
list_length = 20

while len(random_list) < list_length:
  random_list.append(random.randint(0,10))

count_list = [0] * 11
index = 0
count = 0

while index < len(random_list):
  number = random_list[index]
  count_list[number] = count_list[number] + 1
  index = index + 1
```

## While Loop 4
### Breaking Down the Problem
Let's first identify what are the inputs and what are the outputs (or results) that we want to obtain.  

The inputs are:  

- A list of integers that represent the distribution of all numbers that occurred in a randomly generated list

The output is:  

- A nicely formatted table that shows the number and its corresponding count like this:

  number | occurrence
       0 | 1
       1 | 2
       2 | 3
       3 | 2
       4 | 2
       5 | 1
       6 | 1
       7 | 2
       8 | 3
       9 | 1
      10 | 2

### What To Do
We first need to understand that we still need to loop through all of the elements in count_list and simply print out the index and the value of the count_list in a specific format.  

Let's see if we can write an outline of what to do if we were to do this manually on pen and paper:  

- Print the header "number | occurrence"
- Loop through each element in the randomly generated list
- Print the number of necessary spaces to get the right alignment we want
- Get the current index and its associated value in our list
- Print index and value in this format: "index | value"
- Are we at the end of the loop?
- If not, we loop back up and go through steps 1 to 5 again while we are still going through the list

### Translation
Let's step through these steps and translate these steps into computer code.

#### 1. Print the header "number | occurrence"
This is straight forward:

 ```print "number | occurrence"```

#### 2. Loop through each element in the randomly generated list. We therefore setup our loop structure.
```
index = 0

while index < len(random_list):
  # Put other code here
  index = index + 1
```

Please keep in mind how we are already adding index = index + 1 to the loop. This code is crucial to guarantee that the computer not step into an infinite loop. For most loops, we want to always clearly define a stopping point. In this case, the stopping point is when the number index is greater than the length of our list.

### 3. Print the number of necessary spaces to get the right alignment we want.
To do this dynamically we need to realize that we can calculate the number of white spaces needed to print before we print our index. If we want to print the string "0", we need to realize that we need to print 5 spaces before we print "0" in order to line up with the letter r in "number" in the header.  

What happens if we decide to print the string "10?" We need to print 4 spaces because the characters "10" takes up 2 spaces. Regardless of the number, the total amount of spaces and characters should add up to 6, the length of the string "number".  

Therefore in every loop, we dynamically calculate the number of spaces we need to print out depending on the length of the characters for each index:  

```
num_spaces = len("number") - len(str(index))
```

Since len("number") never changes for each loop iteration, let's calculate and store the length of the string "number" outside the loop:

```
num_len = len("number")
while index < len(count_list):
  num_spaces = num_len - len(str(index))
```
### 4-5. Get the current index and its associated value in our list and print it out in the format we want. We convert our integers into string and use the "+" operator to concatenate our strings.
```
print " " * num_spaces + str(index) + " | " + str(count_list[index])
```

### 5: Are we at the end of loop? If not, we loop back up and go through the while loop instructions all over again.
Our loop construct already takes care of this criteria because at the top of our loop, we are always checking whether our index number is still less than the length of the random list: index < len(random_list)

We use the logic: if the index number is less than the length of our list, then we can safely say that whenever we access the list with index, we will never create an error and will be able access elements in the list with the number index.

### Answer Code
```
print "number | occurrence"
index = 0
num_len = len("number")

while index < len(count_list):
  num_spaces = num_len - len(str(index))
  print " " * num_spaces + str(index) + " | " + str(count_list[index])
  index = index + 1
```

### Full Answer Code
```
import random

random_list = []
list_length = 20

while len(random_list) < list_length:
    random_list.append(random.randint(0,10))

count_list = [0] * 11
index = 0

while index < len(random_list):
    number = random_list[index]
    count_list[number] = count_list[number] + 1
    index = index + 1

print "number | occurrence"
index = 0
num_len = len("number")

while index < len(count_list):
  num_spaces = num_len - len(str(index))
  print " " * num_spaces + str(index) + " | " + str(count_list[index])
  index = index + 1
```