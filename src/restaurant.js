

const createRestaurantHomePage = () => {

    const content = document.querySelector('.content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    //create and append headline 
    const headline = document.createElement('div')
    headline.innerHTML = '<h1>This is the best restaurant ever</h1>'
    pageContent.appendChild(headline)

    //create and append description
    const description = document.createElement('div')
    description.innerHTML = '<p>Madison Square Park, one of the most beautiful parks in Manhattan, and sits at the base of a historic Art Deco building on the corner of East 24th Street and Madison Avenue. Located here since 1998, it underwent a full-scale renovation and redesign in the summer of 2017.The restaurant has been owned by Chef Daniel Humm since 2011 and during that time it has evolved considerably, both in food and in experience. Our tasting menu consists of entirely plant-based courses. Guests can also visit the bar for a more abbreviated version of the tasting menu, light snacks, or simply for a cocktail or glass of wine.</p>'
    pageContent.appendChild(description)

    //create and append image
/*     const backgroundImg = document.createElement('div')
    backgroundImg.innerHTML =  '<img src="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage121578650-50-vb1864323-GRBSKSouthPlaceAugust202114-2-Copy.jpg">'
    backgroundImg.classList.add('background')
    pageContent.appendChild(backgroundImg) */

    //append the page-content div to the content
    content.appendChild(pageContent)
}

export default createRestaurantHomePage