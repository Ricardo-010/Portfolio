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

document.getElementById('snakeDescButton').addEventListener('click', function() {
    var description = document.getElementById('snakeDescription');
    if (description.style.display === 'none') {
        description.style.display = 'flex';
        this.textContent = 'Hide Description...';
    } else {
        description.style.display = 'none';
        this.textContent = 'Description...';
    }
});

document.getElementById('responsiveDescButton').addEventListener('click', function() {
    var description = document.getElementById('responsiveDescription');
    if (description.style.display === 'none') {
        description.style.display = 'flex';
        this.textContent = 'Hide Description...';
    } else {
        description.style.display = 'none';
        this.textContent = 'Description...';
    }
});

document.getElementById('equinoxDescButton').addEventListener('click', function() {
    var description = document.getElementById('equinoxDescription');
    if (description.style.display === 'none') {
        description.style.display = 'flex';
        this.textContent = 'Hide Description...';
    } else {
        description.style.display = 'none';
        this.textContent = 'Description...';
    }
});

document.getElementById('bagDescButton').addEventListener('click', function() {
    var description = document.getElementById('bagDescription');
    if (description.style.display === 'none') {
        description.style.display = 'flex';
        this.textContent = 'Hide Description...';
    } else {
        description.style.display = 'none';
        this.textContent = 'Description...';
    }
});