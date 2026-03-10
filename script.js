function searchServices() {
  const query = document.getElementById("searchBar").value;
  if(query) {
    alert("Searching for: " + query);
    // Later: connect this to your services.html page or database
  } else {
    alert("Please enter a search term!");
  }
}
