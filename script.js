//alert("This website is in Developer Version (unfinished and so many bugggggggggggg)")

function contact() {
    var w = 800
    var h = 300
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2);
    var contactpopup = window.open("contact", "",' width='+w+', height='+h+', top='+top+', left='+left);
    setTimeout(function() { contactpopup.close();}, 20000);
}

document.addEventListener('contextmenu', 
event => event.preventDefault());
