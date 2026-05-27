// Sweet Aura - Simple JS for Products & Cart

// Add a category property to each product
// Add rating, orderCount, tag, subtitle, and discount for homepage display
const myProducts = [
  {
    id: 1,
    name: "Original Perfume",
    desc: "A classic, elegant fragrance for every occasion.",
    price: 120,
    image: "images/original perf.jpg",
    category: "perfumes",
    rating: 4.9,
    orderCount: 120,
    tag: "best-rated",
    subtitle: "Prefilled Perfumes",
    discount: 18,
    oldPrice: 22,
    price: 18
  },
  {
    id: 2,
    name: "Blue Perfume",
    desc: "Fresh and aquatic notes for a modern woman.",
    price: 110,
    image: "images/blue perf.jpg",
    category: "perfumes",
    rating: 4.7,
    orderCount: 110,
    tag: "most-ordered",
    subtitle: "Prefilled Perfumes",
    discount: 17,
    oldPrice: 35,
    price: 29
  },
  {
    id: 3,
    name: "Channel Perfume",
    desc: "Timeless luxury and sophistication.",
    price: 150,
    image: "images/channel perf.jpg",
    category: "perfumes",
    rating: 4.8,
    orderCount: 115,
    tag: "best-rated",
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 4,
    name: "Karly Jones Perfume",
    desc: "A vibrant, floral scent for daily wear.",
    price: 95,
    image: "images/karly-jones perf.jpg",
    category: "perfumes",
    rating: 4.5,
    orderCount: 80,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 5,
    name: "Laura Chouette Perfume",
    desc: "Soft, powdery, and feminine.",
    price: 105,
    image: "images/laura-chouette perf.jpg",
    category: "perfumes",
    rating: 4.6,
    orderCount: 90,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 6,
    name: "Deanna Alys Perfume",
    desc: "A unique blend of sweet and spicy notes.",
    price: 99,
    image: "images/deanna-alys-xQwRvghauaU-unsplash.jpg",
    category: "perfumes",
    rating: 4.4,
    orderCount: 70,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 7,
    name: "Laura Chouette Gold",
    desc: "Golden elegance in a bottle.",
    price: 130,
    image: "images/laura-chouette-gbT2KAq1V5c-unsplash.jpg",
    category: "perfumes",
    rating: 4.7,
    orderCount: 100,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 8,
    name: "Lip Oil 2",
    desc: "Hydrating and glossy for luscious lips.",
    price: 22,
    image: "images/lip oil2.jpg",
    category: "lip-oils",
    rating: 4.2,
    orderCount: 60,
    subtitle: "Lip Oils"
  },
  {
    id: 9,
    name: "Lip Oil 3",
    desc: "Nourishing formula with a subtle tint.",
    price: 22,
    image: "images/lip oil3.jpg",
    category: "lip-oils",
    rating: 4.1,
    orderCount: 55,
    subtitle: "Lip Oils"
  },
  {
    id: 10,
    name: "Lip Oil 4",
    desc: "Glossy, non-sticky finish for a radiant pout.",
    price: 22,
    image: "images/lipoil4.jpg",
    category: "lip-oils",
    rating: 4.0,
    orderCount: 50,
    subtitle: "Lip Oils"
  },
  {
    id: 11,
    name: "Lip Oil 1",
    desc: "Classic nourishing lip oil.",
    price: 22,
    image: "images/lipoil1.jpg",
    category: "lip-oils",
    rating: 4.3,
    orderCount: 65,
    subtitle: "Lip Oils"
  },
  {
    id: 12,
    name: "Body Mist",
    desc: "Sweet scented body mist for all-day freshness.",
    price: 35,
    image: "images/mist1.jpg",
    category: "body-mist",
    rating: 4.5,
    orderCount: 75,
    subtitle: "Body Mist"
  },
  {
    id: 13,
    name: "Fatemeh Zakeri Perfume",
    desc: "A delicate, floral aroma for the modern woman.",
    price: 115,
    image: "images/fatemeh-zakeri-perf.jpg",
    category: "perfumes",
    rating: 4.6,
    orderCount: 95,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 14,
    name: "Gourmet Lenz Perfume",
    desc: "A gourmand blend for a sweet, lasting impression.",
    price: 125,
    image: "images/gourmet-lenz-perf.jpg",
    category: "perfumes",
    rating: 4.5,
    orderCount: 85,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 15,
    name: "Anna Keibalo Perfume",
    desc: "A fresh, uplifting scent for every day.",
    price: 108,
    image: "images/anna-keibalo-p7_kZQIhIhc-unsplash.jpg",
    category: "perfumes",
    rating: 4.4,
    orderCount: 78,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 16,
    name: "Meghna R Perfume",
    desc: "A mysterious, enchanting fragrance.",
    price: 118,
    image: "images/meghna-r-9djv1YJw2p0-unsplash.jpg",
    category: "perfumes",
    rating: 4.7,
    orderCount: 105,
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 17,
    name: "Shawn Kim Perfume",
    desc: "A bold, captivating scent for special occasions.",
    price: 135,
    image: "images/shawn-kim-gyqEbOgT154-unsplash.jpg",
    category: "perfumes",
    rating: 4.8,
    orderCount: 112,
    tag: "most-ordered",
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  },
  {
    id: 18,
    name: "scanty oil perfume",
    desc: "A mild but sweet scent for special occasions.",
    price: 35,
    image: "images/oil perfume.jpg",
    category: "oil perfumes",
    rating: 4.8,
    orderCount: 112,
    tag: "most-ordered",
    subtitle: "Mini Perfumes, Aura Avenue Parfum"
  }
];



