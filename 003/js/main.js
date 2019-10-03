window.addEventListener("load", event => {
    const arrowNext = document.querySelector(".button-next"),
        arrowPrev = document.querySelector(".button-prev"),
        imageActive = document.querySelector(".active img"),
        imageNext = document.querySelector(".next img"),
        slideActive = document.querySelector(".active"),
        slideNext = document.querySelector(".next");

    const images = [{
            id: 0,
            image: "assets/angele-03.jpg"
        },
        {
            id: 1,
            image: "assets/angele-10.jpg"
        },
        {
            id: 2,
            image: "assets/angele-11.jpg"
        },
        {
            id: 3,
            image: "assets/angele-12.jpg"
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



    // Sticky menu 

    window.onscroll = function () {

        if (window.pageYOffset >= 90) {
            iconMenu.classList.add('sticky');

        } else {
            iconMenu.classList.remove('sticky');
        }
    }
    // open menu

    const iconMenu = document.querySelector('.icon-menu'),
        menuOverlay = document.querySelector('.menu'),
        body = document.querySelector('body');

    iconMenu.addEventListener("click", openMenu);

    // Sticky menu 

    window.onscroll = function () {

        if (window.pageYOffset >= 90) {
            iconMenu.classList.add('sticky');

        } else {
            iconMenu.classList.remove('sticky');
        }
    }


    function openMenu() {

        if (iconMenu.classList.contains('icon-open')) {
            menuOverlay.classList.remove('menu-open');
            iconMenu.classList.remove('icon-open');
            body.classList.remove('no-scroll');
            iconMenu.classList.add('sticky');

        } else {
            menuOverlay.classList.add('menu-open');
            iconMenu.classList.add('icon-open');
            body.classList.add('no-scroll');

            setTimeout(function () {
                iconMenu.classList.remove('sticky');
            }, 500);

        }
    }

    // open modal video

    const videoItem = document.querySelectorAll('.video-item'),
        modalVideo = document.querySelector('.modal-video'),
        iconCloseVideo = document.querySelector('.close-video');

    videoItem.forEach(function (el) {
        el.addEventListener("click", openVideo);
    })

    iconCloseVideo.addEventListener("click", closeVideo);

    function openVideo(e) {
        const videoSrc = e.currentTarget.dataset.video,
            videoUrl = e.currentTarget.dataset.url,
            videoFrame = document.querySelector(".video-code iframe"),
            ytLink = document.querySelector(".yt-link");


        modalVideo.classList.add('video-open');

        videoFrame.src = videoSrc;

        e.preventDefault();
        videoFrame.attr('src', '');
    }

    // ytLink.href = videoUrl;




    function closeVideo() {
        modalVideo.classList.remove('video-open');
    }


});