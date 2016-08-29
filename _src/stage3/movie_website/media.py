# This is class provides a way to store movie related information
class Movie():
    def __init__(self, movie_title, poster_image, 
    	         trailer_youtube, release_date):
        self.title = movie_title
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube
        self.release_date = release_date
