const products = [
  {
    id: 'citrus-charge',
    title: 'Citrus Charge',
    price: 18,
    image: 'https://images.unsplash.com/photo-1514361892635-6e122620e4d1?auto=format&fit=crop&w=900&q=80',
    hover: 'https://images.unsplash.com/photo-1544145945-f90425340c7b?auto=format&fit=crop&w=900&q=80',
    badge: 'Hydrate',
    tags: ['Electrolytes', 'Zero added sugar'],
    description: 'A tangy citrus sachet with Himalayan salt and coconut electrolytes for crisp, bright pours.',
    details: {
      description: 'Built to keep you balanced while you sip — vitamin C, citrus oils, and clean electrolytes.',
      ingredients: ['Lemon zest', 'Orange peel extract', 'Coconut electrolytes', 'Himalayan salt', 'Natural sweeteners'],
      benefits: ['Hydrates as you sip', 'Supports focus', 'No crash finish'],
      howTo: ['Pour 1 sachet over ice', 'Add 1.5 oz of your spirit', 'Top with sparkling water', 'Garnish with citrus peel'],
      nutrition: ['10g protein', '90 calories', '0g added sugar']
    }
  },
  {
    id: 'berry-bright',
    title: 'Berry Bright',
    price: 20,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=900&q=80',
    hover: 'https://images.unsplash.com/photo-1546173159-315724a31698?auto=format&fit=crop&w=900&q=80',
    badge: 'Recover',
    tags: ['Antioxidants', 'Collagen'],
    description: 'Wild berries, collagen peptides, and hibiscus for a jewel-toned cocktail that loves your skin.',
    details: {
      description: 'Bright berry acids meet collagen peptides for a drink that keeps its glow.',
      ingredients: ['Strawberry puree', 'Hibiscus flower', 'Collagen peptides', 'Raspberry essence'],
      benefits: ['Supports recovery', 'Skin-friendly collagen', 'Crushable berry finish'],
      howTo: ['Blend with tonic or soda', 'Add fresh berries for garnish', 'Serve tall over ice'],
      nutrition: ['12g protein', '100 calories', '2g sugar']
    }
  },
  {
    id: 'ginger-gold',
    title: 'Ginger Gold',
    price: 19,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80',
    hover: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    badge: 'Focus',
    tags: ['Spiced kick', 'Adaptogens'],
    description: 'Fiery ginger, turmeric, and ashwagandha to keep the vibe lifted and clear.',
    details: {
      description: 'Golden hour in a glass — earthy spice, adaptogens, and a clean, warming finish.',
      ingredients: ['Fresh ginger', 'Turmeric root', 'Ashwagandha extract', 'Agave', 'Lime oil'],
      benefits: ['Supports clarity', 'Anti-inflammatory blend', 'Vivid gold hue'],
      howTo: ['Shake with ice', 'Strain into coupe', 'Express lime over the top'],
      nutrition: ['9g protein', '80 calories', '3g sugar']
    }
  },
  {
    id: 'melon-muse',
    title: 'Melon Muse',
    price: 21,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    hover: 'https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?auto=format&fit=crop&w=900&q=80',
    badge: 'Elevate',
    tags: ['Hydrating', 'Botanical'],
    description: 'Juicy melon with basil and aloe for a lush, velvety sip that cools you down.',
    details: {
      description: 'Sun-ripe melon meets basil aromatics and aloe for all-night hydration.',
      ingredients: ['Melon nectar', 'Basil oil', 'Aloe concentrate', 'Cucumber water'],
      benefits: ['Cooling hydration', 'Botanical freshness', 'Velvet mouthfeel'],
      howTo: ['Pour over crushed ice', 'Add tequila or vodka', 'Top with club soda'],
      nutrition: ['11g protein', '95 calories', '1g sugar']
    }
  }
];

