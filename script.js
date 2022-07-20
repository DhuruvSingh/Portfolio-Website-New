const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

menu.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

const projects = [
  {
    title: 'Keeping track of hundreds of components',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: [
      'Codekit',
      'GitHub',
      'JavaScript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    image: './icons/portfolio-snapshot-desktop.png',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    See_Live: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
    Source: 'https://dhuruvsingh.github.io/Portfolio-Website-New/',
  },
];

openModalButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.currentTarget.classList[0] === 'project-1') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[0].image),
        (document.getElementById('modal-title').innerHTML = projects[0].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[0].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                    <button action="${projects[0].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[0].technologies[0]}</p></li>
                    <li><p>${projects[0].technologies[1]}</p></li>
                    <li><p>${projects[0].technologies[2]}</p></li>
                    <li><p>${projects[0].technologies[3]}</p></li>
                    <li><p>${projects[0].technologies[4]}</p></li>
                    <li><p>${projects[0].technologies[5]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[0].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-2') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[1].image),
        (document.getElementById('modal-title').innerHTML = projects[1].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[1].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                      <button action="${projects[1].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[1].technologies[0]}</p></li>
                      <li><p>${projects[1].technologies[1]}</p></li>
                      <li><p>${projects[1].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[1].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-3') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[2].image),
        (document.getElementById('modal-title').innerHTML = projects[2].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[2].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                        <button action="${projects[2].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[2].technologies[0]}</p></li>
                        <li><p>${projects[2].technologies[1]}</p></li>
                        <li><p>${projects[2].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[2].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-4') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[3].image),
        (document.getElementById('modal-title').innerHTML = projects[3].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[3].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                          <button action="${projects[3].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[3].technologies[0]}</p></li>
                          <li><p>${projects[3].technologies[1]}</p></li>
                          <li><p>${projects[3].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[3].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-5') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[4].image),
        (document.getElementById('modal-title').innerHTML = projects[4].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[4].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                            <button action="${projects[4].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[4].technologies[0]}</p></li>
                            <li><p>${projects[4].technologies[1]}</p></li>
                            <li><p>${projects[4].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[4].description)
      );
    } else if (event.currentTarget.classList[0] === 'project-6') {
      console.log(
        (document.getElementById('project-image-desktop').src =
          projects[5].image),
        (document.getElementById('modal-title').innerHTML = projects[5].title),
        (document.getElementById(
          'modal-btns'
        ).innerHTML = `<button action="${projects[5].See_Live}" type="submit">See Live <i class="fa-solid fa-up-right-from-square"></i></button>
                              <button action="${projects[5].Source}" type="submit">See Source <i class="fa-brands fa-github"></i></button>`),
        (document.getElementById(
          'modal-tag'
        ).innerHTML = `<li><p>${projects[5].technologies[0]}</p></li>
                              <li><p>${projects[5].technologies[1]}</p></li>
                              <li><p>${projects[5].technologies[2]}</p></li>`),
        (document.getElementById('modal-description').innerHTML =
          projects[5].description)
      );
    }
  });
});
