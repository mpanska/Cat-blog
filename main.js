const menuIcon = document.getElementById("menu-img");
const slideOutMenu = document.getElementById("slide-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");


searchIcon.addEventListener('click', function () {
    if(searchBox.style.top === '100px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';
    }
    else { searchBox.style.top = '100px';
        searchBox.style.pointerEvents = 'auto';
    }
})


menuIcon.addEventListener('click', function () {
    if (slideOutMenu.style.opacity === "1") {
        slideOutMenu.style.opacity = '0';
        slideOutMenu.style.pointerEvents = 'none';
    } else {
        slideOutMenu.style.opacity = '1';
        slideOutMenu.style.pointerEvents = 'auto';
    }
})

