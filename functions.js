const dropdownTitles = document.querySelectorAll('.dropdown-title');

// dropdown title event listeners
dropdownTitles.forEach(title => {
    title.addEventListener('click', function () {
        // dropdown is certificate section?
        const isCertificateDropdown = title.classList.contains('certificate-dropdown');
        const isSmallerDropdown = title.classList.contains('smaller-dropdown');

        // Close all other dropdowns if not certificate or smaller-dropdown
        if (!isCertificateDropdown && !isSmallerDropdown) {
            dropdownTitles.forEach(otherTitle => {
                if (otherTitle !== title) {
                    const otherContent = otherTitle.nextElementSibling;
                    if (otherContent) {
                        otherContent.style.display = 'none'; // Close other dropdowns
                        const otherArrow = otherTitle.querySelector('.arrow');
                        if (otherArrow) otherArrow.textContent = '►';
                    }
                }
            });
        } else if (isCertificateDropdown) {
            // If Certificate dropdown, close all non-certificate dropdowns
            dropdownTitles.forEach(otherTitle => {
                if (!otherTitle.classList.contains('certificate-dropdown') && !otherTitle.classList.contains('smaller-dropdown')) {
                    const otherContent = otherTitle.nextElementSibling;
                    if (otherContent) {
                        otherContent.style.display = 'none';
                        const otherArrow = otherTitle.querySelector('.arrow');
                        if (otherArrow) otherArrow.textContent = '►';
                    }
                }
            });
        }

        // Toggle content
        const content = title.nextElementSibling;
        const arrow = title.querySelector('.arrow');
        if (content) {
            const isContentVisible = content.style.display === 'block';
            content.style.display = isContentVisible ? 'none' : 'block';
            arrow.textContent = isContentVisible ? '►' : '▼'; 
        }
    });
});

// Dynamically adjust sizes - window size
function adjustSizes() {
    const introText = document.querySelector('.intro-text');
    const projectBoxes = document.querySelectorAll('.project-box');

    // Dynamically adjust the font size & padding
    const screenWidth = window.innerWidth;
    const fontSize = Math.max(16, screenWidth * 0.02); // Min font size - 16px
    introText.style.fontSize = fontSize + 'px';

    // Dynamic adjust width for project - screen size
    projectBoxes.forEach(box => {
        if (screenWidth > 768) {
            box.style.flex = '1 1 calc(33% - 2vw)'; // Columns on larger screens - 3
        } else {
            box.style.flex = '1 1 100%'; // Stack for smaller screens
        }
    });
}

// Initial adjustment on load
adjustSizes();

// Adjust sizes on window resize
window.addEventListener('resize', adjustSizes);

//  mobile menu button event listener
document.querySelector('.menu-btn').addEventListener('click', function () {
    const menuContent = document.querySelector('.mobile-menu-content');

    // Toggle menu visibility
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
});
