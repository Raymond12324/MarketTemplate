window.onscroll = function(){
    bar();
}

var navbar = document.querySelector('.header');




function bar(){
    if(window.pageYOffset > 1){
        navbar.classList.add("sticky");
        
    }
    if(window.pageYOffset == 0){
        navbar.classList.remove("sticky");
    }
}