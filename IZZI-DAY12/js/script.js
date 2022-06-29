const numCount = document.getElementById('numCount')
const submitNum = document.getElementById('submitNum')
const enterNum = document.getElementById('enterNum')
const imgContainer = document.getElementById('imgContainer')
const add = document.getElementById('add')
const replace = document.getElementById('replace')
const del = document.getElementById('delete')
const controls = document.getElementById('controls')

const imgSrc = 'https://picsum.photos/300/300'
var num = numCount.valueAsNumber

let imgArr = Array(num).fill(imgSrc)



            
function appendImg(){
    imgContainer.innerHTML = ''
    enterNum.style.display = 'none'
    controls.style.display = 'block'
    imgArr.map((img, index) => {
        const image = document.createElement('img')
        image.setAttribute('src', img)
        image.setAttribute('id', index)
        imgContainer.appendChild(image)
    })
    
}

function addImg(){
    const addPrompt = prompt('Please enter a valid url for the image')
    imgArr.push(addPrompt)
    appendImg()
}

function replaceImg(){
    const indexPrompt = prompt('Please enter the index of the image you want to replace')
    const newImgPrompt = prompt('Please enter a valid url for the new image')
    imgArr[indexPrompt] = newImgPrompt
    appendImg()
}

function delImg(){
    const delPrompt = prompt('Please enter the index of the image you want to delete')
    delete imgArr[delPrompt]
    appendImg()
}



submitNum.addEventListener('click', () =>{
    appendImg()
    
})

add.addEventListener('click', () =>{
    addImg()
})

replace.addEventListener('click', () =>{
    replaceImg()
})

del.addEventListener('click', () =>{
    delImg()
})