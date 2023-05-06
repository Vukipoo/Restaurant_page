

const createContactPage = () => {
    const content = document.querySelector('.content')
    const contactPage = document.createElement('div')
    contactPage.classList.add('contact-content')

    //phone number
    const phone = document.createElement('div')
    phone.classList.add('phone')
    phone.innerHTML = '<h1>123 456 789</h1>'
    contactPage.appendChild(phone)

    //location
    const location = document.createElement('div')
    location.classList.add('location')
    location.innerHTML = '<h1>Tsuta, フロンティア代々木上原 B1 3 Chome-2-4 Nishihara, Shibuya City, Tokyo 151-0066, Japan</h1><img src="https://www.iexposure.com/insights-images/google-places-label/completed-google-places-label.png">'
    contactPage.appendChild(location)

    
    content.appendChild(contactPage)

}


export default createContactPage