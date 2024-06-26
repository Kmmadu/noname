document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("authModal");
    const sellButton = document.querySelector(".sell-button"); // Updated to select anchor tag

    // Open the modal when the Sell button is clicked
    sellButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector(".close");
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
// Get the header element
var header = document.getElementById("myHeader");

// Get the offset position of the header
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Execute myFunction when the user scrolls the page
window.onscroll = function() {
    myFunction();
};
function toggleMenu() {
    const menuContent = document.querySelector('.menu-content');
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}

