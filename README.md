NASApp has three main features (and three main routes in the frontend):

1- /home - render the Home component
NASA’s Astronomy Picture of the Day (APOD)

2- /search - render the Search component
NASA Image and Video Library Search(APOD)

3- /favourites - render the Favourites component
The user’s favourite images (from the DB)(APOD)

the NavBarLinks to let the user navigate through the app using the Link component of react-router-dom.
Note that NASA’s Astronomy picture of the day (APOD) can actually also be a video . with checking whether the url is of an image or a video, and render it accordingly.
