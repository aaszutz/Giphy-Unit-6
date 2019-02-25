
//initial array of characters
var characters = ["Penny", "Sheldon Cooper", "Stuart Bloom", "Beverly Hofstadter"];
            
// displayCharacterInfo function re-renders the HTML to display the appropriate content
function displayCharacterInfo() {

  var character = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  person + "&api_key=dc6zaTOxFJmzC&limit=10";
  
  // Creates AJAX call for the specific character button being clicked
  $.ajax({
    url: queryURL,
    method: "GET", 
    data: {
      t: character, 
      apikey: "trilogy",
      plot: "short",

    }
  }).then(function(response) {



  console.log(this);

  });



}

// Function for displaying movie data
function renderButtons() {

  // Deletes the characters prior to adding new characters
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();
  // Loops through the array of characters
  for (var i = 0; i < characters.length; i++) {

    // Then dynamicaly generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("character");
    // Added a data-attribute
    a.attr("data-name", characters[i]);
    // Provided the initial button text
    a.text(characters[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where the add character button is clicked
$("#add-character").on("click", function(event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var character = $("#character-input").val().trim();

  // The character from the textbox is then added to our array
  characters.push(character);

  // Calling renderButtons which handles the processing of our character array
  renderButtons();
});

// Adding click event listeners to all elements with a class of "character"
$(document).on("click", ".character", displayCharacterInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();



