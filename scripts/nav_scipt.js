// console.log('Welcome to Joonas Niinimäki porfolio!');
// const skills = ['React', 'Node.js', 'Python', 'Javascript'];
// skills.forEach(skill => console.log(skill));

// Smooth scrolling with offset for internal sections
const OFFSET = 100; // Adjust this value for the desired space above the sections

document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');

    // Apply smooth scrolling only to internal links (starting with #)
    if (href.startsWith("#")) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = href.substring(1);

            if (targetId === 'about') {
                // Scroll to the very top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Scroll with offset for other sections
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const topOffset = targetSection.offsetTop - OFFSET;
                    window.scrollTo({
                        top: topOffset,
                        behavior: 'smooth'
                    });
                }
            }

            if (targetId === 'projects') {
                const targetProject = document.getElementById(targetId);
                const projectTopOffset = targetProject.offsetTop - (OFFSET * 2);
                window.scrollTo({
                    top: projectTopOffset,
                    behavior: 'smooth'
                });
            }
        });
    }
});