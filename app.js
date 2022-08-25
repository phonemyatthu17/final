const menu = [
  {
    id: 1,
    title: "super kway kar",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?cereal",
    desc: ` `,
  },
  {
    id: 2,
    title: "sunday nat phaw",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x300?tea",
    desc: ``,
  },
  {
    id: 3,
    title: "sunday tea mix",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?tea",
    desc: ``,
  },
  {
    id: 4,
    title: "sunday coffee",
    category: "coffee",
    price: 250,
    img: "https://source.unsplash.com/400x400?coffee",
    desc: ``,
  },
  {
    id: 5,
    title: "match",
    category: "place1",
    price: 400,
    img: "https://source.unsplash.com/400x400?matchbox",
    desc: ``,
  },
  {
    id: 6,
    title: "red onion",
    category: "curry",
    price: 400,
    img: "https://source.unsplash.com/400x400?onion",
    desc: ``,
  },
  {
    id: 7,
    title: "white onion",
    category: "curry",
    price: 700,
    img: "https://source.unsplash.com/400x300?onion",
    desc: ``,
  },
  {
    id: 8,
    title: "ginger",
    category: "curry",
    price: 300,
    img: "https://source.unsplash.com/400x400?ginger",
    desc: ``,
  },
  {
    id: 9,
    title: "eggs",
    category: "curry",
    price: 200 - 230,
    img: "https://source.unsplash.com/400x400?eggs",
    desc: ``,
  },
  {
    id: 10,
    title: "duck's eggs",
    category: "curry",
    price: 300,
    img: "https://source.unsplash.com/400x300?egg",
    desc: ``,
  },
  {
    id: 11,
    title: "eye noodle",
    category: "noodles",
    price: 550,
    img: "https://source.unsplash.com/400x300?noodle",
    desc: ``,
  },
  {
    id: 12,
    title: "mama korea kitchen",
    category: "noodles",
    price: 350,
    img: "https://source.unsplash.com/400x310?noodle",
    desc: ``,
  },
  {
    id: 13,
    title: "MAMA SEA",
    category: "noodles",
    price: 300,
    img: "https://source.unsplash.com/400x320?noodle",
    desc: ``,
  },
  {
    id: 14,
    title: "Xcite",
    category: "noodles",
    price: 450,
    img: "https://source.unsplash.com/400x330?noodle",
    desc: ``,
  },
  {
    id: 15,
    title: "Ei Ei",
    category: "noodles",
    price: 300,
    img: "https://source.unsplash.com/400x340?noodle",
    desc: ``,
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
  sectionCenter.innerHTML = displayMenu;

  if (searchWord.length == 0) {
    sectionCenter.innerHTML = ``;
    return;
  }

  if (menuItems.length == 0) {
    sectionCenter.innerHTML = `<h1 class="no-match">No match found of "<span class="clr-inside">${searchWord}</span>"</h1>`;
  }
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
  // console.log(filterBtns);

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

// get search bar & it's parent
const searchContainer = document.querySelector(".search-container");
const searchBar = document.querySelector(".search-bar");

let searchWord = searchBar.value;

searchBar.addEventListener("keyup", function (e) {
  let searchWord = e.target.value;
  if (searchWord == 0) return;

  let checkItem;

  const filterFunc = menu.filter(function (f) {
    checkItem = f.title.toLowerCase().includes(searchWord.toLowerCase());

    if (checkItem) {
      return f;
    }
  });

  diplayMenuItems(filterFunc);
});
