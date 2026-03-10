// Homepage search (redirect to services page with query)
function searchServices() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  if(query) {
    window.location.href = "services.html?search=" + encodeURIComponent(query);
  } else {
    alert("Please enter a search term!");
  }
}

// Services page search filter
window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("search");

  if(query) {
    document.getElementById("serviceSearch").value = query;
    filterServices(query);
  }

  document.getElementById("serviceSearch").addEventListener("keyup", function() {
    filterServices(this.value);
  });
};

function filterServices(query) {
  const items = document.querySelectorAll("#serviceList li");
  items.forEach(item => {
    if(item.textContent.toLowerCase().includes(query.toLowerCase())) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
}
