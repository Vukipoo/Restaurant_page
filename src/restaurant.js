

const createRestaurantHomePage = () => {

    const content = document.querySelector('.content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //create and append headline 
    const headline = document.createElement('div')
    headline.innerHTML = '<h1>This is the best restaurant ever</h1>'
    headline.classList.add('headline')
    pageContent.appendChild(headline)

    
    const chefs = document.createElement('div')
    chefs.innerHTML = '<div class="chef" id="gordonRamzey"><img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2018%2F09%2Fgordon-ramsay-hells-kitchen-02-2000.jpg&q=60"><h3>Gordon Ramzey <br>"Best ramen ever"</h3></div><div class="chef" id="guyFieri"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdS9NLPuaBrgemMmZdRN9_hTFpxJjJ9P82w&usqp=CAU"><h3>Guy Fiery <br>"Absolutely amazing!"</h3></div><div class="chef" id="michaelCaines"><img src="https://p2d7x8x2.stackpathcdn.com/content/uploads/2020/10/Screen-Shot-2020-10-06-at-11.47.09.png"><h3>Michael Caines<br>"This is my go to ramen spot"</h3></div>'
    chefs.classList.add('chefs')
    pageContent.appendChild(chefs)


    const description = document.createElement('div')
    description.innerHTML = '<p>The restaurant has been featured on the 2012 Hokkaido Special Edition Michelin Guide and subsequently received the Bib Gourmand title in 2017. To be selected for Bib Gourmand, restaurants have to be deemed as good quality and good value by a team of ​inspectors at Michelin.'


    description.classList.add('description')
    pageContent.appendChild(description)

    

    //append the page-content div to the content
    content.appendChild(pageContent)
}

export default createRestaurantHomePage