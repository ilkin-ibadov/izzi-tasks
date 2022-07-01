const url = 'https://mocki.io/v1/6bd9e6bb-658d-46c2-8fd9-8bd569d3f9b4'
const serviceContainer = document.getElementById('serviceContainer')

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    
    createServiceDiv(data)
}

getData()

function openSubservices(subserviceDiv){
    subserviceDiv.style.display = 'flex'
}

function createServiceDiv(data){
    data.data.services.map((service) => {
        const serviceDiv = document.createElement('div')
        serviceDiv.setAttribute('class', 'serviceDiv')
        serviceDiv.style.backgroundImage = `url(${service.cover_img.publicUrl})`
        const serviceDesc = document.createElement('div')
        serviceDesc.setAttribute('class', 'serviceDesc')
        const serviceTitle = document.createElement('h3')
        serviceTitle.innerText = service.title_en
        serviceDesc.appendChild(serviceTitle)
        serviceDiv.appendChild(serviceDesc)
        
        const subserviceDiv = document.createElement('div')
        subserviceDiv.setAttribute('class', 'subserviceDiv')
        service.subServices.map((subservice) => {
            const subserviceTitle = document.createElement('h3')
            subserviceTitle.innerText = subservice.title_en
            subserviceTitle.setAttribute('class', 'subserviceTitle')
            subserviceDiv.appendChild(subserviceTitle)
        })
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        container.appendChild(serviceDiv)
        container.appendChild(subserviceDiv)
        serviceContainer.appendChild(container)
        serviceDiv.addEventListener('click', () =>{
            openSubservices(subserviceDiv)
        })
        
    })
    
}




