
// function loadingAnimation() {

//   var tl = gsap.timeline()
//   tl.from("#page1", {
//       opacity: 0,
//       duration: 0.2,
//       delay: 0.2
//   })
//   tl.from("#page1", {
//       transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
//       borderRadius: "150px",
//       duration: 2,
//       ease: "expo.out"
//   })
//   tl.from("nav", {
//       opacity: 0,
//       delay: -0.2
//   })
//   tl.from("#page1 h1, #page1 p, #page1 div", {
//       opacity: 0,
//       duration: 0.5,
//       stagger: 0.2
//   })
// }
function navAnimation(){
  var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave",function(){
      let tl=gsap.timeline()
      tl.to(".nav-part2 h5 span",{
        y:25,
        stagger:{
          amount :0.2
        }
      })
      tl.to(".nav-part2 h5",{
        display:"none",duration:0.1
      })
      tl.to("#nav-bottom",{
        height:0,duration : 0.1
      })
    })
}
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem")

  rightElems.forEach(function (elem) {
      elem.addEventListener("mouseenter", function () {

          gsap.to(elem.childNodes[3], {
              opacity: 1,
              scale: 1
          })
      })
      elem.addEventListener("mouseleave", function () {
          gsap.to(elem.childNodes[3], {
              opacity: 0,
              scale: 0
          })
      })
      elem.addEventListener("mousemove", function (dets) {

          gsap.to(elem.childNodes[3], {
              x: dets.x - elem.getBoundingClientRect().x - 90,
              y: dets.y - elem.getBoundingClientRect().y - 150
          })
      })
  })
}
function page3Animation(){

  var page3Center =document.querySelector(".page3-center")
var video =document.querySelector("#page3 video")

page3Center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  })
})

video.addEventListener("click",function(){
  video.pause()
  gsap.to(video,{
    transform:"scaleX(0.7) scaleY(0)",
    opacity:0,
    borderRadius:"30px"
  })
})

}
function page5AnimationVideo(){
  var sections=document.querySelectorAll(".sec-right")
sections.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity=1
    elem.childNodes[3].play()
  })
  elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity=0
    elem.childNodes[3].load()
  })
})

}
 function animationpage9(){
  gsap.from("#page9-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger:{
      trigger:"#page9-part2",
      scroller:"body",
      start:"top 100%",
      end:"top 10%",
      scrub:true
    }
})

gsap.from("#page9-part3 h4", {
  x: 0,
  duration: 1,
  scrollTrigger:{
    trigger:"#page9-part3",
    scroller:"body",
    start:"top 100%",
    end:"top 10%",
    scrub:true
  }
})
gsap.from("#page9-part4 h4", {
x: 0,
duration: 1,
scrollTrigger:{
  trigger:"#page9-part4",
  scroller:"body",
  start:"top 100%",
  end:"top 10%",
  scrub:true
}
})
 }


//  locomotiveAnimation()

animationpage9()
page5AnimationVideo()
page3Animation()
navAnimation()
page2Animation()
// loadingAnimation()

function loadingAnimation(){
  var tl = gsap.timeline()

  tl.from("#page1",{
      opacity: 0,
      duration: 0.2,
      delay: 0.1
  })

  tl.from("#page1",{
      transform: "scaleX(0.5) scaleY(0.01) translateY(80%)",
      borderRadius: "50px",
      duration: 1.5,
      ease: "expo.out"
  })

  tl.from("nav", {
      opacity: 0,
      delay: -0.2
  })

  tl.from("#page1 h1, #page1 p, #page1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
  })
}

loadingAnimation();