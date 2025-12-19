
const categoryService = window.document.getElementById('btnCategoryService');
let linksHTML = "";

let categoryServiceVetor = [

    "Advogado",
    "Arquiteto",
    "Serralheiro",
    "Eletricista",
    "Jardineiro",
    "Mecânico",
    "Marceneiro",
    "Pedreiro",
    "Gesseiro",
    "Pedreiro",

]

for ( let contCategory = 0; contCategory < categoryServiceVetor.length; contCategory++ ) {

     linksHTML += `<a href="#"> ${categoryServiceVetor[contCategory]} </a>`;
}

categoryService.innerHTML = linksHTML;