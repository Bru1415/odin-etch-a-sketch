
const gE_gridContainer = document.querySelector('#container');

for(let i = 0; i < 256; i++){
const gridElement = document.createElement('div');
// gridElement.innerText = i;

gE_gridContainer.append(gridElement);


}

const gF_paint = (event) => {
    event.target.classList.add('paint');

}

gE_gridContainer.addEventListener('mousedown', (event)=>{

    gE_gridContainer.addEventListener('mouseover', gF_paint); 

})


gE_gridContainer.addEventListener('mouseup', (event)=>{

    gE_gridContainer.removeEventListener('mouseover', gF_paint);


})