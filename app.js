const menu = [
  {
    id: 1,
    title: "super kway kar",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?cereal",
  },
  {
    id: 2,
    title: "sunday nat phaw",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x300?tea",
  },
  {
    id: 3,
    title: "sunday tea mix",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?tea",
  },
  {
    id: 4,
    title: "sunday coffee",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?coffee",
  },
  {
    id: 5,
    title: "match",
    category: "place1",
    price: 400,
    img: "https://source.unsplash.com/400x400?matchbox",
  },
  {
    id: 6,
    title: "red onion",
    category: "curry",
    price: 400,
    img: "https://source.unsplash.com/400x400?onion",
  },
  {
    id: 7,
    title: "white onion",
    category: "curry",
    price: 700,
    img: "https://source.unsplash.com/400x300?onion",
  },
  {
    id: 8,
    title: "ginger",
    category: "curry",
    price: 300,
    img: "https://source.unsplash.com/400x400?ginger",
  },
  {
    id: 9,
    title: "eggs",
    category: "curry",
    price: 200 - 230,
    img: "https://source.unsplash.com/400x400?eggs",
  },
  {
    id: 10,
    title: "duck's eggs",
    category: "curry",
    price: 300,
    img: "https://source.unsplash.com/400x300?egg",
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
