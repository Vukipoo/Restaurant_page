

const createMenuPage = () =>  {
    const content = document.querySelector('.content')
    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')

    //1st dish
    const dish1 = document.createElement('div')
    dish1.classList.add('dish')
    dish1.innerHTML = '<img src="https://gypsyplate.com/wp-content/uploads/2021/01/korean-style-ground-pork-soup_square.jpg"><h3>Korean style ground pork soup</h3>'
    menuContent.appendChild(dish1)

    //2nd dish
    const dish2 = document.createElement('div')
    dish2.classList.add('dish')
    dish2.innerHTML = '<img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/5/2/KC0807H_Chicken-Ramen-Stir-Fry_s4x3.jpg.rend.hgtvcom.616.462.suffix/1452299253486.jpeg"><h3>Healthy chicken ramen stir fry</h3>'
    menuContent.appendChild(dish2)
    //3rd dish
    const dish3 = document.createElement('div')
    dish3.classList.add('dish')
    dish3.innerHTML = '<img src="https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/16893/ramencheeseburgercasserole.jpg?v=1&mode=crop&width=875&height=657"><h3>Cheeseburger ramen casserole</h3>'
    menuContent.appendChild(dish3)
    //4th dish
    const dish4 = document.createElement('div')
    dish4.classList.add('dish')
    dish4.innerHTML = '<img src="https://www.chilipeppermadness.com/wp-content/uploads/2022/01/Birria-Ramen-SQ.jpg"><h3>Birria ramen</h3>'
    menuContent.appendChild(dish4)
    //5th dish
    const dish5 = document.createElement('div')
    dish5.classList.add('dish')
    dish5.innerHTML = '<img src="https://inquiringchef.com/wp-content/uploads/2020/10/Beef-and-Broccoli-Ramen-Stir-Fry_square.jpg"><h3>Beef and broccoli ramen stir fry</h3>'
    menuContent.appendChild(dish5)
    //6th dish
    const dish6 = document.createElement('div')
    dish6.classList.add('dish')
    dish6.innerHTML = '<img src="https://cdn.shopify.com/s/files/1/0557/8545/5765/articles/Bacon_and_Egg_Ramen_480x480_80ad150f-2df4-483f-b43c-afd7153d0319.jpg?v=1635395568"><h3>Breakfast Ramen</h3>'
    menuContent.appendChild(dish6)
    //7th dish
    const dish7 = document.createElement('div')
    dish7.classList.add('dish')
    dish7.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGzDqHYifxg6fHW9Jlm4cAtElUZg8XR7kOBw&usqp=CAU"><h3>Ramen carbonara</h3>'
    menuContent.appendChild(dish7)
    //8th dish
    const dish8 = document.createElement('div')
    dish8.classList.add('dish')
    dish8.innerHTML = '<img src="https://inquiringchef.com/wp-content/uploads/2020/10/Beef-and-Broccoli-Ramen-Stir-Fry-7.jpg"><h3>Beef ramen stir fry</h3>'
    menuContent.appendChild(dish8)


    content.appendChild(menuContent)
}

export default createMenuPage