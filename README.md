## Notes for developers

### Note 1

we need to do some logic, similar to the one in the insertValueHistoric() method within the gifs.service.ts

That is, because we need to get info on local storage if there is such,
and it is stored on an order which makes most recent search is the first.

As the next time we invoke the insertValueHistoric (when we make a new search), we would make some reverse logic to make that last search appear the first one, we must prepare the data to keep on having the correct orde. Otherwise would bewrongly reversed inside insertValueHistoric method(). See more details inside the app components.ts method