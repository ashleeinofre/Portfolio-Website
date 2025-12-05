//Contact Icon JS
document.querySelectorAll(".icon-link").forEach(icon => {
    icon.addEventListener("click", function(e) {
        e.stopPropagation(); 
    });
});
document.getElementById("contactBtn").addEventListener("click", function(e) {
    e.preventDefault();  
    this.classList.toggle("active");
});