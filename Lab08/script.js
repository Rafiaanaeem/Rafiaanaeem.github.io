function lazyLoad() {
    const images = document.querySelectorAll("img.lazy");
    images.forEach(img => {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
            img.src = img.dataset.src;
            img.alt = img.dataset.alt;
            img.classList.remove("lazy");
        }
    });
}

window.addEventListener("scroll", lazyLoad);
window.addEventListener("load", lazyLoad);
window.addEventListener("resize", lazyLoad);
