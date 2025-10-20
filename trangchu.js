let select = document.getElementById("ct");

let imgDT = document.getElementById("docthan");
let imgHT = document.getElementById("hongty");
let imgTC = document.getElementById("thucuoi");

select.addEventListener("change", function () {
    let idOption = this.options[this.selectedIndex].id;

    [imgDT, imgHT, imgTC].forEach(img => img.classList.remove("show"));

    if (idOption === "btn-dt") imgDT.classList.add("show");
    if (idOption === "btn-ht") imgHT.classList.add("show");
    if (idOption === "btn-tc") imgTC.classList.add("show");
});