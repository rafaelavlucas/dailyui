window.addEventListener("load", event => {
    const arrowNext = document.querySelector(".button-next"),
        arrowPrev = document.querySelector(".button-prev"),
        imageActive = document.querySelector(".active img"),
        imageNext = document.querySelector(".next img"),
        slideActive = document.querySelector(".active"),
        slideNext = document.querySelector(".next");

    const images = [{
            id: 0,
            image: "https://rafaelalucas91.github.io/assets/images/img-28.jpeg"
        },
        {
            id: 1,
            image: "https://rafaelalucas91.github.io/assets/images/img-25.jpeg"
        },
        {
            id: 2,
            image: "https://rafaelalucas91.github.io/assets/images/img-35.jpeg"
        },
        {
            id: 3,
            image: "https://rafaelalucas91.github.io/assets/images/img-30.jpeg",
            description: "description se quiseres"
        }
    ];

    arrowNext.addEventListener("click", nextPhoto);
    arrowPrev.addEventListener("click", prevPhoto);

    function nextPhoto() {
        const nextId = ~~imageNext.dataset.id + 1,
            nextPicture = images.find(element => element.id == nextId),
            bullet = document.querySelectorAll(".bullet"),
            activeBullet = [...bullet].find(
                element => element.dataset.id == ~~imageNext.dataset.id
            );


        // Add Classes to Anime Photos

        slideNext.classList.add("anime-next-in");
        slideActive.classList.add("anime-in");

        // To Remove the Class that anime in
        setTimeout(function () {
            slideActive.classList.remove("anime-in");
            slideNext.classList.remove("anime-next-in");
        }, 1500);

        // To Populate the Active and Next Slide

        imageActive.src = imageNext.src;
        imageActive.dataset.id = imageNext.dataset.id;

        if (imageActive.dataset.id == images.length - 1) {
            imageNext.src = images[0].image;
            imageNext.dataset.id = images[0].id;
        } else {
            imageNext.src = nextPicture.image;
            imageNext.dataset.id = nextPicture.id;
        }

        // To Add Active bullets
        bullet.forEach(function (el) {
            el.classList.remove("selected");
        });
        activeBullet.classList.add("selected");

        console.log(activeBullet);
    }

    function prevPhoto() {
        const prevId = ~~imageActive.dataset.id - 1,
            prevPicture = images.find(element => element.id == prevId),
            bullet = document.querySelectorAll(".bullet");
        let activeBullet = [...bullet].find(
            element => element.dataset.id == prevId
        );

        // Add Classes to Anime Photos

        slideActive.classList.add("anime-out");
        slideNext.classList.add("anime-next-out");

        // To Remove the Class that anime in
        setTimeout(function () {
            slideActive.classList.remove("anime-out");
            slideNext.classList.remove("anime-next-out");
        }, 1500);


        // To Populate the Active and Next Slide
        if (imageActive.dataset.id == 0) {
            imageNext.src = imageActive.src;
            imageNext.dataset.id = imageActive.dataset.id;
            imageActive.src = images[images.length - 1].image;
            imageActive.dataset.id = images[images.length - 1].id;
            activeBullet = [...bullet].find(
                element => element.dataset.id == imageActive.dataset.id
            );
        } else {
            imageNext.src = imageActive.src;
            imageNext.dataset.id = imageActive.dataset.id;
            imageActive.src = prevPicture.image;
            imageActive.dataset.id = prevPicture.id;
        }

        // To Add Active bullets
        bullet.forEach(function (el) {
            el.classList.remove("selected");
        });
        activeBullet.classList.add("selected");
    }

    // To Populate the first images on page load
    imageActive.src = images[0].image;
    imageActive.dataset.id = images[0].id;

    imageNext.src = images[1].image;
    imageNext.dataset.id = images[1].id;
});