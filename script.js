// Simple search bar functionality (filters on the homepage)
document.getElementById("search-bar").addEventListener("input", function(e) {
    let searchQuery = e.target.value.toLowerCase();
    let noteItems = document.querySelectorAll(".note-item");
    noteItems.forEach(item => {
        let title = item.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
