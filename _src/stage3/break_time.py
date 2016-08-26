import time
import webbrowser
import random

total_breaks = 3
break_count = 0

web_list = ["http://www.google.com", "http://twitter.com", 
"http://www.youtube.com/watch?v=dQw4w9WgXcQ"]


print("This program started on "+time.ctime())
while(break_count < total_breaks):
    time.sleep(5)
    web = random.choice(web_list)
    webbrowser.open(web)
    break_count = break_count + 1