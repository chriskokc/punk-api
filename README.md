# Punk API

## Description

https://chriskokc.github.io/punk-api/

This project is built in React and data was fetched from Punk API: https://punkapi.com/

## Design and Layout

- Viewport

  <em>Mobile</em>

  <img width="250" alt="viewport-mobile" src="https://user-images.githubusercontent.com/87203804/182176412-606d1924-99b5-4cb9-9ec9-06ba455059b6.png">

  <em>Tablet</em>

  <img width="400" alt="viewport-tablet" src="https://user-images.githubusercontent.com/87203804/182176719-ecb35372-c128-4b3f-94c4-b49937920da1.png">


  <em>Desktop</em>
  
  <img width="650" alt="viewport-desktop" src="https://user-images.githubusercontent.com/87203804/182176971-9d0ec500-340e-483d-a817-601b3cb2af81.png">

 
- Structure:

  This project is separated into two parts:

  1. Components
  2. Container

- Components Tree is as follows:
<img width="365" alt="component tree" src="https://user-images.githubusercontent.com/87203804/182174272-d2ddb152-20bb-4e72-843e-ae9a36361977.png">



- Functionalities
  - This Punk API project can achieve search and filter functions. Users can find the bees by simply putting search queries or use the checkbox to find the categories of beers they want. They were achieved by using React Hook so that re-renders happen when the prop or state of a componet was changed.
  
  - Using the search bar to search for IPAs:
  
    <img width="438" alt="searchBeers" src="https://user-images.githubusercontent.com/87203804/182178686-69a017ff-c73f-4e4b-bf65-142e5d0582fc.png">

  
  - Filtering beers and getting classic beers:
  - 
    <img width="446" alt="filterBeers" src="https://user-images.githubusercontent.com/87203804/182178732-b71a33b1-4e60-489c-9eab-09bf600f231c.png">



- React Testing Library
  - A few unit tests have been added to test whether the components are rendenered as expected.


- Future Improvement
  - Adding more features like a slidebar to let users choose the amount of beers to show.
  - Adding more test cases for search and filter functionalities.
