let arrPic = [
    "Alliance.png",
    "Ap.png",
    "Bossgreen.png",
    "Bossyellow.png",
    "bullet.png",
    "Drop.png",
    "Ta.png",
    "Websmith.png",
    "Orderme.png",
  ];
  const otherPictureArr =[
    './Other/scentforyou.jpg',
    './Other/Personalbc.jpg',
    './Other/Alliancebc.jpg',
    './Other/other4.jpg',
    './Other/magazine.jpg',
    './Other/other3.jpg',
    './Other/Broshura.jpg',
    './Other/other5.jpg',
    `./Other/maxbet_bons.jpg`,
    `./Other/maxbet_bons_1.jpg`,
    './Other/mama.jpg',
    './Other/decho1.png',
    './Other/Jazz_poster_exam.jpg',
  ]
  document.getElementById("down").addEventListener("click", downToFooter);
  document.getElementById("downMobile").addEventListener("click", downToFooter);
  window.addEventListener("load", placePics);
  // window.addEventListener("scroll", showItems);
  window.addEventListener("load", placeMobilePic);
  document.querySelector(".arrow").addEventListener("click", prevPic);
  document.querySelector(".rigth").addEventListener("click", nextPic);
  document.querySelector(".galaryOne").addEventListener("click", enlargePic);
  document.getElementById("middle").addEventListener("click", showMiddle);
  document.getElementById("right").addEventListener("click", showRight);
  document.querySelector(".mobileArrow").addEventListener("click", prevMobilePic);
  document
    .querySelector(".mobileArrowLeft")
    .addEventListener("click", nextMobilePic);
  document.querySelector(".burger").addEventListener("click", showNav);
  document.querySelector(".whrapMobile").addEventListener("click", changePics);
  
  function placePics() {
    let LogArr = Array.from(document.querySelectorAll(".galaryOne img"));
    let path = `./Logos/`;
    for (let i = 0; i < 5; i++) {
      LogArr[i].setAttribute("src", path + arrPic[i]);
    }
  }
  
  function prevPic() {
    arrPic.push(arrPic.shift());
    placePics();
  }
  
  function nextPic() {
    arrPic.unshift(arrPic.pop());
    placePics();
  }
  
  function enlargePic(e) {
    if ((e.target.tagname = "IMG" && e.target.src)) {
      let body = document.querySelector(".projects");
      let isThere = body.querySelector(".containerBigPic");
      let arrNames = e.target.src.split("/");
      let picName = arrNames[arrNames.length - 1];
      if (!isThere) {
        let modal = createEl("div", "modal");
        let div = createEl("div", "containerBigPic");
        let btn = createEl("button", "close-btn");
        div.appendChild(btn);
        div.style.backgroundImage = `url(./Logos/${picName})`;
        modal.appendChild(div);
        modal.addEventListener("click", deleteImg);
        body.appendChild(modal);
      } else {
        body.querySelector(".containerBigPic").remove();
        enlargePic(e);
      }
    }
  }
  function createEl(el, className) {
    el = document.createElement(el);
    el.classList.add(className);
    return el;
  }
  
  function deleteImg(e) {
    e.currentTarget.remove();
  }
  
  function showMiddle() {
    document.querySelector(".middle").style.display = "block";
    document.getElementById("middle").style.display = "none";
  }
  
  function showRight() {
    document.querySelector(".rigthGalery").style.display = "block";
    document.getElementById("right").style.display = "none";
  }
  
  function prevMobilePic(e) {
    arrPic.push(arrPic.shift());
    placeMobilePic();
  }
  
  function nextMobilePic(e) {
    arrPic.unshift(arrPic.pop());
    placeMobilePic();
  }
  
  function placeMobilePic() {
    let LogArr = Array.from(document.querySelectorAll(".mobile-galery img"));
    let path = `./Logos/`;
    for (let i = 0; i < 5; i++) {
      LogArr[i].setAttribute("src", path + arrPic[i]);
    }
  }
  
  function showNav(e) {
    let menu = document.querySelector(".burgerMenu");
    let lines = Array.from(e.currentTarget.querySelectorAll(".burger-line"));
    lines[0].style.width = 0;
    lines[1].style.transform = "rotate(45deg)";
    lines[2].style.transform = "rotate(-45deg)";
    lines[3].style.width = 0;
    menu.style.opacity = 1;
    menu.style.pointerEvents = "all";
    document.querySelector(".burger").removeEventListener("click", showNav);
    document.querySelector(".burger").addEventListener("click", reverseShowNav);
  }
  function reverseShowNav(e) {
    let menu = document.querySelector(".burgerMenu");
    let lines = Array.from(e.currentTarget.querySelectorAll(".burger-line"));
    lines[0].style.width = "100%";
    lines[1].style.transform = "rotate(0)";
    lines[2].style.transform = "rotate(0)";
    lines[3].style.width = "100%";
    menu.style.opacity = 0;
    menu.style.pointerEvents = "none";
    document.querySelector(".burger").addEventListener("click", showNav);
    document
      .querySelector(".burger")
      .removeEventListener("click", reverseShowNav);
  }
  function changePics(e) {
    if (e.target.tagName == "IMG") {
      let arrNames = e.target.src.split("/");
      let picName = arrNames[arrNames.length - 1];
      let LogArr = Array.from(document.querySelectorAll(".mobile-galery img"));
      let path = `./Logos/`;
      LogArr[0].setAttribute("src", path + picName);
    }
  }
  
  function massGaleryPics() {
    let endIndex = otherPictureArr.length;
    let divs = Array.from(document.querySelectorAll(".galeryMass img"));
    for (let i = 0; i < endIndex; i++) {
      divs[i].setAttribute("src", otherPictureArr[i]);
    }
  }
  
  //  function showItems(){
  //   let maxScroll = document.body.scrollHeight
  //     let curentScrollPos = window.scrollY
  //   if(curentScrollPos + window.innerHeight >= maxScroll){
  //      massGaleryPics()
  //   }
  //  }
  
  function downToFooter(e) {
    e.preventDefault();
    massGaleryPics()
    setTimeout(middle, 100);
  }
  
  function middle() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        massGaleryPics();
      }
    },
    {
      threshold: 0,
    }
  );
  
  const element = document.querySelector(".galeryMass");
  observer.observe(element);
  