
# IMPORTANT

As I could not obtain a production key from Giphy, this app is working with a development key. That means you could find issues (for example, sharing a gif through Facebook or certain media). What I tested works fine, but just keep it in mind and, of course, if you find something I could fix, please send me an email to: <a href="mailto:franprietogutweb@gmail.com" target="_blank">franprietogutweb@gmail.com</a>


## Style Guide

Navbar component - border bottom:
-     background-color: #FFC107;

Gif Cards component - hover for social media icons

-     background-color: #FFC107;



## Notes for developers

### Note 1

we need to do some logic, similar to the one in the insertValueHistoric() method within the gifs.service.ts

That is, because we need to get info on local storage if there is such,
and it is stored on an order which makes most recent search is the first.

As the next time we invoke the insertValueHistoric (when we make a new search), we would make some reverse logic to make that last search appear the first one, we must prepare the data to keep on having the correct orde. Otherwise would bewrongly reversed inside insertValueHistoric method(). See more details inside the app components.ts method

### Note 2

We will not only insert the value, but will make all the logic to show it on the html, also insert it on the local storage We want to show the newest search items on the first place, so we will have to reverse the array which contain the historic(_historic)

We don´t want to modify the original array, it would give lots of problems when reversing several times and such, I think it is better always having a reference to the original array with no modifications

