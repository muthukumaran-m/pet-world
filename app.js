function showImage(str) {
    hideAll();
    document.getElementById(str).style.display = "block";
    document.getElementById(str + "btn").classList.add("active");
}

function hideAll() {
    document.getElementById("dog").style.display = "none";
    document.getElementById("cat").style.display = "none";
    document.getElementById("parrot").style.display = "none";
    document.getElementById("dogbtn").classList.remove("active");
    document.getElementById("catbtn").classList.remove("active");
    document.getElementById("parrotbtn").classList.remove("active");
}