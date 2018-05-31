function copy(a) {
    var copyText = a;
    console.log(copyText);

    document.getElementById("clipboard").innerHTML = 'nv-' + copyText;
    var x = document.getElementById("clipboard");
    x.style.display = "block";
}

