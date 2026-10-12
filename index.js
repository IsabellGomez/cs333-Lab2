
const buttons = document.querySelectorAll(".drum");

// Add a click listener to each drum button.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {

    // Find the letter on the button that was clicked.
    const buttonLetter = event.target.innerHTML;

    console.log("Button clicked:", buttonLetter);

    // Play the sound that matches this button's letter.
    playSound(buttonLetter);
    buttonAnimation(buttonLetter);
  });
}


function playSound(key) {
  let soundFile = "";

  switch (key) {
    case "w":
      soundFile = "sounds/crash.mp3";
      break;
    case "a":
      soundFile = "sounds/kick-bass.mp3";
      break;
    case "s":
      soundFile = "sounds/snare.mp3";
      break;
    case "d":
      soundFile = "sounds/tom-1.mp3";
      break;
    case "j":
      soundFile = "sounds/tom-2.mp3";
      break;
    case "k":
      soundFile = "sounds/tom-3.mp3";
      break;
    case "l":
      soundFile = "sounds/tom-4.mp3";
      break;
    default:
      console.log("No sound assigned to:", key);
      return;
  }

  const sound = new Audio(soundFile);
  sound.play();

  console.log("Playing sound:", soundFile);
}

// This must be outside the playSound function.
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();

  console.log("Key pressed:", key);

  playSound(key);
  buttonAnimation(key);
});


function buttonAnimation(currentKey) {

  // Find the button whose class matches the key.
  const activeButton = document.querySelector("." + currentKey);

  // Ignore keys that don't correspond to a drum button.
  if (!activeButton) {
    return;
  }

  // Add the pressed class to show a visual effect.
  activeButton.classList.add("pressed");

  // Remove the effect after 100 milliseconds.
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}


  // Create the audio object and play it.
  const sound = new Audio(soundFile);
  sound.play();

  console.log("Playing sound:", soundFile);
