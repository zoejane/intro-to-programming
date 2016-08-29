import media

toy_story = media.Movie("Toy Story", 
						"A story of a boy and his toys that come to life", 
						"http://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg", 
						"https://www.youtube.com/watch?v=vwyZH85NQC4")

print(toy_story.storyline)
toy_story.show_trailer()

avatar = media.Movie("Avatar",
					"a marine on an alien planet", 
					"http://upload.wikimedia.org/wikipedia/id/b/b0/Avatar-Teaser-Poster.jpg", 
					"http://www.youtube.com/watch?v=9ceBgWV8io")

print(avatar.storyline)