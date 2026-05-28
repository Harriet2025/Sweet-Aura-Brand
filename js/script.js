// Sweet Aura - Products & Cart Logic

const myProducts = [
  {
    id: 1,
    name: "Original Perfume",
    desc: "A classic, elegant fragrance for every occasion.",
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
    id: 14,
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
    id: 15,
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
    id: 16,
    name: "Oil Perfume",
    desc: "A mild but sweet scent for special occasions.",
    price: 35,
    image: "images/oil perfume.jpg",
    category: "oil-perfume",
    rating: 4.8,
    orderCount: 112,
    tag: "most-ordered",
    subtitle: "Oil Perfumes"
  },
  {
    id: 17,
    name: "Oil Perfume W2",
    desc: "Light and refreshing oil perfume for everyday wear.",
    price: 35,
    image: "images/oil perfume w2.jpg",
    category: "oil-perfume",
    rating: 4.6,
    orderCount: 90,
    subtitle: "Oil Perfumes"
  },
  {
    id: 18,
    name: "Body Mist 2",
    desc: "Floral and fresh mist for long-lasting fragrance.",
    price: 30,
    image: "images/mist 2.jpg",
    category: "body-mist",
    rating: 4.4,
    orderCount: 68,
    subtitle: "Body Mist"
  },
  {
    id: 19,
    name: "Body Mist 3",
    desc: "Soft and airy mist with a hint of vanilla.",
    price: 30,
    image: "images/mist 3.jpg",
    category: "body-mist",
    rating: 4.3,
    orderCount: 62,
    subtitle: "Body Mist"
  }
];

function renderProducts(containerId, filter) {
  filter = filter || {};
  const container = document.getElementById(containerId);
  if (!container) return;
  let filtered = myProducts;
  if (filter.category && filter.category !== 'all') {
    filtered = filtered.filter(function(p) { return p.category === filter.category; });
  }
  if (filter.search && filter.search.trim() !== '') {
    const q = filter.search.trim().toLowerCase();
    filtered = filtered.filter(function(p) {
      return p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    });
  }
  if (containerId === 'featured-products') {
    filtered = filtered.slice().sort(function(a, b) {
      const aScore = (a.tag === 'best-rated' ? 2 : 0) + (a.tag === 'most-ordered' ? 1 : 0);
      const bScore = (b.tag === 'best-rated' ? 2 : 0) + (b.tag === 'most-ordered' ? 1 : 0);
      if (bScore !== aScore) return bScore - aScore;
      return b.rating - a.rating || b.orderCount - a.orderCount;
    });
  }
  if (filtered.length === 0) {
    container.innerHTML = '<div style="padding:2rem;text-align:center;grid-column:1/-1;">No products found.</div>';
    return;
  }
  container.innerHTML = filtered.map(function(product) {
    return '<div class="product-card">' +
      (product.tag ? '<span class="product-tag ' + product.tag + '">' + (product.tag === 'best-rated' ? 'Best Rated!' : 'Most Ordered!') + '</span>' : '') +
      (product.discount ? '<span class="discount-badge">-' + product.discount + '%</span>' : '') +
      '<img src="' + product.image + '" alt="' + product.name + '">' +
      '<h3>' + product.name + '</h3>' +
      '<div class="subtitle">' + (product.subtitle || '') + '</div>' +
      '<span class="rating">' + '★'.repeat(Math.round(product.rating)) + '<span class="rating-num"> ' + (product.rating ? product.rating.toFixed(1) : '') + '</span></span>' +
      '<div class="price-row">' +
        (product.oldPrice ? '<span class="old-price">₵' + product.oldPrice.toFixed(2) + '</span>' : '') +
        '<span class="price">₵' + product.price.toFixed(2) + '</span>' +
      '</div>' +
      '<button class="add-cart btn" data-id="' + product.id + '">Add to Cart</button>' +
    '</div>';
  }).join('');
}

