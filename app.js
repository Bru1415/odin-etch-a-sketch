const gE_gridContainer = document.querySelector('#container');
const gE_newGridBtn = document.querySelector('#new-grid');

let gV_numberOfColumns = 16;


gE_gridContainer.style.cssText = gE_gridContainer.style.cssText +
    `grid-template-columns: repeat(${gV_numberOfColumns}, 6rem);grid-template-rows: repeat(${gV_numberOfColumns}, 6rem);`;




const gF_makeGrid = (event) => {

    for (let i = 0; i < gV_numberOfColumns ** 2; i++) {
        const gridElement = document.createElement('div');
        // gridElement.innerText = i;

        gE_gridContainer.append(gridElement);

    }

}

window.addEventListener('load', gF_makeGrid);

gE_newGridBtn.addEventListener('click', (event) => {

    document.getElementById('draw-area');
    gV_numberOfColumns = prompt('How many columns do you want');
    gF_makeGrid(event);

})

const gF_paint = (event) => {
    event.target.classList.add('paint');

}

gE_gridContainer.addEventListener('mousedown', (event) => {

    gE_gridContainer.addEventListener('mouseover', gF_paint);

})


gE_gridContainer.addEventListener('mouseup', (event) => {

    gE_gridContainer.removeEventListener('mouseover', gF_paint);


})