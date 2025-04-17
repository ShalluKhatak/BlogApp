/**
 * Template Name: Squadfree
 * Template URL: https://bootstrapmade.com/squadfree-free-bootstrap-template-creative/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

document.addEventListener('DOMContentLoaded', () => {
  (function () {
    'use strict';

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (
        !selectHeader.classList.contains('scroll-up-sticky') &&
        !selectHeader.classList.contains('sticky-top') &&
        !selectHeader.classList.contains('fixed-top')
      )
        return;
      window.scrollY > 100
        ? selectBody.classList.add('scrolled')
        : selectBody.classList.remove('scrolled');
    }

    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach((navmenu) => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
    });

    /**
     * Toggle mobile nav dropdowns
     */
    document
      .querySelectorAll('.navmenu .toggle-dropdown')
      .forEach((navmenu) => {
        navmenu.addEventListener('click', function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle(
            'dropdown-active',
          );
          e.stopImmediatePropagation();
        });
      });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100
          ? scrollTop.classList.add('active')
          : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
    window.addEventListener('load', aosInit);

    /**
     * Initiate Pure Counter
     */
    new PureCounter();

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox',
    });

    /**
     * Init isotope layout and filters
     */
    document
      .querySelectorAll('.isotope-layout')
      .forEach(function (isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(
          isotopeItem.querySelector('.isotope-container'),
          function () {
            initIsotope = new Isotope(
              isotopeItem.querySelector('.isotope-container'),
              {
                itemSelector: '.isotope-item',
                layoutMode: layout,
                filter: filter,
                sortBy: sort,
              },
            );
          },
        );

        isotopeItem
          .querySelectorAll('.isotope-filters li')
          .forEach(function (filters) {
            filters.addEventListener(
              'click',
              function () {
                isotopeItem
                  .querySelector('.isotope-filters .filter-active')
                  .classList.remove('filter-active');
                this.classList.add('filter-active');
                initIsotope.arrange({
                  filter: this.getAttribute('data-filter'),
                });
                if (typeof aosInit === 'function') {
                  aosInit();
                }
              },
              false,
            );
          });
      });

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document
        .querySelectorAll('.init-swiper')
        .forEach(function (swiperElement) {
          let config = JSON.parse(
            swiperElement.querySelector('.swiper-config').innerHTML.trim(),
          );

          if (swiperElement.classList.contains('swiper-tab')) {
            initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        });
    }

    window.addEventListener('load', initSwiper);

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener('load', function (e) {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            let section = document.querySelector(window.location.hash);
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth',
            });
          }, 100);
        }
      }
    });

    /**
     * Navmenu Scrollspy
     */
    let navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll('.navmenu a.active')
            .forEach((link) => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
  })();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const checkToken = () => {
    let token_check = getCookie('token');
    console.log('token_check :>> ', token_check);
    const ele_login = document.getElementById('login_nav');
    const ele_signin = document.getElementById('signup_nav');
    const ele_logout = document.getElementById('logout_nav');
    if (Boolean(token_check)) {
      if (Boolean(ele_login)) {
        ele_login.style.display = 'none';
      }
      if (Boolean(ele_signin)) {
        ele_signin.style.display = 'none';
      }
      if (Boolean(ele_logout)) {
        ele_logout.style.display = 'block';
      }
    } else {
      if (Boolean(ele_login)) {
        ele_login.style.display = 'block';
      }
      if (Boolean(ele_signin)) {
        ele_signin.style.display = 'block';
      }
      if (Boolean(ele_logout)) {
        ele_logout.style.display = 'none';
      }
    }
  };

  window.addEventListener('load', checkToken);

  // function blogCard(data) {
  //   const container = document.createDocumentFragment(); // Or use a div if you want a container node

  //   if (Array.isArray(data) && data.length > 0) {
  //     data.forEach((item) => {
  //       const colDiv = document.createElement('div');
  //       colDiv.className =
  //         'col-lg-4 col-md-6 portfolio-item isotope-item filter-app';

  //       const img = document.createElement('img');
  //       img.src = item?.image || '';
  //       img.className = 'img-fluid';
  //       img.alt = '';

  //       const infoDiv = document.createElement('div');
  //       infoDiv.className = 'portfolio-info';

  //       const title = document.createElement('h4');
  //       title.textContent = item?.title || '';

  //       const description = document.createElement('p');
  //       description.textContent = item?.description || '';

  //       infoDiv.appendChild(title);
  //       infoDiv.appendChild(description);
  //       colDiv.appendChild(img);
  //       colDiv.appendChild(infoDiv);
  //       container.appendChild(colDiv);
  //     });
  //   }

  //   return container;
  // }

  function blogCard(data) {
    if (Array.isArray(data) && data.length > 0) {
      return data
        .map(
          (item) => `
        <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
          <img src="${item?.image || ''}" class="img-fluid" alt="" />
          <div class="portfolio-info">
            <h4>${item?.title || ''}</h4>
            <p>${item?.description || ''}</p>
          </div>
        </div>
      `,
        )
        .join('');
    }
    return '';
  }

  const getBlog = async () => {
    const login_user = await fetch('http://localhost:3000/get_blog');
    let data = await login_user.json();
    console.log('login_user :>> ', login_user);
    console.log('data :>> ', data);
    const cards = blogCard(data);
    let blog_element = document.getElementById('blog_warper');
    if (Boolean(blog_element)) {
      // blog_element.append(cards);
      blog_element.innerHTML = cards;
      blog_element.style.height = 'auto';
    }
  };
  getBlog();
});
