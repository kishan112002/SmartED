// Get the element with the id 'MenuItems'
var MenuItems = document.getElementById('MenuItems');

// Initialize the max height to 0px
MenuItems.style.maxHeight = '0px';



// Define the function to toggle the menu
function menutoggle() {
    // Check the current max height
    if (MenuItems.style.maxHeight === '0px') {
        // If it's 0px, set it to 200px
        MenuItems.style.maxHeight = '200px';
    } else {
        // If it's not 0px, set it back to 0px
        MenuItems.style.maxHeight = '0px';
    }
}