document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var popupImages = document.querySelectorAll(".popup img");
    var show = document.querySelector(".show");
    var imgShow = document.querySelector(".img-show img");
    var overlay = document.querySelector(".overlay");

    popupImages.forEach(function (popupImage) {
        popupImage.addEventListener("click", function () {
            var src = popupImage.getAttribute("src");
            src = src.replace('/menu/', '/menu-org/')
            show.style.display = "block";
            show.classList.add('active');
            imgShow.setAttribute("src", src);
        });
    });

    overlay.addEventListener("click", function () {
        show.style.display = "none";
        show.classList.remove('active');
    });

});