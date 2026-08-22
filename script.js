/* =====================================================
   HEADER SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});



/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", function () {

    mobileMenu.classList.toggle("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

        });

    });



/* =====================================================
   PROJECT FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        filterButtons.forEach(function (item) {

            item.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                filter === category
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* =====================================================
   LIGHTBOX
===================================================== */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


document
    .querySelectorAll(".project-image img")
    .forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;

            lightbox.classList.add("active");

            document.body.style.overflow =
                "hidden";

        });

    });


function closeLightbox() {

    lightbox.classList.remove("active");

    lightboxImage.src = "";

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLightbox();

            mobileMenu.classList.remove("active");

        }

    }
);



/* =====================================================
   IMAGE ERROR HANDLER
   اگر اسم یک عکس اشتباه باشد،
   کارت سایت نمی‌ترکد.
===================================================== */

document
    .querySelectorAll("img")
    .forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                if (
                    image.closest(".project-image")
                ) {

                    image.closest(".project-image")
                        .classList.add("image-error");

                }

            }
        );

    });