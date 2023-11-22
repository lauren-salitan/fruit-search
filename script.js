const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(letters) {
  const results = [];
  const searchQuery = letters.toLowerCase(); // Convert the user input to lowercase for case-insensitive comparison
  for (let fruitItem of fruit) {
    // Iterate through each fruit in the fruit array
    const lowerCaseFruit = fruitItem.toLowerCase(); // Convert each fruit name to lowercase
    if (lowerCaseFruit.includes(searchQuery)) {
      // Check if the fruit name includes the user's search query
      results.push(fruitItem); // If it does, add it to the results array
    }
  }
  return results;
}

function searchHandler(e) {
  const inputValue = e.target.value; // Get the current value of the input field
  const results = search(inputValue); // Call the search function and pass the inputValue  // This function will handle the logic to filter the fruits array
  showSuggestions(results, inputValue); // Now show these results as suggestions
}

function highlightSuggestion(e) {
    e.target.style.backgroundColor = '#929292';
}

function unhighlightSuggestion(e) {
    e.target.style.backgroundColor = ''; // Reset background color
}
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = ''; // Clear previous suggestions
  if (results.length > 0 && inputVal.trim() !== '') { // Check if there are results and input is not empty
    for (let fruitItem of results) { // Create a list item for each result
      const li = document.createElement('li');
      li.textContent = fruitItem;
	  li.addEventListener('mouseover', highlightSuggestion);
	  li.addEventListener('mouseout', unhighlightSuggestion);
	  li.addEventListener('click', useSuggestion); // Attach click event listener to each list item
      suggestions.appendChild(li);
    }
  }
}

function useSuggestion(e) {
    input.value = e.target.textContent; // Set the input value to the text of the clicked list item
    suggestions.innerHTML = ''; // Optionally clear the suggestions after selection
}


input.addEventListener('keyup', searchHandler);