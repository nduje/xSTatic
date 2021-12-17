let backgroundImages = [];

backgroundImages[0] = 'images/background_images/basketball.jpg';
backgroundImages[1] = 'images/background_images/breakdance.jpg';
backgroundImages[2] = 'images/background_images/concert.jpg';
backgroundImages[3] = 'images/background_images/graffiti.jpg';
backgroundImages[4] = 'images/background_images/graffiti_spray.jpg';
backgroundImages[5] = 'images/background_images/skateboards.jpg';

function reloadBackgroundImage() {
    let random = Math.floor(Math.random() * backgroundImages.length);

    document.body.style.backgroundImage = `linear-gradient(rgba(38, 38, 42, 0.5), rgba(38, 38, 42, 0.5)), url(${backgroundImages[random]})`;

    console.log(backgroundImages[random]);
}

let tabs = document.querySelectorAll("#navigation_bar .tabs a");

function handleSelectedTab() {
    for (let tab of tabs) {
        if (tab.href == window.location.href) {
            tab.parentElement.classList.add("selected");
        }
    }
}

window.onload = function loadPage() {
    reloadBackgroundImage();
    handleSelectedTab();
}