const submitButton = document.querySelector(".submit");
submitButton.onclick = handleDecision;

function handleDecision(event) {
  event.preventDefault();

  const inputBox = document.querySelector(".user-input");
  const userInput = inputBox.value;
  // let indexNumber = Number(userInput.value);
  let indexPageNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let indexPageNames = [
    "userman",
    "index-1",
    "index-2",
    "index-3",
    "index-4",
    "index-5",
    "index-6",
    "index-7",
    "index-8",
    "index-9",
    "index-10",
    "index-11",
    "index-12",
    "index-13",
    "index-14",
    "index-15"
  ];

  for (let i = 0; i < indexPageNumbers.length + 1; i++) {
    if (i === Number(userInput)) {
      window.location = "./index-" + i + ".html";
    } else if (userInput.toLowerCase() === indexPageNames[i]) {
      window.location = "./" + indexPageNames[i] + ".html";
    }
  }

  for (i = 0; i < indexPageNumbers; i++) {
    if (userInput.toLowerCase() !== indexPageNames[i]) {
      alert(
        "Refer to userman by entering userman to access userman for help explainations in user man with examples.."
      );
      return false;
    }
  }
}
