const mobileNav = document.querySelector('.main-header');
const navButton = document.querySelector('.burger');
const backdrop = document.querySelector('.backdrop');
const loginModal = document.querySelector('.modal');
const loginBtn = document.querySelector('.login');

let clientWidth = document.documentElement.clientWidth;
const desktopMode = 991;
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
// TOGGLE MODAL
const openModal = () => {
  backdrop.classList.toggle('open');
  loginModal.classList.toggle('open');
  setTimeout(() => {
    backdrop.style.opacity = '1';
    loginModal.style.opacity = '1';

    if (clientWidth >= desktopMode) {
      loginModal.style.transform = 'translate(0,0)';
    }
  });
};

const closeModal = () => {
  let clientWidth = document.documentElement.clientWidth;
  console.log(clientWidth);
  backdrop.style.opacity = '0';
  loginModal.style.opacity = '0';

  if (clientWidth >= desktopMode) {
    loginModal.style.transform = 'translate(0, calc(-100% - 5rem))';
    console.log(22);
  }
  setTimeout(() => {
    backdrop.classList.toggle('open');
    loginModal.classList.toggle('open');
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
// TOGGLE MOBILE NAV BAR

navButton.addEventListener('click', () => {
  toggleOverflow();
  toggleMobileNav();
});
// END OF TOGGLE MOBILE NAV BAR
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

// END OF JUMPUP BUTTONS
