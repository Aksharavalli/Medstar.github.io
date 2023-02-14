let navbar = document.querySelector('.navbar');
menu.onclick= () =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}
navbar.onclick= () =>{
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');
}