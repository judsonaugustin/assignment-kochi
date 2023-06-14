$(document).ready(function () {
  generateTable();
});

function generateTable() {
  let table = $("<table>");

  for (let i = 0; i < 20; i++) {
    let row = $("<tr>");

    for (let j = 0; j < 20; j++) {
      let word1 = generateRandomWord();
      let word2 = generateRandomWord();
      let cell = $("<td>").text(word1 + " " + word2);
      row.append(cell);
    }

    table.append(row);
  }

  $("#table-container").append(table);
}

function generateRandomWord() {
  let length = Math.floor(Math.random() * (8 - 3 + 1) + 3);
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let word = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    word += characters.charAt(randomIndex);
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Array of headings in English
const headings = [
  "Introduction",
  "Main Content",
  "Conclusion",
  "Additional Information",
  "Summary",
];

// Array of Malayalam words
const malayalamWords = [
  "ഷാരോമില കുമ്പാമ്പിലി പോക്ക ലമ്പുരം സുമസി ജംബൂസ ഹെയ്‌യാം തുംനേ വകിഡ്. ബാസയ കുന്ദതിയ സുമാളി കലത്രിപാൻ മെറുകെയിൽ ഉൾട്ടോസം ",
  "ഗൾസമ്പ് സെച്ചിന്തയാ ത്രികബ ലോലു ഉർണചം ഹൂചിമൻ തരുമുരു ഗോവൽ പഴിത്തേടി. ശയചിവി കിങ്ങി ഫാവു ശ്ലേഷിപ്പു മിസ്ത തുരേമ കണസ ",
  "താളാവ് ചിച്ചുമ്മാ. നങ്ങു കളത്തിപ്പോ മിന ഗൂടിതോമ വെളക്കിലി അക്രോണിപക ഹൈശി സഹഫർണോ തുണ്ടിത്തേ. വൊളിയാ ഹുംബ്രനാ ഏഹിമാ ",
  "ദുഷ്മേളിത പ്യാരി വസ്തി കിങ്ങി ശോമാ വിരാദ കുമ്മകാങ്കോടി തിണതാനം.",
];

// Function to generate a random paragraph
function generateParagraph() {
  const paragraphLength = getRandomNumber(5, 10);
  let paragraph = "";

  for (let i = 0; i < paragraphLength; i++) {
    const randomIndex = getRandomNumber(0, malayalamWords.length - 1);
    const word = malayalamWords[randomIndex];
    paragraph += word + " ";
  }

  return paragraph;
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random paragraphs with headings
const numParagraphs = getRandomNumber(5, 10);
const contentElement = document.getElementById("content");

for (let i = 0; i < numParagraphs; i++) {
  const headingIndex = getRandomNumber(0, headings.length - 1);
  const heading = headings[headingIndex];
  const paragraph = generateParagraph();

  const headingElement = document.createElement("h2");
  headingElement.textContent = heading;
  contentElement.appendChild(headingElement);

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = paragraph;
  contentElement.appendChild(paragraphElement);
}

// jQuery functions for hiding/moving sections
$(document).ready(function () {
  $("header nav ul li a").click(function (event) {
    var sectionId = $(this).attr("href");
    $(sectionId).toggle();
    event.preventDefault();
  });
});

function moveSection(sectionId, position) {
  var section = $(sectionId);
  var sectionsContainer = $("#sections-container");

  if (position === "top") {
    sectionsContainer.prepend(section);
  } else if (position === "bottom") {
    sectionsContainer.append(section);
  }
}
