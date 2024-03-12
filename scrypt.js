const back =document.querySelector(".back")
const nav =document.querySelector(".navbar")

window.onscroll =function(){
    if(scrollY >= 260){
        back.style.display ='block';
    }
    if(this.scrollY <= 260){
        back.style.display ='none';

    }
    if(this.scrollY >= 70){
        nav.style.backgroundColor="#d6392a"
    }
    if(this.scrollY<=70){
        nav.style.backgroundColor="transparent"
    }
}

back.onclick = function(){
    scroll({
        top:0,
        behavior:"smooth"
    })
} 




