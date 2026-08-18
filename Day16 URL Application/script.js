const bookmarkForm = document.getElementById("bookmarkForm");
const siteName = document.getElementById("siteName");
const siteUrl = document.getElementById("siteUrl");
const bookmarkList = document.getElementById("bookmarkList");

// Load bookmarks when page opens
document.addEventListener("DOMContentLoaded", displayBookmarks);

// Add bookmark
bookmarkForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = siteName.value.trim();
    let url = siteUrl.value.trim();

    // Validation
    if (name === "" || url === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Add https:// if missing
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
    }

    const bookmark = {
        name: name,
        url: url
    };

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.push(bookmark);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    bookmarkForm.reset();

    displayBookmarks();
});

// Display bookmarks
function displayBookmarks() {

    bookmarkList.innerHTML = "";

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.forEach((bookmark, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <a href="${bookmark.url}" target="_blank">
                ${bookmark.name}
            </a>
            <br><br>
            <button onclick="deleteBookmark(${index})">
                <i class="fa-solid fa-trash"></i> Delete
            </button>
        `;

        bookmarkList.appendChild(li);
    });
}

// Delete bookmark
function deleteBookmark(index) {

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    bookmarks.splice(index, 1);

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

    displayBookmarks();
}