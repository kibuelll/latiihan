const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
const cardContainer = document.getElementById('card-container')

let currentIndex = 0;
let interval;

const autoPLay = () => {
  nextBtn.click()
}

const listCard = ["image1","image2","image3","image4","image5","image6","image1","image2","image3","image4","image5","image6"]

listCard.forEach((el) => {
  cardContainer.innerHTML += `<div class="card">
          <img src="/assets/images/${el}.png" class="banner-card"/>
          <ul class="card-detail">
            <li class="card-detail-list">
              <img src="/assets/images/MapPin-r.svg" width="20" height="20" style="color : #0049FF"/>
              <span>Alun-Alun Pekalongan</span>
            </li>
            <li class="card-detail-list">
              <img src="/assets/images/Note - 2.svg" width="20" height="20"/>
              <span>24 September 2024</span>
            </li>
          </ul>
          <div class="price-tag">
            <span>
              Rp 2.000.000
            </span>
          </div>
          <div class="footer-card">
           Harmony Event Organizer
          </div>
        </div>`
})

function showSlide(index) {
  const totalSlides = slides.length;
  currentIndex = (index + totalSlides) % totalSlides;

  slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentIndex) {
        slide.classList.add('active');
      }
  });

}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

showSlide(currentIndex);
interval = setInterval(autoPLay,3000)


