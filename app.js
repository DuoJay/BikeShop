const mobileNav = document.querySelector('.main-header');

const navButton = document.querySelector('.burger');

navButton.addEventListener('click', () => {
  document.body.classList.toggle('toggle-overflow');
  mobileNav.classList.toggle('open-nav');
  navButton.classList.toggle('active');
  navButton.classList.toggle('origin');
});

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
