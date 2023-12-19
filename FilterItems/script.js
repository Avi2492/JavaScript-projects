const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1559964746-4ba3b376cd5e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1551065490-2be7aa894585?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1555554317-766200eb80d6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1551065490-8c8066ea398a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1554602530-f415ffd0294a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1556160350-25a641d6c40e?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.unsplash.com/photo-1558584724-0e4d32ca55a4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Special veg Thali",
    category: "thali",
    price: 16.99,
    img: "https://5.imimg.com/data5/ANDROID/Default/2021/5/BH/PA/FA/8224426/product-jpeg-500x500.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');



const buttonsContainer = document.querySelector(".btn-container")
window.addEventListener('DOMContentLoaded', function() {
  displayMenuItems(menu);
  displayButtons();
  // const categories = menu.reduce((item, index) => {
  //   if (!item.includes(index.category)) {
  //     item.push(index.category)
  //   }
  //   return item
  // }, ['all'])
  // const categoryBtns = categories.map((category) => {
  //   return `<button class="filter-btn" type="button" value=${category}>${category}</button>
  //   `
  // }).join('');
  // console.log(categoryBtns)
  // buttonsContainer.innerHTML = categoryBtns;
  // const filterBtns = document.querySelectorAll('.filter-btn')
  // filterBtns.forEach(function(btn) {
  //   btn.addEventListener('click', function(e) {
  //     // const category = e.currentTarget.dataset.id;
  //     const category = e.target.value;
  //     const menuCategory = menu.filter(function(menuItem) {

  //       if (menuItem.category === category) {
  //         // console.log(menuCategory)
  //         return menuItem;
  //       }
  //     });
  //     // console.log(menuCategory)
  //     if (category === 'all') {
  //       console.log(menu)
  //       displayMenuItems(menu)
  //     } else {
  //       console.log(menuCategory)
  //       displayMenuItems(menuCategory)
  //     }
  //   })
  // })
})

// filterBtns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     // const category = e.currentTarget.dataset.id;
//     const category = e.target.value;
//     const menuCategory = menu.filter(function(menuItem) {

//       if (menuItem.category === category) {
//         // console.log(menuCategory)
//         return menuItem;
//       }
//     });
//     // console.log(menuCategory)
//     if (category === 'all') {
//       console.log(menu)
//       displayMenuItems(menu)
//     } else {
//       console.log(menuCategory)
//       displayMenuItems(menuCategory)
//     }
//   })
// })

// Hardcoded buttons while anyone updated data by new category
function displayButtons() {
  const categories = menu.reduce((item, index) => {
    if (!item.includes(index.category)) {
      item.push(index.category)
    }
    return item
  }, ['all'])
  const categoryBtns = categories.map((category) => {
    return `<button class="filter-btn" type="button" value=${category}>${category}</button>
    `
  }).join('');
  console.log(categoryBtns)
  buttonsContainer.innerHTML = categoryBtns;
  const filterBtns = buttonsContainer.querySelectorAll('.filter-btn')
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      // const category = e.currentTarget.dataset.id;
      const category = e.target.value;
      const menuCategory = menu.filter(function(menuItem) {

        if (menuItem.category === category) {
          // console.log(menuCategory)
          return menuItem;
        }
      });
      // console.log(menuCategory)
      if (category === 'all') {
        console.log(menu)
        displayMenuItems(menu)
      } else {
        console.log(menuCategory)
        displayMenuItems(menuCategory)
      }
    })
  })
}

function displayMenuItems(menuItems) {
  // console.log("Shake and Bake");
  let displayMenu = menuItems.map(function(e) {
    // console.log(e);
    return `<article class="menu-item">
        <img
          src=${e.img}
          class="photo">
        <div class="item-info">
          <header>
            <h4>${e.title}</h4>
            <h4 class="price">${e.price}</h4>
          </header>
          <p class="item-text">
            ${e.desc}
          </p>
        </div>
      </article>`;
  })
  displayMenu = displayMenu.join('')
  sectionCenter.innerHTML = displayMenu
}

