const imagecontainerE1 = document.querySelector(".image_container")
const btnE1 = document.querySelector(".btn")
btnE1.addEventListener("click",()=>{
     imageNum = 10;
    addNewImages()
});

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgE1 = document.
        createElement("img")
        newImgE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imagecontainerE1.appendChild(newImgE1);
        
    }
   
}
