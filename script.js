console.log("Script is running..............");
let sidebarList=document.querySelectorAll('.sidebar_li');
// BOTTOM LINE
sidebarList.forEach(list=>{
    list.addEventListener('mouseenter',()=>{
        // console.log("Mouse Enter")
        list.nextElementSibling.classList.add("btn_line_expand");
        
    })
})
sidebarList.forEach(list=>{
    list.addEventListener('mouseout',()=>{
        // console.log("Mouse out")
        list.nextElementSibling.classList.remove("btn_line_expand");
        
    })
})
