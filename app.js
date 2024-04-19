const d = document;
const $ = (e) => d.querySelector(e);
const $a = (e) => d.querySelectorAll(e);

export const app = (e) => {

    d.addEventListener("click", (e) => {
        if (e.target.matches('[data-button="open"]') || e.target.closest('[data-button="open"]')) {
            const menu = $('[data-type="main-menu"]');
            menu.classList.add("open");
        }

        if (e.target.matches('[data-button="close"]') || e.target.closest('[data-button="close"]')) {
            const menu = $('[data-type="main-menu"]');
            menu.classList.remove("open");
        }

        if (e.target.matches('[data-button="close"]') || e.target.closest('[data-button="close"]')) {
            const menu = $('[data-type="main-menu"]');
            menu.classList.remove("open");
        }

        if (e.target.matches(".menu-drinks__logo")) {
            const color = e.target.dataset.color;
            const filter = e.target.dataset.filter;
            const socialMedia = $(".social-media");
            const buttonMenu = $(".button-menu__icon");
            if (color) {
                const root = document.documentElement;
                root.style.setProperty('--primary-color', color);
            }
            if (filter === 'green') {
                const imgBanner = $(".banner__drink-image");
                imgBanner.style.opacity = 0;
                setTimeout(() => {
                    imgBanner.setAttribute("src", "assets/img/img1.png")
                    imgBanner.style.opacity = 1;
                }, 500);
                buttonMenu.classList.remove("filter-pink-coral", "filter-pink-bright")
                buttonMenu.classList.add("filter-green");
                socialMedia.classList.remove("filter-pink-coral", "filter-pink-bright")
                socialMedia.classList.add("filter-green");

            }

            if (filter === 'pink-coral') {
                const imgBanner = $(".banner__drink-image");
                imgBanner.style.opacity = 0;
                setTimeout(() => {
                    imgBanner.setAttribute("src", "assets/img/img2.png")
                    imgBanner.style.opacity = 1;
                }, 500);
                buttonMenu.classList.remove("filter-green", "filter-pink-bright")
                buttonMenu.classList.add("filter-pink-coral");
                socialMedia.classList.remove("filter-green", "filter-pink-bright")
                socialMedia.classList.add("filter-pink-coral");
            }

            if (filter === 'pink-bright') {
                const imgBanner = $(".banner__drink-image");
                imgBanner.style.opacity = 0;
                setTimeout(() => {
                    imgBanner.setAttribute("src", "assets/img/img3.png")
                    imgBanner.style.opacity = 1;
                }, 500);
                buttonMenu.classList.remove("filter-green", "filter-pink-bright")
                buttonMenu.classList.add("filter-pink-coral");
                socialMedia.classList.remove("filter-pink-coral", "filter-green")
                socialMedia.classList.add("filter-pink-bright");
            }
        }
    })

}