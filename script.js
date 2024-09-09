let toggleBtn
let headerList
toggleBtn = document.querySelector(".toggle")
headerList = document.querySelector("#headerlist")
toggleBtn.onclick = () => {
    if (headerList.style.display === "none"){
        headerList.style.display = "block"
    }
    else{
        headerList.style.display = "none"
    }
}