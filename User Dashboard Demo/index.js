const dropdownbtn = document.querySelector(".drop_down_btn");
const droplist = document.querySelector(".drop")
const sidebar = document.querySelector(".sidebar")
const btn = document.querySelector(".btn")

dropdownbtn.addEventListener("click", function() {
  
 const remove = droplist.classList.toggle("dropdownOn")
 dropdownbtn.classList.toggle("rotate")
 console.log(remove)

});
 
btn.addEventListener("click" ,function(e)
{
    console.log(e)
    sidebar.classList.toggle("activate")
    
})