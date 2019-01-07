function Close(div, frame) {
    document.getElementById(div).style.display = "none";
    document.getElementById('overlay').style.display = "none";

    var pai = document.getElementById(div);

    
    var x = document.getElementById(frame);
    x.remove(x.selectedIndex);

    pai.appendChild(clone);
}


function showVideo(video) {
    document.getElementById(video).style.display = "block";
    document.getElementById('overlay').style.display = "block";
}

