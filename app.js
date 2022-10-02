const mobileNav = document.querySelector('.main-header');
const navButton = document.querySelector('.burger');
const backdrop = document.querySelector('.backdrop');
const loginModal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login');

// COMMON FUNCTIONS
const toggleOverflow = () => {
  document.body.classList.toggle('toggle-overflow');
};

const toggleMobileNav = () => {
  mobileNav.classList.toggle('open-nav');
  navButton.classList.toggle('active');
  navButton.classList.toggle('origin');
};
// END OF COMMON FUNCTIONS

// LOAD PRODUCTS ON PAGE
const fetchProducts = async url => {
  const { data } = await axios.get(url);
  return data;
};

const showProduts = async () => {
  const { bikes } = await fetchProducts('products.json');
  const productsContainer = document.querySelector('.products');

  bikes.forEach(bike => {
    const product = document.createElement('div');
    product.classList.add('product-container');

    product.innerHTML = `
    <div class="badge-container">
    ${bike.sleva ? '<div class="sleva">SLEVA</div>' : ''}
    ${bike.top ? '<div class="top">TOP</div>' : ''}
    ${bike.novinka ? '<div class="novinka">NOVINKA</div>' : ''}
    </div>              
    <div class="product-image">
    <img src="${bike.picture}" alt="" />
    </div>
    <p class="product-name">
    ${bike.name}"
    </p>
    <div class="product-line"></div>
    <div class="product-cta">
    <span class="product-price">${bike.price} Kč</span>
    <button class="primary-btn">KOUPIT</button>
    </div>
  `;
    productsContainer.appendChild(product);
  });
};

showProduts();

// ENDO OF LOAD PRODUCTS

// TOGGLE MODAL
const openModal = () => {
  backdrop.style.display = 'initial';
  loginModal.style.display = 'flex';
  setTimeout(() => {
    backdrop.classList.add('open-modal');
    loginModal.classList.add('open-modal');
  }, 1);
};

const closeModal = () => {
  backdrop.classList.remove('open-modal');
  loginModal.classList.remove('open-modal');
  setTimeout(() => {
    backdrop.style.display = 'none';
    loginModal.style.display = 'none';
  }, 300);
};

loginBtn.addEventListener('click', () => {
  toggleOverflow();
  openModal();
});

backdrop.addEventListener('click', () => {
  toggleOverflow();
  closeModal();
});

// END OF TOGGLE MODAL
// SHOW CATEGORIES
const showCategories = () => {
  const ctgBtn = document.querySelector('#show-categories');
  const categories = document.querySelector('.side-nav__items');

  ctgBtn.addEventListener('click', e => {
    e.preventDefault();
    categories.classList.toggle('show-categories');
    ctgBtn.classList.toggle('rotate-arrow');
  });
};

showCategories();

// END OF SHOW CATEGORIES
// TOGGLE MOBILE NAV BAR
navButton.addEventListener('click', () => {
  toggleOverflow();
  toggleMobileNav();
});

// END OF TOGGLE MOBILE NAV BAR
// JUMP UP BUTTON FOR MOBILES
const jumpUp = document.querySelector('.jump-up');

document.addEventListener('scroll', e => {
  if (window.scrollY >= 50) {
    jumpUp.style.opacity = '0.5';
  } else {
    jumpUp.style.opacity = '0';
  }
});

jumpUp.addEventListener('click', () => window.scrollTo(0, 0));

// END OF JUMPUP BUTTON
