function opend(){
    document.getElementById("cla").innerHTML= "What is your stress Problem <button class='bb' onclick='popu()'>⯅</button>"
    bk="<input style='color: black; background-color: whitesmoke; width: 80%;'  type='text'>"
    document.getElementById("ponp").innerHTML= bk
}
function fotp(){
if (localStorage.getItem("name") == null) {
  
} else {
    window.location="room.html"
    localStorage.setItem("link", window.location.href)
}
}
function nextpg(){
    namep= document.getElementById("ppp1").value
    if(namep=="" || document.getElementById("mako").value == "no" ){
            alert("Type Your name , age")
    }else{
        localStorage.setItem("name", namep)
        window.location="room.html"
        localStorage.setItem("link", window.location.href)
    }   
}
function reop(){
    location.reload()
  }