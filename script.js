// Sweet Aura - Luxury Perfume Store JS

const products = [
  {
    id: 1,
    name: "original perfume",
    desc: "A luxurious blend of rose petals and soft musk for a lasting impression.",
    price: 120,
    image: ""
  },
  {
    id: 2,
    name: "Sweet Kiss Lip Balm",
    desc: "Hydrating balm with a hint of pink and nourishing oils.",
    price: 22,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 3,
    name: "Aura Lip Oil",
    desc: "Glossy, non-sticky lip oil for a radiant, healthy pout.",
    price: 28,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 4,
    name: "Golden Mist Body Spray",
    desc: "A refreshing body mist with golden shimmer and floral notes.",
    price: 38,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 5,
    name: "Silk Touch Hand Cream",
    desc: "Nourishing hand cream with a delicate scent and silky finish.",
    price: 32,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 6,
    name: "Mini Perfume Atomizer",
    desc: "Elegant refillable atomizer for your favorite Sweet Aura scents.",
    price: 18,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 7,
    name: "Fresh Mint Mouth Spray",
    desc: "Instant fresh breath with a gentle minty aroma.",
    price: 15,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80"
  },
  {
    id: 8,
    name: "Amber Oil Perfume",
    desc: "Long-lasting oil perfume with warm amber and vanilla notes.",
    price: 95,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80"
  }
];

function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  grid.innerHTML = products.map(product => `
    <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-200 border-t-4 border-pink-100">
      <img src="${product.image}" alt="${product.name}" class="w-40 h-52 object-cover rounded-xl mb-4 border-2 border-pink-200 shadow-md">
      <h3 class="text-xl font-serif font-bold text-pink-700 mb-2">${product.name}</h3>
      <p class="text-neutral-600 mb-2 text-center">${product.desc}</p>
      <span class="text-lg font-semibold gold mb-4">$${product.price}</span>
      <button class="add-cart bg-gradient-to-r from-pink-400 via-pink-300 to-amber-200 text-white px-6 py-2 rounded-full font-semibold shadow hover:scale-105 transition-all">Add to Cart</button>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", function() {
  renderProducts();

  // Cart logic
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  document.getElementById("product-grid").addEventListener("click", function(e) {
    if (e.target.classList.contains("add-cart")) {
      const idx = Array.from(document.querySelectorAll(".add-cart")).indexOf(e.target);
      cart.push(products[idx]);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      showCart();
    }
  });

  document.getElementById("cart-btn").addEventListener("click", function() {
    showCart();
  });
  document.getElementById("close-cart").addEventListener("click", function() {
    hideCart();
  });

  function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
  }

  function showCart() {
    const cartUI = document.getElementById("cart-ui");
    const cartItems = document.getElementById("cart-items");
    cartUI.classList.remove("hidden");
    if (cart.length === 0) {
      cartItems.innerHTML = '<li class="text-neutral-400">Your cart is empty.</li>';
    } else {
      cartItems.innerHTML = cart.map((item, i) => `
        <li class="flex justify-between items-center py-2 border-b border-pink-50 last:border-b-0">
          <span>${item.name} <span class="gold">$${item.price}</span></span>
          <button class="remove-cart-item text-pink-400 hover:text-pink-700 text-xl font-bold" data-idx="${i}">&times;</button>
        </li>
      `).join("");
    }
  }

  function hideCart() {
    document.getElementById("cart-ui").classList.add("hidden");
  }

  document.getElementById("cart-items").addEventListener("click", function(e) {
    if (e.target.classList.contains("remove-cart-item")) {
      const idx = Number(e.target.getAttribute("data-idx"));
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      showCart();
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
