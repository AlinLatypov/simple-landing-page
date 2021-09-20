//search
document.querySelector('#productSearch').oninput = function startSearch(){
    const val=this.value.trim();
    const regexp=new RegExp(val,'i');
    let searchItems=document.querySelectorAll('.b-productItem');
    let productBlock=document.querySelector('.b-productBlock');
    let searchAlert=document.querySelector('.searchAlert');
    let mustHide=document.querySelectorAll('.mustHide');
    if(val!=''){
        searchItems.forEach(function(elem) {
            if(regexp.test(elem.innerText)===false){
                elem.classList.add('hide');
                searchAlert.classList.add('showSearchAlert');
            }
            else {
                elem.classList.remove('hide');
                searchAlert.classList.remove('showSearchAlert');
            }
        });
      mustHide.forEach(function (elem) {
          elem.classList.add('hide');
          }
      );
    }
    else {
        searchItems.forEach(function(elem) {
                elem.classList.remove('hide');
                searchAlert.classList.remove('showSearchAlert');
        });

        mustHide.forEach(function (elem) {
                elem.classList.remove('hide');
            }
        );
    }
};

//gallerySlider
//global
var globObj={
    xInfo:1
};

function init() {
    var images=document.getElementsByClassName("smImg");
    for(var i=0;i<images.length;i++){
        images[i].onclick=changeBigPicture;
    }
}

function changeBigPicture(eventObj) {
    var imgBlock=document.getElementById("imgBlock");
    imgBlock.innerHTML="";
    var eventElement=eventObj.target;
    var imageNameParts=eventElement.id.split("_");
    globObj.xInfo=imageNameParts[1];
    var src="images/big/"+imageNameParts[1]+".jpg";
    var imageDomElement=document.createElement("img");
    imageDomElement.src=src;
    imageDomElement.classList.add('b-slideshowContainer__bigImage');
    var bigPict=imgBlock.appendChild(imageDomElement);
    var lftBtn=document.createElement("button");
    lftBtn.innerHTML="<i class=\"fa fa-chevron-left fa-2x\" aria-hidden=\"true\"></i>";
    var rgtBtn=document.createElement("button");
    rgtBtn.innerHTML="<i class=\"fa fa-chevron-right fa-2x\" aria-hidden=\"true\"></i>";
    var closeBtn=document.createElement("button");
    closeBtn.innerHTML="<i class=\"fa fa-times fa-2x\" aria-hidden=\"true\"></i>";
    lftBtn.setAttribute("class", "b-slideshowContainer__buttons b-slideshowContainer__buttons_localityLeftBtn");
    rgtBtn.setAttribute("class", "b-slideshowContainer__buttons b-slideshowContainer__buttons_localityRightBtn");
    closeBtn.setAttribute("class", "b-slideshowContainer__buttons b-slideshowContainer__buttons_localityCloseBtn");
    imgBlock.insertBefore(lftBtn, imageDomElement);
    imgBlock.appendChild(rgtBtn);
    imgBlock.appendChild(closeBtn);
    bigPict.onerror=function () {
        imageDomElement.src="images/big/errorImage.jpg";
        imgBlock.appendChild(imageDomElement);
    };
    rgtBtn.onclick=rightButtonFunct;
    lftBtn.onclick=leftButtonFunct;
    closeBtn.onclick=closeSliderFunct;
    var z=globObj.xInfo;
    var gallaryBox=document.querySelector('.b-gallery');
    gallaryBox.classList.add('hide');
    var  slideShowCont=document.querySelector(".b-slideshowContainer");
    slideShowCont.classList.add('b-slideshowContainer_locality');
    function rightButtonFunct() {
        var images=document.getElementsByClassName("smImg");
        if(z<images.length){
            z=++z;
            imgBlock.innerHTML="";
            src="images/big/"+z+".jpg";
            imageDomElement.src=src;
            bigPict=imgBlock.appendChild(imageDomElement);
            imgBlock.insertBefore(lftBtn, imageDomElement);
            imgBlock.appendChild(rgtBtn);
            imgBlock.appendChild(closeBtn);
        }
    }

    function leftButtonFunct(){
        if(z>1){
            z=--z;
            imgBlock.innerHTML="";
            src="images/big/"+z+".jpg";
            imageDomElement.src=src;
            bigPict=imgBlock.appendChild(imageDomElement);
            imgBlock.insertBefore(lftBtn, imageDomElement);
            imgBlock.appendChild(rgtBtn);
            imgBlock.appendChild(closeBtn);
        }
    }

    function closeSliderFunct() {
        imgBlock.innerHTML="";
        gallaryBox.classList.remove('hide');
        slideShowCont.classList.remove('b-slideshowContainer_locality');
    }
}

window.onload=init;