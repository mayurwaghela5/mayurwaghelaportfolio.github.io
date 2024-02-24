document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById('one');
    const toggleBtn = aboutSection.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function() {
        aboutSection.classList.toggle('expanded');
        const content = aboutSection.querySelector('.about-content');
        content.classList.toggle('expand');
    });
});