const recipes = [
  {
    title: 'Electric Paloma',
    description: 'Citrus Charge + tequila, topped with grapefruit soda.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Velvet Mule',
    description: 'Ginger Gold with vodka, lime, and crushed ice for a luxe mule.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Collagen Spritz',
    description: 'Berry Bright, prosecco, and a splash of soda for sparkle.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  }
];

const benefits = [
  { icon: '💧', title: 'Electrolyte Smart', copy: 'Keeps you hydrated while you sip and socialise.' },
  { icon: '🏃‍♀️', title: 'Performance Layer', copy: 'Protein and adaptogens to keep the night going.' },
  { icon: '🍋', title: 'Clean Flavour', copy: 'Real fruit oils and botanicals with no synthetic aftertaste.' },
  { icon: '✨', title: 'Zero Fuss', copy: 'Single-serve sachets that pour perfectly every time.' }
];

const videos = [
  {
    title: 'See the pour',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    src: 'https://cdn.coverr.co/videos/coverr-sparkling-water-2110/1080p.mp4'
  },
  {
    title: 'No shaker needed',
    thumbnail: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    src: 'https://cdn.coverr.co/videos/coverr-sparkling-water-2110/1080p.mp4'
  }
];

const formatPrice = (value) => `$${value.toFixed(2)}`;

const cartKey = 'procktails-cart';
const getCart = () => JSON.parse(localStorage.getItem(cartKey) || '[]');
const saveCart = (items) => localStorage.setItem(cartKey, JSON.stringify(items));

const renderProducts = () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products
    .map(
      (product) => `
      <article class="product-card" data-id="${product.id}" tabindex="0">
        <div class="thumb">
          <img class="main-img" src="${product.image}" alt="${product.title} sachet" />
          <img class="hover-img" src="${product.hover}" alt="${product.title} cocktail" />
        </div>
        <div class="card-meta">
          <div>
            <p class="eyebrow">${product.badge}</p>
            <h3>${product.title}</h3>
          </div>
          <p class="price">${formatPrice(product.price)}</p>
        </div>
        <p class="section-lede">${product.description}</p>
        <div class="pill-row">
          ${product.tags.map((tag) => `<span class="pill">${tag}</span>`).join('')}
        </div>
        <button class="btn primary add-to-bag" data-id="${product.id}">Add to Bag</button>
      </article>
    `
    )
    .join('');
};

const renderRecipes = () => {
  const grid = document.getElementById('recipeGrid');
  if (!grid) return;
  grid.innerHTML = recipes
    .map(
      (recipe) => `
      <article class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}" />
        <div>
          <p class="eyebrow">Cocktail idea</p>
          <h3>${recipe.title}</h3>
          <p class="section-lede">${recipe.description}</p>
        </div>
      </article>
    `
    )
    .join('');
};

const renderBenefits = () => {
  const grid = document.getElementById('benefitsGrid');
  if (!grid) return;
  grid.innerHTML = benefits
    .map(
      (benefit) => `
      <article class="benefit-card">
        <span class="benefit-icon">${benefit.icon}</span>
        <h3>${benefit.title}</h3>
        <p class="section-lede">${benefit.copy}</p>
      </article>
    `
    )
    .join('');
};

const renderVideos = () => {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  grid.innerHTML = videos
    .map(
      (video) => `
      <article class="video-card" data-src="${video.src}" tabindex="0">
        <img src="${video.thumbnail}" alt="${video.title}" />
        <div class="play-overlay">
          <div class="play-icon">▶</div>
        </div>
        <div>
          <p class="eyebrow">Tutorial</p>
          <h3>${video.title}</h3>
        </div>
      </article>
    `
    )
    .join('');
};

const updateCartCount = () => {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach((el) => (el.textContent = count));
};

const showToast = (message) => {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
};

const addToCart = (productId) => {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  updateCartCount();
  showToast('Added to bag');
};

const openModal = (productId) => {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('closeModal');

  document.getElementById('modalImage').src = product.image;
  document.getElementById('modalImage').alt = product.title;
  document.getElementById('modalBadge').textContent = product.badge;
  document.getElementById('modalTitle').textContent = product.title;
  document.getElementById('modalPrice').textContent = formatPrice(product.price);
  document.getElementById('modalDescription').textContent = product.details.description;
  document.getElementById('modalTags').innerHTML = product.tags.map((tag) => `<span class="pill">${tag}</span>`).join('');

  const detailHtml = `
    <div>
      <h4>Ingredients</h4>
      <ul>${product.details.ingredients.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
    <div>
      <h4>Benefits</h4>
      <ul>${product.details.benefits.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
    <div>
      <h4>How to make</h4>
      <ol>${product.details.howTo.map((item) => `<li>${item}</li>`).join('')}</ol>
    </div>
    <div>
      <h4>Nutrition</h4>
      <ul>${product.details.nutrition.map((item) => `<li>${item}</li>`).join('')}</ul>
    </div>
  `;
  document.getElementById('modalDetails').innerHTML = detailHtml;

  const addBtn = document.getElementById('modalAdd');
  addBtn.onclick = () => addToCart(product.id);

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  };

  overlay.onclick = closeModal;
  closeBtn.onclick = closeModal;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');

  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape') closeModal();
    },
    { once: true }
  );
};

