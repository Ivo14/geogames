export function changeAppearance(){
    if(localStorage.darkTheme){
        document.querySelector('header').style.backgroundColor = "rgb(180, 248, 250)"
        document.querySelector('body').style.backgroundColor = "rgb(224, 254, 255)"
        document.querySelector('footer').style.backgroundColor = "rgb(180, 248, 250)"
        localStorage.clear();
    }else{
        document.querySelector('header').style.backgroundColor = "rgb(9, 9, 26)"
        document.querySelector('body').style.backgroundColor = "rgb(17, 17, 39)"
        document.querySelector('footer').style.backgroundColor = "rgb(9, 9, 26)"
        localStorage.darkTheme = true;
    }
}

export function checkAppearance(){
    if(localStorage.darkTheme){
        document.querySelector('header').style.backgroundColor = "rgb(9, 9, 26)"
        document.querySelector('body').style.backgroundColor = "rgb(17, 17, 39)"
        document.querySelector('footer').style.backgroundColor = "rgb(9, 9, 26)"
        
    }else{
        document.querySelector('header').style.backgroundColor = "rgb(180, 248, 250)"
        document.querySelector('body').style.backgroundColor = "rgb(224, 254, 255)"
        document.querySelector('footer').style.backgroundColor = "rgb(180, 248, 250)"
    }
}