document.addEventListener("DOMContentLoaded", function() {

  // Render products
  if (document.getElementById("featured-products")) {
    renderProducts("featured-products");
  }

  if (document.getElementById("all-products")) {
    const urlParams = new URLSearchParams(window.location.search);
    let category = urlParams.get('category') || 'all';
    let search = urlParams.get('search') || '';
    renderProducts("all-products", { category: category, search: search });

    document.querySelectorAll('.category-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        category = this.getAttribute('data-category');
        const searchInput = document.getElementById('search-input');
        renderProducts("all-products", { category: category, search: searchInput ? searchInput.value : '' });
      });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.value = search;
      searchInput.addEventListener('input', function() {
        renderProducts("all-products", { category: category, search: this.value });
      });
    }

    // Highlight active category button from URL
    if (category !== 'all') {
      const activeBtn = document.querySelector('.category-btn[data-category="' + category + '"]');
      if (activeBtn) activeBtn.classList.add('active');
    }
  }

  // Cart
  let cart = JSON.parse(localStorage.getItem("sweetaura_cart")) || [];
  updateCartCount();

  // All click events via delegation
  document.body.addEventListener("click", function(e) {
    // Add to cart
    if (e.target.classList.contains("add-cart")) {
      const id = Number(e.target.getAttribute("data-id"));
      const prod = myProducts.find(function(p) { return p.id === id; });
      if (prod) {
        const existing = cart.find(function(item) { return item.id === id; });
        if (existing) {
          existing.qty = (existing.qty || 1) + 1;
        } else {
          cart.push({ id: prod.id, name: prod.name, price: prod.price, image: prod.image, qty: 1 });
        }
        saveCart();
        updateCartCount();
        showCart();
      }
    }

    // Open cart
    if (e.target.closest && e.target.closest('#cart-btn') || e.target.id === 'cart-btn') {
      e.preventDefault();
      showCart();
    }

    // Close cart
    if (e.target.id === "close-cart") {
      hideCart();
    }

    // Remove item
    if (e.target.classList.contains("remove-cart-item")) {
      const id = Number(e.target.getAttribute("data-id"));
      cart = cart.filter(function(item) { return item.id !== id; });
      saveCart();
      updateCartCount();
      showCart();
    }

    // Decrease qty
    if (e.target.classList.contains("qty-decrease")) {
      const id = Number(e.target.getAttribute("data-id"));
      const item = cart.find(function(i) { return i.id === id; });
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) cart = cart.filter(function(i) { return i.id !== id; });
      }
      saveCart();
      updateCartCount();
      showCart();
    }

    // Increase qty
    if (e.target.classList.contains("qty-increase")) {
      const id = Number(e.target.getAttribute("data-id"));
      const item = cart.find(function(i) { return i.id === id; });
      if (item) item.qty += 1;
      saveCart();
      updateCartCount();
      showCart();
    }

    // Proceed to checkout
    if (e.target.id === "checkout-btn") {
      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }
      const checkoutForm = document.getElementById("checkout-form");
      if (checkoutForm) {
        checkoutForm.style.display = 'flex';
        e.target.style.display = 'none';
      }
    }
  });

  // Checkout form submit
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
      const total = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
      const itemLines = cart.map(function(item) {
        return '- ' + item.name + ' x' + item.qty + ' (₵' + (item.price * item.qty).toFixed(2) + ')';
      }).join('%0A');
      const message = 'New Sweet Aura Order!%0A%0ACustomer: ' + encodeURIComponent(name) +
        '%0APhone: ' + encodeURIComponent(phone) +
        '%0AAddress: ' + encodeURIComponent(address) +
        '%0A%0AOrder:%0A' + itemLines +
        '%0A%0ATotal: ₵' + total.toFixed(2);
      window.open('https://wa.me/233504301150?text=' + message, '_blank');
      cart = [];
      saveCart();
      updateCartCount();
      hideCart();
    });
  }

  function saveCart() {
    localStorage.setItem("sweetaura_cart", JSON.stringify(cart));
  }

  function updateCartCount() {
    const count = cart.reduce(function(sum, item) { return sum + (item.qty || 1); }, 0);
    document.querySelectorAll('#cart-count').forEach(function(el) { el.textContent = count; });
  }

  function showCart() {
    const cartUI = document.getElementById("cart-ui");
    const cartItemsEl = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutForm = document.getElementById("checkout-form");
    if (!cartUI || !cartItemsEl) return;

    cartUI.classList.remove("hidden");

    if (cart.length === 0) {
      cartItemsEl.innerHTML = '<li style="padding:0.5rem 0;color:#888;">Your cart is empty.</li>';
      if (cartTotalEl) cartTotalEl.textContent = '';
      if (checkoutBtn) checkoutBtn.style.display = 'block';
      if (checkoutForm) checkoutForm.style.display = 'none';
    } else {
      cartItemsEl.innerHTML = cart.map(function(item) {
        return '<li style="display:flex;align-items:center;gap:0.7rem;padding:0.5rem 0;border-bottom:1px solid #f0e6d3;">' +
          '<img src="' + item.image + '" alt="' + item.name + '" style="width:44px;height:44px;object-fit:cover;border-radius:8px;">' +
          '<span style="flex:1;font-size:0.95rem;">' + item.name + '</span>' +
          '<div style="display:flex;align-items:center;gap:0.3rem;">' +
            '<button class="qty-decrease" data-id="' + item.id + '" style="background:var(--gold);color:#fff;border:none;border-radius:4px;width:24px;height:24px;cursor:pointer;font-size:1rem;">-</button>' +
            '<span style="min-width:20px;text-align:center;">' + item.qty + '</span>' +
            '<button class="qty-increase" data-id="' + item.id + '" style="background:var(--gold);color:#fff;border:none;border-radius:4px;width:24px;height:24px;cursor:pointer;font-size:1rem;">+</button>' +
          '</div>' +
          '<span style="color:var(--gold);font-weight:600;min-width:60px;text-align:right;">₵' + (item.price * item.qty).toFixed(2) + '</span>' +
          '<button class="remove-cart-item" data-id="' + item.id + '" style="background:none;border:none;color:#c00;font-size:1.2rem;cursor:pointer;">&times;</button>' +
        '</li>';
      }).join('');

      const total = cart.reduce(function(sum, item) { return sum + (item.price * item.qty); }, 0);
      if (cartTotalEl) cartTotalEl.textContent = 'Total: ₵' + total.toFixed(2);
      if (checkoutBtn) checkoutBtn.style.display = 'block';
    }
  }

  function hideCart() {
    const cartUI = document.getElementById("cart-ui");
    if (cartUI) cartUI.classList.add("hidden");
    const checkoutForm = document.getElementById("checkout-form");
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutForm) checkoutForm.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'block';
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
