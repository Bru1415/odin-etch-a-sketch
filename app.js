const gE_gridContainer = document.querySelector('#container');
const gE_newGridBtn = document.querySelector('#new-grid');
const gE_colorPicker = document.querySelector('#color-picker')
gV_color = '#000000';


let gV_numberOfColumns = 16;


gE_gridContainer.style.cssText = gE_gridContainer.style.cssText +
    `grid-template-columns: repeat(${gV_numberOfColumns}, ${(16/gV_numberOfColumns)*6}rem);grid-template-rows: repeat(${gV_numberOfColumns},${(16/gV_numberOfColumns)*6}rem);`;




const gF_makeGrid = (event) => {

    for (let i = 0; i < gV_numberOfColumns ** 2; i++) {
        const gridElement = document.createElement('div');
        // gridElement.innerText = i;

        gE_gridContainer.append(gridElement);

    }

}
const gF_paint = (event) => {
    // event.target.classList.add('paint');
    event.target.style.cssText = `background-color: ${gV_color}`;

}

window.addEventListener('load', gF_makeGrid);

gE_newGridBtn.addEventListener('click', (event) => {

    gE_gridContainer.replaceChildren();
    gV_numberOfColumns = prompt('How many columns do you want');
    gE_gridContainer.style.cssText = gE_gridContainer.style.cssText +
    `grid-template-columns: repeat(${gV_numberOfColumns}, ${(16/gV_numberOfColumns)*6}rem);grid-template-rows: repeat(${gV_numberOfColumns},${(16/gV_numberOfColumns)*6}rem);`;
    gF_makeGrid(event);

})

gE_colorPicker.addEventListener('change', (event) => {
gV_color = event.target.value;

})

gE_gridContainer.addEventListener('mousedown', (event) => {

    gE_gridContainer.addEventListener('mouseover', gF_paint);

})


gE_gridContainer.addEventListener('mouseup', (event) => {

    gE_gridContainer.removeEventListener('mouseover', gF_paint);


})

