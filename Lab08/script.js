function lazyLoad() {
    const images = document.querySelectorAll("img.lazy");
    
    for (let img of images) {
        if (img.offsetTop < window.innerHeight + window.pageYOffset) {
            img.src = img.dataset.src;
            img.alt = img.dataset.alt;
            img.classList.remove("lazy");
            img.classList.add("loaded");
        }
    }
}

document.addEventListener("scroll", lazyLoad);
window.addEventListener("resize", lazyLoad);
window.addEventListener("orientationchange", lazyLoad);

lazyLoad();
