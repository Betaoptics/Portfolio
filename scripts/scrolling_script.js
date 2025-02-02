const OFFSET = 100; // Adjust this value for the desired space above the sections

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);

        if (targetId === 'about') {
            // Scroll to the very top of the page
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll with offset for projects and contact sections
            const targetSection = document.getElementById(targetId);
            const topOffset = targetSection.offsetTop - OFFSET;

            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    });
});