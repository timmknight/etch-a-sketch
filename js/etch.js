$(document).ready(function (){
  var num = 10
    createGrid(10);
    changeSquareColor();
});

// This function creates the grid and the squares
function createGrid(num, colour){
  $('.wrapper > div').remove();
  for(var i = 0; i < num * num; i++){
  $newdiv = $('<div class="square" />');
  $squareSize = 480 / num
  $('.wrapper').append($newdiv);
  $('.square').css("width", $squareSize);
  $('.square').css("height", $squareSize);
  $('.square').css("background-color", "#CFCFCF");
  }
};

// This functions changes the colour of a square when you move the mouse over it
function changeSquareColor(){
  $('.square').hover(function () {
    $(this).css("background-color", "#0F0F0F")
  });
};

//This function clears the grid and then generates a new grid asking for the user to input its size
function clearGrid(){
  $('.wrapper > div').remove();
  var num = 10
  userGridSize(num);
  changeSquareColor();
};

//This function takes the user input, verifies its a number and then generates a grid of that size
function userGridSize(num){
  var num = prompt("Please enter a number between 1 and 20")
  while (num < 1 || num > 20 || isNaN(num)){
    alert("That's not a number between 1 and 20")
    var num = prompt("Please enter a number between 1 and 20")
  }
  createGrid(num);
  changeSquareColor();
};

//This function changes the square color and then fades back to its original colour
function trail(){
  clearGrid()
  $('.square').css("background-color", "#CFCFCF")
  $('.square').hover(function () {
    $(this).css("background-color", "#CFCFCF")
    $(this).fadeToggle("slow")
  });
}

// This function uses a random colour to colour each square when the changeSquareColor function is called on it
function randomColor(){
  $('.wrapper > div').remove();
  var num = 10
  userGridSize(num);
  $('.square').css("background-color", "#CFCFCF");
  $('.square').hover(function () {
    $(this).addClass("color");
    randomColorMode();
  });
};

//This generates a new gird based on user size and then increases the opacity of the square when the mouse
//moves over it until it is black
function opacityIncrease(){
  $('.wrapper > div').remove();
  var num = 10
  userGridSize(num);
  opa = 0.1
  $('.square').css("opacity", opa);
  $('.square').css("background-color", "black");
  $('.square').mouseenter(function(){
    opaval = $(this).css("opacity");
    if (opaval < 1){
      $(this).css("opacity", opaval*1.3);
    }
  });
}

//This generates a random rgb value colour
function randomColorMode(){
  $('.square').hover(function(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var opa = Math.random();
    $(this).css("background-color", "rgb(" + r +"," + g + "," + b +")");
    $(this).css("opacity", opa+.2);
  });
}
