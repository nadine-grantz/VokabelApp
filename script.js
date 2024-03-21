const dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

function addVocabulary() {
  const deutschText = document.getElementById("deutschText");
  const englischText = document.getElementById("englischText");

  if (deutschText.value && englischText.value) {
    dictionary[deutschText.value] = englischText.value;
    console.log("das ist der wert:", deutschText.value);
    deutschText.value = "";
    englischText.value = "";
  }
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
  console.log(dictionary);
}
