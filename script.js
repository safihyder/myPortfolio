console.log("Script is running..............");
let sidebarList = document.querySelectorAll('.sidebar_li');
// BOTTOM LINE
sidebarList.forEach(list => {
    list.addEventListener('mouseenter', () => {
        // console.log("Mouse Enter")
        list.nextElementSibling.classList.add("btn_line_expand");
    })
})
sidebarList.forEach(list => {
    list.addEventListener('mouseout', () => {
        // console.log("Mouse out")
        list.nextElementSibling.classList.remove("btn_line_expand");
    })
})
//Intersection Observer
const target = document.querySelector("#animateOnVisit");
const skillbox = document.querySelectorAll(".skillbox");
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
};
const observer = new IntersectionObserver(function (entries) {
    // console.log(entries)
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const style = document.createElement('style');
            style.innerHTML = `
            .aboutMe .skill_html {
                width: 80%;
                background-color: red;
                animation: html 2s;
            }
            
            .aboutMe .skill_css {
                width: 70%;
                background-color: rgb(35, 18, 221);
                animation: css 2s;
            }
            
            .aboutMe .skill_js {
                width: 60%;
                background-color: yellow;
                animation: js 2s;
            }
            
            .aboutMe .skill_react {
                width: 50%;
                background-color: #02d8fe;
                animation: react 2s;
            }
            
            .aboutMe .skill_nodejs {
                width: 40%;
                background-color: #559f45;
                animation: node 2s;
            }
            
            .aboutMe .skill_express {
                width: 40%;
                background-color: #828282;
                animation: express 2s;
            }
            
            .aboutMe .skill_mongo {
                width: 30%;
                background-color: #6fb15c;
                animation: mongo 2s;
            }
            
            .aboutMe .skill_php {
                width: 80%;
                background-color: #2e568e;
                animation: php 2s;
            }
           
    `;
            document.head.appendChild(style);
        }
    })
}, options)
observer.observe(target);