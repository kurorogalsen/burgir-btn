let click = false;
document.getElementById("burgir-btn").addEventListener("click", () => {
    if (click === false) {
        document.getElementById("link-container").style.left = "0%";
        click = true;
    }
    else {
        document.getElementById("link-container").style.left = "-100%";
        click = false;
    }
})