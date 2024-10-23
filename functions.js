const dropdownTitles = document.querySelectorAll('.dropdown-title, .cert-title');

// Event Listern for the drop down
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
    });
});

// Mobile menu
document.querySelector('.menu-btn').addEventListener('click', function() {
    const menuContent = document.querySelector('.dropdown-content');
    
    // Toggle menu visibility
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