function renderProducts(containerId, filter = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  let filtered = myProducts;
  if (filter.category && filter.category !== 'all') {
    filtered = filtered.filter(p => p.category === filter.category);
  }
  if (filter.search && filter.search.trim() !== '') {
    const q = filter.search.trim().toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
  }
  // For homepage: sort best rated and most ordered first
  if (containerId === 'featured-products') {
    filtered = [...filtered].sort((a, b) => {
      if ((b.tag === 'best-rated' ? 1 : 0) !== (a.tag === 'best-rated' ? 1 : 0)) {
        return (b.tag === 'best-rated' ? 1 : 0) - (a.tag === 'best-rated' ? 1 : 0);
      }
      if ((b.tag === 'most-ordered' ? 1 : 0) !== (a.tag === 'most-ordered' ? 1 : 0)) {
        return (b.tag === 'most-ordered' ? 1 : 0) - (a.tag === 'most-ordered' ? 1 : 0);
      }
      return b.rating - a.rating || b.orderCount - a.orderCount || a.name.localeCompare(b.name);
    });
  }
  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding:2rem;text-align:center;">No products found.</div>';
    return;
  }
  container.innerHTML = filtered.map(product => `
    <div class="product-card">
      ${product.tag ? `<span class="product-tag ${product.tag}">${product.tag === 'best-rated' ? 'Best Rated!' : 'Most Ordered!'}</span>` : ''}
      ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <div class="subtitle">${product.subtitle || ''}</div>
      <span class="rating">${'★'.repeat(Math.round(product.rating))}<span class="rating-num">${product.rating ? product.rating.toFixed(1) : ''}</span></span>
      <div class="price-row">
        ${product.oldPrice ? `<span class="old-price">₵${product.oldPrice.toFixed(2)}</span>` : ''}
        <span class="price">₵${product.price.toFixed(2)}</span>
      </div>
      <button class="add-cart" data-id="${product.id}">Add to Cart</button>
    </div>
  `).join("");
}


document.addEventListener("DOMContentLoaded", function() {
  // Render all products on home, best rated/most ordered first
  if (document.getElementById("featured-products")) {
    renderProducts("featured-products");
  }
  // Render all on products page with filtering
  if (document.getElementById("all-products")) {
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    let category = urlParams.get('category') || 'all';
    let search = urlParams.get('search') || '';
    renderProducts("all-products", { category, search });

    // Category button click
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        category = this.getAttribute('data-category');
        renderProducts("all-products", { category, search: document.getElementById('search-input').value });
      });
    });
    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = search;
      searchInput.addEventListener('input', function() {
        renderProducts("all-products", { category, search: this.value });
      });
    }
  }

  // Cart logic
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  updateCartCount();

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-cart")) {
      const id = Number(e.target.getAttribute("data-id"));
      const prod = myProducts.find(p => p.id === id);
      if (prod) {
        cart.push(prod);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        showCart();
      }
    }
    if (e.target.id === "cart-btn") {
      e.preventDefault();
      showCart();
    }
    if (e.target.id === "close-cart") {
      hideCart();
    }
    if (e.target.classList.contains("remove-cart-item")) {
      const idx = Number(e.target.getAttribute("data-idx"));
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      showCart();
    }
    if (e.target.id === "checkout-btn") {
      // Show checkout form
      const checkoutForm = document.getElementById("checkout-form");
      if (checkoutForm) checkoutForm.style.display = 'flex';
      e.target.style.display = 'none';
    }
  });

  // Checkout form submit handler
  document.addEventListener("DOMContentLoaded", function() {
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const address = document.getElementById("customer-address").value.trim();
        if (!name || !phone || !address) {
          alert("Please fill in all details.");
          return;
        }
        const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
        const items = cart.map(item => `- ${item.name} (₵${item.price})`).join("%0A");
        const message = `New Sweet Aura Order!%0A%0ACustomer: ${name}%0APhone: ${phone}%0AAddress: ${address}%0A%0AOrder:%0A${items}%0A%0ATotal: ₵${total.toFixed(2)}`;
        const whatsappUrl = `https://wa.me/233504301150?text=${message}`;
        window.open(whatsappUrl, '_blank');
        // Optionally clear cart after checkout
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        hideCart();
      });
    }
  });

  function updateCartCount() {
    const count = cart.length;
    document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
  }

  function showCart() {
    const cartUI = document.getElementById("cart-ui");
    const cartItems = document.getElementById("cart-items");
    if (!cartUI || !cartItems) return;
    cartUI.classList.remove("hidden");
    if (cart.length === 0) {
      cartItems.innerHTML = '<li>Your cart is empty.</li>';
    } else {
      cartItems.innerHTML = cart.map((item, i) => `
        <li>
          <span>${item.name} <span style="color:var(--gold);">₵${item.price}</span></span>
          <button class="remove-cart-item" data-idx="${i}" style="background:none;border:none;color:var(--gold);font-size:1.2rem;cursor:pointer;">&times;</button>
        </li>
      `).join("");
    }
  }

  function hideCart() {
    const cartUI = document.getElementById("cart-ui");
    if (cartUI) cartUI.classList.add("hidden");
  }

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
