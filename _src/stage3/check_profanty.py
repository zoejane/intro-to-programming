def read_text():
	quotes = open("/Users/Zoe/GitHub/intro-to-programming/_src/stage3/movie_quotes.txt")
	contents_of_file = quotes.read()
	print(contents_of_file)
	quotes.close()
read_text()