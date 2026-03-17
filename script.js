// ==== script.js ====

// ── MENU DATA ──
const menuItems = [
  {
    name: "Classic Burger",
    category: "meals",
    price: "₹249",
    desc: "Juicy beef patty, fresh lettuce, tomato & special sauce",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    name: "Paneer Tikka",
    category: "snacks",
    price: "₹199",
    desc: "Grilled paneer in smoky tikka marinade with mint chutney",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  },
  {
    name: "Mango Lassi",
    category: "drinks",
    price: "₹99",
    desc: "Thick, creamy yogurt blended with fresh Alphonso mango",
    img: "https://images.unsplash.com/photo-1697642452436-9c40773cbcbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbmdvJTIwbGFzc2l8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Chocolate Lava Cake",
    category: "desserts",
    price: "₹179",
    desc: "Warm chocolate cake with a gooey molten center",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80",
  },
  {
    name: "Chicken Biryani",
    category: "meals",
    price: "₹329",
    desc: "Aromatic basmati rice cooked with tender chicken & spices",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
  },
  {
    name: "Veg Spring Rolls",
    category: "snacks",
    price: "₹149",
    desc: "Crispy rolls filled with stir-fried veggies & noodles",
    img: "https://media.istockphoto.com/id/2207965703/photo/deep-fried-spring-rolls-with-salad-as-an-appetizer.webp?a=1&b=1&s=612x612&w=0&k=20&c=7tLjHPMKKNrayfIap91bx5q2TXW7xHibBtOk8Azm44k=",
    
  },
  {
    name: "Cold Coffee",
    category: "drinks",
    price: "₹129",
    desc: "Chilled espresso blended with cream and caramel drizzle",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
  },
  {
    name: "Gulab Jamun",
    category: "desserts",
    price: "₹89",
    desc: "Soft milk-solid dumplings soaked in rose-flavored syrup",
    img: "https://media.istockphoto.com/id/2161882029/photo/food-photos-various-entrees-appetizers-deserts-etc.webp?a=1&b=1&s=612x612&w=0&k=20&c=iSGo-kag5RPhn2pV8nHyzXz-GS1_j6B6BfuVW57FoF8=",
  },
];

function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");
  const items =
    filter === "all"
      ? menuItems
      : menuItems.filter((i) => i.category === filter);
  grid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "menu-card reveal";
    card.innerHTML = `
      <div class="menu-card-overflow">
        <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy"/>
      </div>
      <div class="menu-card-body">
        <div class="menu-tag">${item.category}</div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-price">${item.price}</span>
          <button class="add-to-cart" onclick="handleAddCart(this)">+ Add</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  observeReveal();
}

function handleAddCart(btn) {
  btn.textContent = "✓ Added";
  btn.classList.add("added");
  setTimeout(() => {
    btn.textContent = "+ Add";
    btn.classList.remove("added");
  }, 1500);
}

// Filter buttons

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.filter);
  });
});

renderMenu();

// ── STICKY NAVBAR ──
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
  document
    .getElementById("scrollTop")
    .classList.toggle("visible", window.scrollY > 400);
  observeReveal();
});

// ── MOBILE MENU ──

document
  .getElementById("hamburger")
  .addEventListener("click", () =>
    document.getElementById("mobileMenu").classList.add("open"),
  );
document.getElementById("mobileClose").addEventListener("click", closeMobile);

function closeMobile() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// ── REVEAL ON SCROLL ──
function observeReveal() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add("visible");
  });
}

observeReveal();
