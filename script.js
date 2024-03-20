let dictionary = {
  Auto: "Car",
  Haus: "House",
  Stuhl: "Chair",
  Tisch: "Table",
  Buch: "Book",
  Fenster: "Window",
  Hund: "Dog",
  Katze: "Cat",
};

function addVocabulary() {
  let deutschText = document.getElementById("deutschText");
  let englischText = document.getElementById("englischText");

  if (deutschText.value && englischText.value) {
    dictionary[deutschText.value] = englischText.value;

    deutschText.value = "";
    englischText.value = "";
  }
}
