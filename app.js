const gE_gridContainer = document.querySelector('#container');
const gE_newGridBtn = document.querySelector('#new-grid');
const gE_colorPicker = document.querySelector('#color-picker')
gV_color = '#000000';
const gE_randomColorBtn = document.querySelector('#randomColor-btn');
let gV_isRandomColorEnabled = false;
let gV_isColorPickerEnabled = false;

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

    gV_isColorPickerEnabled = true;
    gV_color = event.target.value;

})

gE_gridContainer.addEventListener('mousedown', (event) => {

    if(gV_isRandomColorEnabled){

        const rgbArray = [];
    for(let i = 0; i< 3; i++){
        rgbArray.push(Math.round(Math.random()*255));
    }
    let randomColor = `rgb(${rgbArray[0]},${rgbArray[1]}, ${rgbArray[2]})`;
    gV_color = randomColor;
    }else if(!gV_isRandomColorEnabled && !gV_isColorPickerEnabled){
        gV_color = '#000000';
    }
    

    gE_gridContainer.addEventListener('mouseover', gF_paint);

})


gE_gridContainer.addEventListener('mouseup', (event) => {

    gE_gridContainer.removeEventListener('mouseover', gF_paint);

})

gE_randomColorBtn.addEventListener('click', (event)=>{
 
    gV_isRandomColorEnabled = !gV_isRandomColorEnabled;
    gV_isColorPickerEnabled = false;

})
