

const createTabs = () => {
    const content = document.querySelector('.content')
    //create 3 div elements
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    //set ids for the divs
    div1.setAttribute('id', 'home-button')
    div2.setAttribute('id', 'menu-button')   
    div3.setAttribute('id', 'contact-button')
    //set classs for the divs
    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')
    //set text content for the tabs
    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'
    //append
    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)

        

}

export default createTabs