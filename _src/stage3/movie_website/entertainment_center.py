import media
import fresh_tomatoes

# Create instances of movie.
my_own_private_idaho = media.Movie("My Own Private Idaho", 
                                   "http://movieposters.2038.net/p/My-Own-Private-Idaho.jpg", 
                                   "http://www.youtube.com/watch?v=QQbq2kl-P-4",
                                   "1991")

the_edukators = media.Movie("The Edukators",
                            "http://germanics.washington.edu/sites/germanics/files/images/die_fetten_jahre_sind_vorbei.jpg",
                            "https://www.youtube.com/watch?v=MB1UMfC8koc",
                            "2004")

garden_state = media.Movie("Garden State",
                           "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Garden_State_Poster.jpg/220px-Garden_State_Poster.jpg",
                           "https://www.youtube.com/watch?v=u82n0e1mgmQ",
                           "2004")

little_miss_sunshine = media.Movie("Little Miss Sunshine",
                                   "http://nomorechildhood.files.wordpress.com/2011/03/little_miss_sunshine_ver5.jpg",
                                   "https://www.youtube.com/watch?v=wvwVkllXT80",
                                   "2006")

good_will_hunting = media.Movie("Good Will Hunting",
                                "http://ia.media-imdb.com/images/M/MV5BMTk0NjY0Mzg5MF5BMl5BanBnXkFtZTcwNzM1OTM2MQ@@._V1_SY317_CR1,0,214,317_AL_.jpg",
                                "https://www.youtube.com/watch?v=QSMvyuEeIyw",
                                "1997")

life_is_beautiful = media.Movie("Life is Beautiful",
                                "http://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Vitaebella.jpg/220px-Vitaebella.jpg",
                                "https://www.youtube.com/watch?v=zqAVwCK4r2Q",
                                "1997")

# Create a list of movie objects.
movies = [my_own_private_idaho, life_is_beautiful, little_miss_sunshine, the_edukators, garden_state,
           good_will_hunting]

# fresh_tomatoes.py which contains the open_movies_page() function 
# that will take in your list of movies 
# and generate an HTML file including this content, 
# producing a website to showcase your favorite movies.
fresh_tomatoes.open_movies_page(movies)
