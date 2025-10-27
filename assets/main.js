/*=============== SHOW MENU (mobile) ===============*/
const navMenu  = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close');

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/* Hide menu on nav link click (mobile UX) */
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
   link.addEventListener('click', () => {
      if (navMenu) {
         navMenu.classList.remove('show-menu');
      }
   });
});


/*=============== HEADER BACKGROUND ON SCROLL ===============*/
function scrollHeader() {
   const header = document.getElementById('header');
   if (!header) return;

   if (window.scrollY >= 50) {
      header.classList.add('header--blur');
   } else {
      header.classList.add('header--blur'); 
   }
}
window.addEventListener('scroll', scrollHeader);


/*=============== SHOW SCROLL-UP BUTTON ===============*/
function handleScrollUp() {
   const scrollUpEl = document.getElementById('scroll-up');
   if (!scrollUpEl) return;

   if (window.scrollY >= 350) {
      scrollUpEl.classList.add('show-scroll');
   } else {
      scrollUpEl.classList.remove('show-scroll');
   }
}
window.addEventListener('scroll', handleScrollUp);


/*=============== ACTIVE LINK HIGHLIGHT ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.scrollY;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight;
		const sectionTop    = current.offsetTop - 58;
		const sectionId     = current.getAttribute('id');
		const sectionLink   = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			if (sectionLink) sectionLink.classList.add('active-link');
		} else {
			if (sectionLink) sectionLink.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);


/*=============== DARK / LIGHT THEME TOGGLE ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme   = 'dark-theme';
const iconTheme   = 'ri-sun-fill'; 

// Load previous selection (dacă userul a schimbat tema înainte)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon  = localStorage.getItem('selected-icon');

// Ce temă e acum?
const getCurrentTheme = () =>
   document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
   themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill';

// Aplică tema salvată anterior (dacă există)
if (selectedTheme) {
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
   if (themeButton) {
      themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
   }
}

// Toggle dark/light
if (themeButton) {
   themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme);
      themeButton.classList.toggle(iconTheme);

      // salvează noua stare
      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon',  getCurrentIcon());
   });
}


/*=============== SLIDER INDEX (AUTOMATIC, FĂRĂ SWIPER) ===============*/

(function() {
  const slides = document.querySelectorAll(".home__slider .home__img");
  if (!slides.length) return; // dacă nu suntem pe index, ieșim

  let currentSlide = 0;

  function showNextSlide() {
    // scoatem .active de pe poza curentă
    slides[currentSlide].classList.remove("active");

    // trecem la următoarea
    currentSlide = currentSlide + 1;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // punem .active pe noua poză
    slides[currentSlide].classList.add("active");
  }

  // schimbă imaginea la fiecare ~4.5 secunde
  setInterval(showNextSlide, 4500);
})();

const traditiiData = [
  {
    title: "Día de los Muertos",
    text: `În fiecare an, pe 1 și 2 noiembrie, Mexicul se transformă într-o explozie de culoare,
muzică și parfum de cempasúchil — floarea portocalie a morților, simbol al legăturii
dintre lumea celor vii și cea a spiritelor. Casele, piețele și școlile se împodobesc
cu lumânări, ghirlande, cranii din zahăr și picturi vii, iar aerul devine o îmbinare
între solemnitate și bucurie.<br><br>
Deși numele „Ziua Morților” poate părea trist, în Mexic este o celebrare a vieții și a
amintirii. Oamenii nu plâng pierderea celor dragi, ci îi sărbătoresc cu cântece, povești
și ofrande, crezând că sufletele lor se întorc pentru o noapte magică alături de familie.<br><br>
Cimitirele devin pline de viață: familiile aprind lumânări, aduc mâncărurile preferate
ale celor dragi și povestesc întâmplări din trecut, într-o atmosferă caldă și plină de
respect. Día de los Muertos nu este o despărțire, ci o reîntâlnire, o dovadă că iubirea
continuă să unească generații prin amintire și tradiție.`
  },
  {
    title: "Las Posadas",
    text: `În Mexic, în perioada 16–24 decembrie, se celebrează Las Posadas, o tradiție care
reamintește călătoria Mariei și a lui Iosif în căutarea unui adăpost înainte de
nașterea lui Isus. Comunitățile se adună în fiecare seară pentru procesiuni, cântece
și rugăciuni, imitând căutarea de adăpost a Sfintei Familii.<br><br>
Participanții merg din casă în casă, cântând și cerând „posada” (adăpost), până când
gazdele îi primesc și oferă dulciuri, fructe și ciocolată caldă. Casele și străzile sunt
decorate cu lumini, ghirlande și piñatas colorate, iar atmosfera devine un amestec de
solemnitate, bucurie și comunitate.<br><br>
Las Posadas nu este doar o celebrare religioasă, ci și o sărbătoare a solidarității,
ospitalității și tradiției, care aduce familiile și comunitățile împreună în spirit de
generozitate și sărbătoare.`
  },
  {
    title: "Fiesta de la Virgen de Guadalupe",
    text: `Pe 12 decembrie, Mexicul celebrează Fiesta de la Virgen de Guadalupe, în cinstea
patroanei țării. Sărbătoarea comemorează apariția Fecioarei Maria în 1531 lui Juan Diego,
pe dealul Tepeyac, în apropiere de Ciudad de México.<br><br>
Milioane de pelerini vin să se roage, să aprindă lumânări și să participe la procesiuni,
cântări și dansuri tradiționale. Bisericile și piețele se umplu de flori, muzică și
culoare, iar atmosfera este plină de devoțiune și bucurie.<br><br>
Această zi nu este doar un eveniment religios, ci și o celebrare a identității mexicane
și a legăturii profunde dintre credință, comunitate și tradiție.`
  }
];

let traditiiIndex = 0;

// elemente din DOM pentru pagina tradiții
const titleEl = document.getElementById("traditiiTitle");
const textEl  = document.getElementById("traditiiText");
const prevBtn = document.getElementById("traditiiPrevBtn");
const nextBtn = document.getElementById("traditiiNextBtn");

// funcție care schimbă efectiv conținutul
function afiseazaTradata(index) {
  const item = traditiiData[index];
  if (!item) return;
  if (titleEl) titleEl.textContent = item.title;
  if (textEl)  textEl.innerHTML    = item.text;
}

// animație fade la schimbare
function schimbaTradata(nouIndex) {
  const card = document.querySelector(".traditii__card");
  if (!card) return; // înseamnă că nu suntem pe pagina tradiții.html

  card.classList.add("fade-out");

  setTimeout(() => {
    afiseazaTradata(nouIndex);
    card.classList.remove("fade-out");
  }, 400); // trebuie să fie la fel ca transition-ul din CSS (0.4s)
}

// buton PREV
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    traditiiIndex--;
    if (traditiiIndex < 0) traditiiIndex = traditiiData.length - 1;
    schimbaTradata(traditiiIndex);
  });
}

// buton NEXT
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    traditiiIndex++;
    if (traditiiIndex >= traditiiData.length) traditiiIndex = 0;
    schimbaTradata(traditiiIndex);
  });
}
