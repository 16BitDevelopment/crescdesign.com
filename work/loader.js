const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

const sections = document.querySelectorAll("section");
sections.forEach((el) => observer.observe(el));