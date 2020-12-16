let section = document.querySelectorAll(".section")
let dot =document.querySelectorAll(".dot-section")
let body = document.body
let content = document.querySelectorAll(".section-content")
let mainContent = document.querySelector(".fullPage")
let sectionFirst=document.querySelector(".section-1")
let sectionFourCT =document.querySelectorAll(".section-content__education")
let sectionFour=document.querySelector(".section-4")
let counter = 0
let sectionLast = document.querySelector(".section-5")
let status = true
let contentCount = 0
let dotCount = 0

let startPoint = document.body.getBoundingClientRect().top
let progress = document.querySelector('.body-progress')
content[0].classList.add("active")
dot[0].classList.add("color-act")
var dotAct=()=>{
    for (let i = 0; i < dot.length; i++) {
        let dots = dot[i];
        dots.addEventListener("click",()=>{
            if (i>0) {
                if (i>counter) {
                    counter=i-1
                    for (let a = 0; a < i; a++) {
                        let sections = section[a];
                        sections.classList.add("hide")
                    }
                    dotCount=i
                    contentCount=i
                    content.forEach(contents => {
                        contents.classList.remove("active")
                    });
                    content[contentCount].classList.add("active")
                    dot.forEach(dots => {
                        dots.classList.remove("color-act")
                    });
                    dot[dotCount].classList.add("color-act")
                    counter=i
                    counter,dotCount,contentCount
                }
                else {
                    counter=i-1
                    section.forEach(sections => {
                        sections.classList.remove("hide")
                    });
                    for (let a = 0; a < i; a++) {
                        let sections = section[a];
                        sections.classList.add("hide")
                    }
                    section[counter].classList.add("hide")
                    contentCount=i
                    content.forEach(contents => {
                        contents.classList.remove("active")
                    });
                    content[contentCount].classList.add("active")
                    dotCount=i
                    dot.forEach(dots => {
                        dots.classList.remove("color-act")
                    });
                    dot[dotCount].classList.add("color-act")
                    counter=i
                    
                }
            }
            else{
                i=0
                counter=i
                if (section[counter] === sectionFirst) {
                    for (let j = 0; j < section.length; j++) {
                        section[j].classList.remove("hide")
                    }
                }
                section[counter].classList.remove("hide")
                contentCount=i
                content[contentCount].classList.add("active")
                dotCount=i
                dot.forEach(dots => {
                    dots.classList.remove("color-act")
                });
                dot[dotCount].classList.add("color-act")
               
                
            }
        })
        dot[i].addEventListener("transitionrun",()=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        
    }
    
}
dotAct()

window.addEventListener("mousewheel",(e) => {
    if (status===true) {
        scrollContent(e)
    }
    else if(status===false){
        return 
    }
})
function xyz(){
    if (section[counter].scrollHeight>window.innerHeight) {
        body.classList.add("unhide")
        
    } else {
        body.classList.remove("unhide")
    }
    status =false
    console.log(status);
}
for (let i = 0; i < content.length; i++) {
    let sections = content[i];
    sections.addEventListener("transitionstart",xyz)
}

let contentScroll = ()=>{
    if (section[counter].clientHeight>window.innerHeight) {
        window.addEventListener("scroll",abc)
    } 
    else{
        status=true
    }
    console.log(status);
}
function abc(){
    if (section[counter].scrollHeight-scrollY==section[counter].clientHeight||scrollY==0) {
            status=true
        // console.log(status);
   } 
   else if(window.innerHeight+scrollY==section[counter].clientHeight||(window.innerHeight+scrollY)-0.25==section[counter].scrollHeight||(window.innerHeight+scrollY)+0.25==section[counter].scrollHeight){
        status=true
   }
   else{status=false}
   console.log(status);
}
for (let i = 0; i < content.length; i++){
    let sections = content[i];
    sections.addEventListener("transitionend",contentScroll)
}

let scrollContent = (e) => {
    if (e.deltaY > 0) {
        
        if (counter < section.length - 1 && contentCount<content.length-1) {
            dotCount+=1
            contentCount+=1
            section[counter].classList.add("hide")
            content.forEach(contents => {
                contents.classList.remove("active")
            });
            content[contentCount].classList.add("active")
            dot.forEach(dots => {
                dots.classList.remove("color-act")
                
            });
            dot[dotCount].classList.add("color-act")
            counter += 1
            
        } else {
            if (section[counter] === sectionLast) {
                section.forEach(sections=>sections.classList.remove("hide"))
                for (let i = 0; i < content.length; i++) {
                    content[i].classList.remove("active")
                    dot[i].classList.remove("color-act")
                }
            }
            dot[0].classList.add("color-act")
            content[0].classList.add("active")
            counter = 0
            contentCount=0
            dotCount=0
            
        }
        
    }
    else {
        
        if (counter > 0) {
            content.forEach(contents => {
                contents.classList.remove("active")
            });
            dot.forEach(dots => {
                dots.classList.remove("color-act")
            });
            dotCount-=1
            contentCount-=1
            counter -= 1
            content[counter].classList.add("active")
            section[counter].classList.remove("hide")
            dot[counter].classList.add("color-act")
            
        } 
        else{
            counter = 0,
            contentCount=0,
            dotCount=0
        }
    }
    
}
for (let i = 0; i < sectionFourCT.length; i++) {
    sectionFourCT[i].addEventListener("mouseenter",()=>{
        sectionFour.classList.add("bg-act")
    })
    sectionFourCT[i].addEventListener("mouseleave",()=>{
        sectionFour.classList.remove("bg-act") 
    })
    
}


// function customScroll() {
//     let height = window.innerHeight+scrollY;
//     let scrolled = (startPoint / height) * 100;
//     progress.style.height = scrolled + "%";
//   }
// window.addEventListener('scroll',customScroll)
