// PRICE RANGE SLIDER
const filterForm = document.querySelector('#filter-form');

filterForm.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(filterForm);
  console.log(data);
});

const getVals = () => {
  let slide1 = parseFloat(document.querySelectorAll('.range-slide')[0].value);
  let slide2 = parseFloat(document.querySelectorAll('.range-slide')[1].value);

  if (slide1 > slide2) {
    let tmp = slide2;
    slide2 = slide1;
    slide1 = tmp;
  }
  const minValue = document.querySelector('#min-value');
  const maxValue = document.querySelector('#max-value');
  minValue.value = slide1;
  maxValue.value = slide2;
};

const slides = document.querySelectorAll('.range-slide');
slides.forEach(slide => {
  slide.addEventListener('input', () => {
    getVals();
  });
});
// END OF PRICE RANGE SLIDER
