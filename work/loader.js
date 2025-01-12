const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            const el = entry.target
            el.setAttribute("src", el.getAttribute("data-src"))
        }
    });
});

const sections = document.querySelectorAll("img");
sections.forEach((el) => {
    if (el.getAttribute("data-src")) {
        observer.observe(el);
    }
});