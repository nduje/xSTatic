let backgroundImages = [];

backgroundImages[0] = 'images/background_images/.jpg';
backgroundImages[1] = 'images/background_images/.jpg';
backgroundImages[2] = 'images/background_images/.jpg';
backgroundImages[3] = 'images/background_images/.jpg';
backgroundImages[4] = 'images/background_images/.jpg';
backgroundImages[5] = 'images/background_images/.jpg';

function reloadBackgroundImage() {
    let random = Math.floor(Math.random() * backgroundImages.length);

    document.body.style.backgroundImage = `linear-gradient(rgba(38, 38, 42, 0.45)), rgba(38, 38, 42, 0.45)), url(${backgroundImages[random]})`;
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