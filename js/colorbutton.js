/* ############################################ */
const body = document.querySelector('body');
const cbc = document.querySelector('#CBC');


const arrayOfColors = [
  {
    name : "var(--Electric)",
    1 : "1.jpg",
    2 : "2.png",
    3 : ""
},{
    name : "Crimson",
    1 : "1.jpg",
    2 : "2.png",
    3 : "3.jpg"
},{
    name : "Limegreen",
    1 : "1.png",
    2 : "2.png",
    3 : "",
},{
    name : "Yellow",
    1 : "1.jpg",
    2 : "",
    3 : ""
}];
cbc.addEventListener('click', () => {
    var colorNumber = Math.floor(Math.random() * arrayOfColors.length);
    if(arrayOfColors[colorNumber].name == getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color')){
      if(colorNumber == arrayOfColors.length -1 ){
        colorNumber--;
      } else {
        colorNumber++;
      }
        
    }
    document.documentElement.style
    .setProperty('--primary-color', arrayOfColors[colorNumber].name);

    if(document.querySelector(".input-info")){
    let inputInfo = document.querySelector(".input-info");

    let inputInfoImg = `./assets/shards/${arrayOfColors[colorNumber].name}/${arrayOfColors[colorNumber][1]}`;
    let inputInfoImgLink = 'url("' + inputInfoImg + '")';  

    inputInfo.style.backgroundImage = inputInfoImgLink;
    }
    
    if(document.querySelector(".showcase")){
    let showcase = document.querySelector(".showcase");

    let showcaseImg = `./assets/shards/${arrayOfColors[colorNumber].name}/${arrayOfColors[colorNumber][1]}`;
    let showcaseImgLink = 'url("' + showcaseImg + '")';  

    showcase.style.backgroundImage = showcaseImgLink;
    }
});