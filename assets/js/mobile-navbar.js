window.addEventListener("resize", function() {
    if (this.window.innerWidth > 950) {
        navList.style.display = "block"
    } else {
        navList.style.display = "none"
    }
})

function clickMenu() {
    if (navList.style.display == "block") {
        navList.style.display = "none"
    } else {
        navList.style.display = "block"
    }
}