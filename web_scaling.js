document.addEventListener('DOMContentLoaded', function () {
    function adjustLayout() {
        const headerText = document.getElementById('header_text');
        if (window.innerWidth <= 768) {
            headerText.style.position = 'static';
            headerText.style.transform = 'none';
            headerText.style.maxWidth = '90%';
            headerText.style.margin = '20px auto';
        } else {
            headerText.style.position = 'absolute';
            headerText.style.top = '50%';
            headerText.style.left = '10%';
            headerText.style.transform = 'translateY(-50%)';
            headerText.style.maxWidth = '40%';
            headerText.style.margin = '0';
        }
    }

    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
