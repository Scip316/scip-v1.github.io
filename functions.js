const dropdownTitles = document.querySelectorAll('.dropdown-title');

// Add click event listeners to each dropdown title
dropdownTitles.forEach(title => {
    title.addEventListener('click', function() {
        const content = this.nextElementSibling; // Get the associated content

        // Toggle display of the content
        if (content.style.display === 'block') {
            content.style.display = 'none'; // Hide if already shown
            this.querySelector('.arrow').textContent = '►'; // Change to right arrow
        } else {
            content.style.display = 'block'; // Show the content
            this.querySelector('.arrow').textContent = '▼'; // Change to down arrow
        }

        // Optionally, close other sections if desired
        dropdownTitles.forEach(otherTitle => {
            if (otherTitle !== this) {
                otherTitle.nextElementSibling.style.display = 'none'; // Close other sections
                otherTitle.querySelector('.arrow').textContent = '►'; // Reset arrow
            }
        });
    });
});

// Function to dynamically adjust sizes based on window size
function adjustSizes() {
    const introText = document.querySelector('.intro-text');
    const projectBoxes = document.querySelectorAll('.project-box');

    // Dynamically adjust the font size and padding
    const screenWidth = window.innerWidth;
    const fontSize = Math.max(16, screenWidth * 0.02); // Minimum font size of 16px
    introText.style.fontSize = fontSize + 'px';

    // Set dynamic width for project boxes based on screen size
    projectBoxes.forEach(box => {
        if (screenWidth > 768) {
            box.style.flex = '1 1 calc(33% - 2vw)'; // Three columns on larger screens
        } else {
            box.style.flex = '1 1 100%'; // Stack on smaller screens
        }
    });
}

// Initial adjustment on load
adjustSizes();

// Adjust sizes on window resize
window.addEventListener('resize', adjustSizes);

// Add the mobile menu button click event listener
document.querySelector('.menu-btn').addEventListener('click', function() {
    const menuContent = document.querySelector('.dropdown-content');
    
    // Toggle menu visibility
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
