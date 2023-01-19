// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
-

// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = [
  "https://i.ytimg.com/vi/IAcBzNGk--8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_aXMmDRBCT3hHCGAdigRjYPrT8g",
  "https://i.ytimg.com/an_webp/iVnDQpKH10A/mqdefault_6s.webp?du=3000&sqp=CICN3Z0G&rs=AOn4CLASeGIp4NrnBSgVLabME_JWaixThA",
  "https://i.ytimg.com/vi/hSDKdZENL5U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqncVVRdq-bplzcum9dW89YUL3nA",
  "https://i.ytimg.com/an_webp/6e6Hj7MwWaI/mqdefault_6s.webp?du=3000&sqp=CNiv3Z0G&rs=AOn4CLBfkeci4T1FR4IbKb3VRT_I19kv6A"
]
let songNames = [
  "Not You Too",
  "Third World",
  "LIMB",
  "Besitos",
  "Vanished"
]
let artist = [
  "Drake ft. Chris Brown",
  "Bashfortheworld"
  "Planet Giza",
  "Pierce The Veil",
  "Crystal Castles"
]
let songLinks = [
  "https://www.youtube.com/watch?v=ZX_mvoY_Hg0",
  "https://www.youtube.com/watch?v=IAcBzNGk--8",
  "https://www.youtube.com/watch?v=iVnDQpKH10A",
  "https://www.youtube.com/watch?v=hSDKdZENL5U",
  "https://www.youtube.com/watch?v=6e6Hj7MwWaI"
]

//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imageinput = document.
  
let input = document.getElementById("userInput").value;
  alert(input)

// task 10: use `.push()` to add each input value to the correct array.

}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.


}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
