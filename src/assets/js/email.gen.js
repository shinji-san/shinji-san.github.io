document.getElementById("addrGen").addEventListener("mouseover", mouseOver);
document.getElementById("addrGen").addEventListener("mouseout", mouseOut);

function mouseOver() {
    var charcodes = [109, 97, 105, 108, 116, 111, 58, 119, 101, 98, 109, 97, 115, 116, 101, 114, 64];
    var sChar = "";
    for (i = 0; i < charcodes.length; i++) {
        sChar += String.fromCharCode(charcodes[i]);
    }
    document.getElementById("addrGen").href=sChar + document.domain.replace(/www./g, ""); 
};

function mouseOut() {
    document.getElementById("addrGen").href="#"; 
};