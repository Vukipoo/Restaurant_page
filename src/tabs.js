import createRestaurantHomePage from "./restaurant"
import createMenuPage from "./menu"
import createContactPage from "./contact"

const createTabs = () => {
    const header = document.querySelector('.header')
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
    header.appendChild(div1)
    header.appendChild(div2)
    header.appendChild(div3)
    //add event listeners
    div1.addEventListener('click', ()=> {
        clearContent()
        createRestaurantHomePage()
    })
    div2.addEventListener('click', ()=> {
        clearContent()
        createMenuPage()
    })
    div3.addEventListener('click', ()=> {
        clearContent()
        createContactPage()
    })

        

}


function clearContent(){
    const content = document.querySelector('.content')
    const contentElements = document.querySelectorAll('.page-content, .menu-content, .contact-content');

   contentElements.forEach(element => {
    if(element) {
        content.removeChild(element)
    }
   })
    
}
export default createTabs

