function showImg() {
  let getDiv = document.querySelector(".gallery");
  getDiv.style.display = "inline-block";
}

// let dupa = document.addEventListener("click", showImg);

document.addEventListener("click", function(evt) {
    let getDiv = document.querySelector(".gallery");
    if (!evt.target.classList.contains("gallery"))
    {
        showImg()
    }
    else{
        let getDiv = document.querySelector(".gallery");
  getDiv.style.display = "hidden";
    }
})


