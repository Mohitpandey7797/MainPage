document.getElementById('menuIcon').addEventListener('click', function() {
    const navBox = document.getElementById('navBox');
    if (navBox.style.display === "flex") {
        navBox.style.display = "none";
        
    } else {
        navBox.style.display = "flex";
    }
});
