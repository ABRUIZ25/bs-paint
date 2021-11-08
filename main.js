// the gird for where you paint
const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// evething thiat i will be targeting
const canvasColor = document.querySelector('.current-brush')
const canvas = document.querySelector('.canvas')
const square = document.querySelector('.square')
const palette = document.querySelector('.palette')
const brush = document.querySelector('.current-brush.color-2')
const curnentColor = document.querySelector('.icon palette-icon')
const colorOne = document.querySelector('.palette-color color-1')//red
const colorTwo = document.querySelector('.palette-color color-2')//black
const colorThree = document.querySelector('.palette-color color-3')//blue
const colorFour = document.querySelector('.palette-color color-4')//yellow
const colorFive = document.querySelector('.palette-color color-5')//green


// this section is for changing the color 

function chagingActiveColor (event){
  let PalletColor = event.target

  let oldColor = brush.classList[1]

  let NewColor = PalletColor.classList[1]

  brush.classList.replace(oldColor, NewColor)

}
palette.addEventListener('click',chagingActiveColor)


// this is to chage the color of the bruush selector  AKA update the color brush

function LetsPaint (event){
  let square = event.target


  
  let oldCavisColor = square.classList[1]

  

  let newCavisColor = canvasColor.classList[1]



  square.classList.replace(oldCavisColor, newCavisColor)

  

}
canvas.addEventListener('click',LetsPaint)
// this will be chaging the grid color on clicks acording to the brush selector



































/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