const attachProductEvents = () => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('add-to-bag')) {
      const id = target.dataset.id;
      addToCart(id);
    } else {
      const card = target.closest('.product-card');
      if (card) openModal(card.dataset.id);
    }
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const card = event.target.closest('.product-card');
      if (card) openModal(card.dataset.id);
    }
  });
};

const attachVideoEvents = () => {
  const grid = document.getElementById('videoGrid');
  if (!grid) return;
  const lightbox = document.getElementById('videoLightbox');
  const overlay = document.getElementById('videoOverlay');
  const closeBtn = document.getElementById('closeVideo');
  const videoEl = document.getElementById('lightboxVideo');

  const closeVideo = () => {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    videoEl.pause();
    videoEl.currentTime = 0;
  };

  grid.addEventListener('click', (event) => {
    const card = event.target.closest('.video-card');
    if (!card) return;
    videoEl.src = card.dataset.src;
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  });

  grid.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const card = event.target.closest('.video-card');
      if (!card) return;
      videoEl.src = card.dataset.src;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });

  overlay.onclick = closeVideo;
  closeBtn.onclick = closeVideo;
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape') closeVideo();
    },
    { once: true }
  );
};

const renderCartPage = () => {
  const cartList = document.getElementById('cartItems');
  if (!cartList) return;
  const subtotalEl = document.getElementById('subtotal');
  const cart = getCart();

  if (!cart.length) {
    cartList.innerHTML = '<p class="section-lede">Your bag is empty. Start with a sachet from the store.</p>';
    subtotalEl.textContent = '$0.00';
    return;
  }

  cartList.innerHTML = cart
    .map(
      (item) => `
      <article class="cart-item" data-id="${item.id}">
        <img class="cart-thumb" src="${item.image}" alt="${item.title}" />
        <div class="cart-meta">
          <h4>${item.title}</h4>
          <p class="section-lede">${item.description}</p>
          <div class="quantity">
            <button aria-label="Decrease quantity" data-action="decrease">−</button>
            <span>${item.quantity}</span>
            <button aria-label="Increase quantity" data-action="increase">+</button>
          </div>
        </div>
        <div>
          <p class="price">${formatPrice(item.price * item.quantity)}</p>
          <button class="btn ghost" data-action="remove">Remove</button>
        </div>
      </article>
    `
    )
    .join('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  subtotalEl.textContent = formatPrice(subtotal);
};

const handleCartInteraction = (event) => {
  const action = event.target.dataset.action;
  if (!action) return;
  const itemEl = event.target.closest('.cart-item');
  if (!itemEl) return;

  const id = itemEl.dataset.id;
  const cartItems = getCart();
  const item = cartItems.find((entry) => entry.id === id);
  if (!item) return;

  if (action === 'increase') item.quantity += 1;
  if (action === 'decrease') item.quantity = Math.max(1, item.quantity - 1);
  if (action === 'remove') cartItems.splice(cartItems.indexOf(item), 1);

  saveCart(cartItems);
  renderCartPage();
  updateCartCount();
};

const bindCartEvents = () => {
  const cartList = document.getElementById('cartItems');
  if (!cartList || cartList.dataset.bound === 'true') return;
  cartList.addEventListener('click', handleCartInteraction);
  cartList.dataset.bound = 'true';
};

const setupHeroScroll = () => {
  const video = document.getElementById('heroVideo');
  if (!video) return;

  const onScroll = () => {
    const rect = video.getBoundingClientRect();
    if (!rect.height) return;
    const visible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
    const ratio = visible / rect.height;
    const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 1;
    video.currentTime = Math.max(0, Math.min(duration, duration * ratio));
  };

  document.addEventListener('scroll', onScroll, { passive: true });
  video.addEventListener('loadedmetadata', onScroll);
  if (window.innerWidth < 720) {
    video.removeAttribute('muted');
    video.setAttribute('autoplay', 'true');
    video.setAttribute('loop', 'true');
  }
};

const init = () => {
  renderProducts();
  renderRecipes();
  renderBenefits();
  renderVideos();
  attachProductEvents();
  attachVideoEvents();
  renderCartPage();
  bindCartEvents();
  updateCartCount();
  setupHeroScroll();
};

document.addEventListener('DOMContentLoaded', init);
