function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Закрываем меню, если оно уже открыто
    } else {
        // Закрываем все открытые меню перед открытием нового
        var allMenus = document.querySelectorAll('.sub-menu');
        allMenus.forEach(function(item) {
            item.style.display = "none";
        });
        menu.style.display = "block"; // Открываем выбранное меню
    }
}

// Закрытие меню при клике вне его области
document.addEventListener('click', function(event) {
    var isClickInsideMenu = event.target.closest('.menu');
    if (!isClickInsideMenu) {
        var allMenus = document.querySelectorAll('.sub-menu');
        allMenus.forEach(function(item) {
            item.style.display = "none";
        });
    }
});