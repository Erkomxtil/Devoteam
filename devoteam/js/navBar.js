function navBar() {
  window.addEventListener('scroll', function(e){
    let position =window.scrollY
    const navMenu = document.querySelector('nav')

    if (position > 50){
      navMenu.classList.add('active')
    }else{
      navMenu.classList.remove('active')
    }
  }) 
}

navBar()
