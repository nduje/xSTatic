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
        tab.parentElement.classList.remove('selected');
    }

    for (let tab of tabs) {
        if (tab.href == window.location.href) {
            tab.parentElement.classList.add('selected');
            return;
        }
    }

    tabs[0].parentElement.classList.add('selected');
}


let toggleButton = document.getElementsByClassName('toggle-button')[0];
let navbarLinks = document.getElementsByClassName('navbar_links')[0];

toggleButton.addEventListener('click', dropMenu);

function dropMenu() {
    navbarLinks.classList.toggle('active');
}


let lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

let images = document.querySelectorAll('.lightbox_images');

setInterval(() => {
    getWindowWidth();
    removeLightbox();
}, 500);

function getWindowWidth() {
    return window.innerWidth;
}

function removeLightbox() {
    if (window.innerWidth < 1060)
        lightbox.classList.remove('active');
}

for (let image of images) {
    image.addEventListener('click', openImage);
}

function openImage(e) {
    if (getWindowWidth() > 1060) {
        lightbox.classList.add('active');
        let img = document.createElement('img');
        img.src = e.currentTarget.getAttribute('src');

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img);

        handleLightboxSize(lightbox, e.currentTarget);
    }
}

function handleLightboxSize(lightbox, img) {
    let imageWidth = img.offsetWidth;

    if(imageWidth < 720) {
        lightbox.firstChild.style.width = "auto";
        lightbox.firstChild.style.height = "75%";
    }

    else {
        lightbox.firstChild.style.width = "50%";
        lightbox.firstChild.style.height = "auto";
    }
}

lightbox.addEventListener('click', handleLightbox);

function handleLightbox(e) {
    if (e.target != e.currentTarget)
        return
    
    lightbox.classList.remove('active')
}


let toggleCategories = document.getElementsByClassName('toggle_categories')[0];
let categoriesMenu = document.getElementsByClassName('categories_menu')[0];

if(window.location.href.includes('category.php')) {
    toggleCategories.addEventListener('click', dropCategoriesMenu);
}

function dropCategoriesMenu() {
    categoriesMenu.classList.toggle('active');
}

let categories = document.querySelectorAll('.categories');

let categoriesContent = document.querySelectorAll('.categories_content');

if (window.location.href.includes('category.php')) {
    categories[0].classList.add('selected');
    categoriesContent[0].classList.add('selected');

    toggleCategories.textContent = categories[0].textContent;
}

for (let category of categories) {
    category.addEventListener('click', (e) => {
        handleCategory(e);
        refreshThumbnails();
    });
}

function handleCategory(e) {
    let selectedCategory = e.currentTarget;
    
    for (let category of categories)
        category.classList.remove('selected');
    
    selectedCategory.classList.add('selected');

    toggleCategories.textContent = selectedCategory.textContent;

    let currentIndex = getCurrentIndexCategory();

    handleCategoryContent(currentIndex);
}

function getCurrentIndexCategory() {
    let selectedCategory = document.querySelector('.categories.selected');

    for (let i = 0; i < categories.length; i++) {
        if (selectedCategory == categories[i]) {
            return i;
        }
    }
}

function handleCategoryContent(index) {
    for (let categoryContent of categoriesContent) {
        categoryContent.classList.remove('selected');
    }

    categoriesContent[index].classList.add('selected');
}

let currentMainImages = document.querySelectorAll('.slider_main_picture');

let thumbnails = document.querySelectorAll('.thumbnail');

let selectedThumbnails = document.querySelectorAll('.thumbnail.selected');

for (let thumbnail of thumbnails) {
    thumbnail.addEventListener('click', handleThumbnail)
}

function handleThumbnail(e) {
    let selectedThumbnail = e.currentTarget;

    for (let thumbnail of thumbnails) {
        thumbnail.classList.remove('selected');
    }

    selectedThumbnail.classList.add('selected');

    for(let currentMainImage of currentMainImages) {
        currentMainImage.querySelector('img').src = selectedThumbnail.querySelector('img').src;
    }
}

function refreshThumbnails() {
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('selected');
    }
    
    for (let i = 0; i < selectedThumbnails.length; i++) {
        currentMainImages[i].querySelector('img').src = selectedThumbnails[i].querySelector('img').src;
        selectedThumbnails[i].classList.add('selected');
    }
}

let toggleYears = document.getElementsByClassName('toggle_years')[0];
let yearsMenu = document.getElementsByClassName('years_menu')[0];

if(window.location.href.includes('gallery.php')) {
    toggleYears.addEventListener('click', dropYearsMenu);
}

function dropYearsMenu() {
    yearsMenu.classList.toggle('active');
}


let years = document.querySelectorAll('.years');
let galleryGrids = document.querySelectorAll('.gallery');

if (window.location.href.includes('gallery.php')) {
    years[0].classList.add('selected');
    galleryGrids[0].classList.add('selected');

    toggleYears.textContent = years[0].textContent;
}

for (let year of years) {
    year.addEventListener('click', handleYear);
}

function handleYear(e) {
    let selectedYear = e.currentTarget;

    for (let year of years) {
        year.classList.remove('selected');
    }

    selectedYear.classList.add('selected');

    toggleYears.textContent = selectedYear.textContent;

    let currentIndex = getCurrentIndexGallery();

    handleGalleryGrid(currentIndex);
}

function getCurrentIndexGallery() {
    let selectedYear = document.querySelector('.years.selected');

    for (let i = 0; i < years.length; i++) {
        if (selectedYear == years[i]) {
            return i;
        }
    }
}

function handleGalleryGrid(index) {
    for (let galleryGrid of galleryGrids) {
        galleryGrid.classList.remove('selected');
    }

   
    galleryGrids[index].classList.add('selected');
}


let loggedButton = document.querySelectorAll('.log_link');
let loggedUserDiv = document.querySelector('.logged_user_div');

let loggedUser = getCookie('logged');

console.log(loggedUser);



function checkLoggedButton() {
    if (loggedUser) {
        loggedButton[0].classList.remove('selected');
        loggedButton[1].classList.add('selected');
        
        loggedUserDiv.classList.add('selected');
        loggedUserDiv.textContent = `LOGGED IN AS ${loggedUser}`;
    }

    else {
        loggedButton[0].classList.add('selected');
        loggedButton[1].classList.remove('selected');
        
        loggedUserDiv.classList.add('selected');
    }
}

let logoutButton = document.querySelector('.logout_link');

logoutButton.addEventListener('click', () => {
    eraseCookie('logged');
    location.reload();
});


function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');

    for (var i=0;i < ca.length;i++) {
        let c = ca[i];

        while (c.charAt(0)==' ')
            c = c.substring(1,c.length);

        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length,c.length);
    }

    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


window.onload = function loadPage() {
    reloadBackgroundImage();
    handleSelectedTab();
    checkLoggedButton();
}