$(document).ready(function () {
    let x = window.matchMedia("(max-width: 375px)");

    let menuToggleIcon = document.getElementById('menuToggleIcon');
    let navItems = document.getElementById('navItems');
    let navOpen = false;

    if (x.matches) {
        navItems.style.visibility = 'hidden';
        $(menuToggleIcon).click(function () {
            if (navOpen == false) {
                navOpen = true;
                navItems.style.visibility = 'visible';
                menuToggleIcon.innerHTML = '<img src="images/icon-close.svg">';
            } else {
                navOpen = false;
                navItems.style.visibility = 'hidden';
                menuToggleIcon.innerHTML = '<img src="images/icon-hamburger.svg">';
            }
        });
    }






    // display: flex;
    //   flex-flow: column;
    //   justify-content: flex-start;
});