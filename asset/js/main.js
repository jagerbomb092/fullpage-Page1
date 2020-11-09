let section = document.querySelectorAll(".section")
let dot =document.querySelectorAll(".dot-section")
let body = document.body
let content = document.querySelectorAll(".section-content")
let mainContent = document.querySelector(".fullPage")
let sectionFirst=document.querySelector(".section-1")
let counter = 0
let sectionLast = document.querySelector(".section-5")
let status = true
let contentCount = 0
let dotCount = 0

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
                    return counter,dotCount,contentCount
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
                    return counter,dotCount,contentCount
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
               
                return counter,dotCount,contentCount
            }
        })
    }
}
dotAct()
window.addEventListener("mousewheel",(e) => {
    
    let scrollContent = () => {
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
                    for (let i = 0; i < section.length; i++) {
                        section[i].classList.remove("hide")
                    }
                    for (let i = 0; i < content.length; i++) {
                        content[i].classList.remove("active")
                        dot[i].classList.remove("color-act")
                    }
                }
                dot[0].classList.add("color-act")
                content[0].classList.add("active")
                return counter = 0,
                contentCount=0,
                dotCount=0
                
            }
            return counter,dotCount,contentCount
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
                return counter = 0,
                contentCount=0,
                dotCount=0
            }
        }
        
    }
    content[counter].addEventListener("transitionstart",()=>{
        if (section[counter].clientHeight>window.innerHeight) {
            body.classList.add("unhide")
        } else {
            body.classList.remove("unhide")
        }
        e.stopImmediatePropagation()
        status=false
        return status =false
    })
    content[counter].addEventListener("transitionrun",()=>{
        e.stopImmediatePropagation()
        status=false
        return status =false
    })
    
    if (status) {
        
        scrollContent()
    }
    else{
        e.stopImmediatePropagation()
        return false
    }
    let contentScroll = ()=>{
        if (section[counter].clientHeight>window.innerHeight) {
                window.addEventListener("scroll",()=>{
                    
                    if (section[counter].scrollHeight-scrollY===section[counter].clientHeight) {
                        return status =true
                    } 
                    else if(section[counter].scrollHeight-scrollY==window.innerHeight){
                    
                        return status =true
                        
                    }
                    else{return status =false}
                    
                })
            } 
        else{
            return status =true
        }
    }
    
    content[counter].addEventListener("transitionend",()=>{
        contentScroll()
        
    })
        
})

