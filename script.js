// Mouse tracking

document.addEventListener("mousemove", (event) => {
    const {clientX, clientY} = event;

    // Mouse code
});

// Scroll animations

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
    const htmlEl = document.documentElement;
    const screenHeightScrollPercent = htmlEl.scrollTop / htmlEl.clientHeight;

    htmlEl.style.setProperty("--scroll", screenHeightScrollPercent * 100);
}

setScrollVar();

// 3d text

function text3d(el, layersNum, xPos, yPos, colour) {
    let layers = [];

    for (let layer = 0; layer < layersNum; layer += 1) {
        layers.push(`${xPos * (layer + 1)}px ${yPos * (layer + 1)}px 0 ${colour}`);
    }

    el.style.textShadow = layers.join(",");
}