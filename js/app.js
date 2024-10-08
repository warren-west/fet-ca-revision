/**
 * TABLE STUFF
 */

const tblSuperheroes = document.getElementById("tbl-superheroes")

// Bruce Wayne
// Batman
// https://www.cartoonpics.net/data/media/14/batman_cartoon_style.jpg


function addRow(shName, shAlias, shImg) {
    const newRow = document.createElement("tr")
    const newData1 = document.createElement("td")
    const newData2 = document.createElement("td")
    const newData3 = document.createElement("td")
    
    newData1.innerHTML = shName
    newData2.innerHTML = shAlias
    
    const img1 = document.createElement("img")
    img1.src = shImg
    
    newData3.appendChild(img1)
    
    newRow.appendChild(newData1)
    newRow.appendChild(newData2)
    newRow.appendChild(newData3)
    
    tblSuperheroes.appendChild(newRow)
}

addRow("Bruce Wayne", "Batman", "https://www.cartoonpics.net/data/media/14/batman_cartoon_style.jpg")
addRow("Peter Parker", "Spiderman", "https://www.cartoonpics.net/data/media/35/spider_handsome.jpg")
addRow("Clark Kent", "Superman", "https://www.cartoonpics.net/data/media/46/Action_comics_Superman.jpg")

// Other data:
// Peter Parker
// Spiderman
// https://www.cartoonpics.net/data/media/35/spider_handsome.jpg

// Clark Kent
// Superman
// https://www.cartoonpics.net/data/media/46/Action_comics_Superman.jpg

/**
 * Ways to approach toggling
 */

let isHidden = true

$("#btn-show-secret").on("click", function() {

    console.log("button clicked");

    isHidden = !isHidden
    $("#secret").toggleClass("hidden", isHidden)
    
})

$("#cbx-show-secret").on("change", function() {
    // console.log("checkbox clicked");

    let isChecked = $(this).prop("checked")
    // $("#secret").toggleClass("hidden", !isChecked)

    let lengthOfCheckedBoxes = $("#cbx-show-secret:checked").length
    $("#secret").toggleClass("hidden", lengthOfCheckedBoxes == 0)
})