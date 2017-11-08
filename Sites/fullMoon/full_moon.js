console.log("Script chargé");
window.addEventListener("load", function () {
    var myImage = document.querySelectorAll(".myThumbnail > div.img-thumbnail");
    var mySelect = document.querySelector(".carousel");
    var arrowR = document.getElementById("arrowR");
    var arrowL = document.getElementById("arrowL");
    var ImageList = [];
    for (var i=0; i < myImage.length; i++) {
        ImageList[i] =  myImage[i].firstChild.src;
    }

    console.log(ImageList);
    for (var i=0; i < myImage.length; i++) {
        myImage[i].addEventListener("click", function () {
            mySelect.style.backgroundImage = "url(" + this.firstChild.src + ")";
            // positionImage = ImageList.indexOf(document.querySelector(".carrousel"))
        });
    }
    arrowL.addEventListener("click", function () {
        var urlImageGeneral =mySelect.style.backgroundImage.replace('url("','').replace('")','');
        var index = ImageList.indexOf(urlImageGeneral);
        if(ImageList[index-1]==undefined)index=myImage.length;
        mySelect.style.backgroundImage = "url("+ImageList[index-1]+")";
        //mySelect.style.backgroundImage = positionImage.indexOf([i] - 1)+this.backgroundImage+"url(" + this.firstChild.src + ")";
    });
    arrowR.addEventListener("click", function () {
        var urlImageGeneral =mySelect.style.backgroundImage.replace('url("','').replace('")','');
        var index = ImageList.indexOf(urlImageGeneral);
        if(ImageList[index+1]==undefined)index=-1;
        mySelect.style.backgroundImage = "url("+ImageList[index+1]+")";
        //mySelect.style.backgroundImage = positionImage.indexOf([i] - 1)+this.backgroundImage+"url(" + this.firstChild.src + ")";
    });
//     if (i=0;i < myImage.length; i++) {

//     else if {
//             arrowR.addEventListener("click", function () {
//                 mySelect.style.backgroundImage = positionImage.indexOf([i + 1])+this.backgroundImage+"url(" + this.firstChild.src + ")"
//             })};
//         else
//             (!(mySelect.style.backgroundImage = "url(" + this.firstChild.src + ")"))+positionImage.indexOf([i])
//
//         };
//     };
// };
});

