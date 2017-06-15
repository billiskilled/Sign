/**
 * Created by wanglei on 17-5-4.
 */
function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(targetElement == parent.lastChild) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;
    var placehold = document.createElement('img');
    placehold.setAttribute('id','placeholder');
    placehold.setAttribute('src','./images/placehold.jpg');
    placehold.setAttribute('alt','my image gallery');
    var description = document.createElement('p');
    description.setAttribute('id','description');
    var desctext = document.createTextNode('Choose an iamge');
    description.appendChild(desctext);
    var gallery = document.getElementById('imagegallery');
    insertAfter(placehold,gallery);
    insertAfter(description,placehold);
}

function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById('imagegallery')) return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for (var i = 0;i < links.length;i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}

function showPic(whichpic) {
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute('href');
    var placehold = document.getElementById('placeholder');
    placehold.setAttribute('src',source);
    if(!document.getElementById('description')) return false;
    if(whichpic.getAttribute('title')){
        var text = whichpic.getAttribute('title');
    } else {
        var text = '';
    }
    var description = document.getElementById('description');
    if(description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);