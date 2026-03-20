document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("open");
        });
    }
});

/*document.querySelector('.eye').addEventListener('click', function() {
    const input = document.getElementById('password');
    if (input.type === 'password') {
        input.type = 'text';
        this.querySelector('span').textContent = 'visibility_off';
    } else {
        input.type = 'password';
        this.querySelector('span').textContent = 'visibility';
    }
});*/