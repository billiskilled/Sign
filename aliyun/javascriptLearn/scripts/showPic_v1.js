/**
 * Created by wanglei on 17-4-25.
 */
function perpareGallery() {
    if(!document.getElementsByTagName)
        return false;
    if(!document.getElementById)
        return false;
    if(!document.getElementById("imagegallery"))
        return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i < links.length;i++) {
        links[i].onclick = function() {
            return showPic(this)?false:true;
        }
    }
}
function showPic(whichpic) {
    if(!document.getElementById("placehold")) return false;
    var source = whichpic.getAttribute('href');
    var placehold = document.getElementById('placehold');
    placehold.setAttribute('src',source);
    if(placehold.nodeName != "IMG") return false;
    if(document.getElementById("description")){
        var text = whichpic.getAttribute('title')?whichpic.getAttribute('title'):"";
        var description = document.getElementById('description');
        if(description.firstChild.nodeType == 3){
            description.childNodes[0].nodeValue = text;
        }
    }
    return true;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    alert(body_element.childNodes.length);
}

window.onload = function () {
    perpareGallery();
}