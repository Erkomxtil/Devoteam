let sourceImg = document.querySelector(".imageSlide")
let count = 0

/* Image de départ */
sourceImg.src = "img/slider/slide01.jpg"

/* Tableau d'images */
let sliders = [{
    'src': "img/slider/slide01.jpg",
    'alt': "Design chair front",
  },
  {
    'src': "img/slider/slide02.jpg",
    'alt': "Design chair back"
  },
  {
    'src': "img/slider/slide03.jpg",
    'alt': "Design chair zoom"
  }
]

/* Pour l'affichage dynamique des images */
function augmenter() {

  if (count < 2) {

    count++
    if (sliders[count] != undefined) {
      sourceImg.src = sliders[count].src
      sourceImg.alt = sliders[count].alt

    }

  } else if (count === 2) {
    count = 0
    sourceImg.src = sliders[count].src
    sourceImg.alt = sliders[count].alt
  }

  switch (count) {
    case 0:
      document.querySelector(".cercle:nth-child(1)").classList.add("active")
      document.querySelector(".cercle:nth-child(2)").classList.remove("active")
      document.querySelector(".cercle:nth-child(3)").classList.remove("active")
      break

    case 1:
      document.querySelector(".cercle:nth-child(1)").classList.remove("active")
      document.querySelector(".cercle:nth-child(2)").classList.add("active")
      document.querySelector(".cercle:nth-child(3)").classList.remove("active")
      break

    case 2:
      document.querySelector(".cercle:nth-child(1)").classList.remove("active")
      document.querySelector(".cercle:nth-child(2)").classList.remove("active")
      document.querySelector(".cercle:nth-child(3)").classList.add("active")
      break
    default:
      console.log("error")
  }
}

/* Pour affichage de la popin */
function popin () {
  const noScroll            = document.querySelector("html")
  const needHelp            = document.querySelector(".help")
  const popin               = document.querySelector(".popin")
  const contentWrapperBlur  = document.querySelector(".contentWrapper")
  const cross               = document.querySelector(".cross") 
  
  needHelp.addEventListener("click", function(){
    popin.classList.add("activePopin")
    contentWrapperBlur.classList.add("blur")
    needHelp.classList.add("none")
    noScroll.classList.add("noScroll")

  })

  cross.addEventListener("click", function(){
    popin.classList.remove("activePopin")
    contentWrapperBlur.classList.remove("blur")
    needHelp.classList.remove("none")
    noScroll.classList.remove("noScroll")
  })
}

setInterval("augmenter()", 5000)
popin()