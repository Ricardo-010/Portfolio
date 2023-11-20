function toggleMenu() {
    var menu = document.getElementById("menuContent");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function toggleSocials() {
    var socials = document.getElementById("socialContent");
    var panelStyle = window.getComputedStyle(socials);
    
    if (panelStyle.right === '0px') {
        socials.style.right = '-3rem'; // Moves the sidebar off-screen
    } else {
        socials.style.right = '0px'; // Moves the sidebar on-screen
    }
}