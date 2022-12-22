<template>
  <section class="">
    <header class="main-header-area header-transparent header-sticky">
      <div class="main-header">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-2 col-xl-2 col-md-6 col-6">
              <div class="header-logo d-flex align-items-center">
                <a href=""
                  ><img
                    class="nonsticky-logo img-full"
                    src="static/picture/logo.png"
                    alt="Header Logo" /><img
                    class="sticky-logo img-full"
                    src="static/picture/white-logo.png"
                    alt="Header Logo"
                /></a>
              </div>
            </div>
            <div class="col-lg-10 col-md-6 col-6 d-flex justify-content-end">
              <nav class="main-nav d-none d-lg-flex">
                <ul class="nav">
                  <li>
                    <a class="active" href=""
                      ><span class="menu-text">Home</span
                      ><i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-submenu dropdown-hover">
                      <li><a class="active" href="">Home One</a></li>
                      <li><a href="index-2.html">Home Two</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html"
                      ><span class="menu-text">About</span></a
                    >
                  </li>
                  <li>
                    <a href="service.html"
                      ><span class="menu-text">Service</span></a
                    >
                  </li>
                  <li>
                    <a href="portfolio.html"
                      ><span class="menu-text">Portfolio</span
                      ><i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-submenu dropdown-hover">
                      <li><a href="portfolio.html">Portfolio One</a></li>
                      <li><a href="portfolio-2.html">Portfolio Two</a></li>
                      <li>
                        <a href="portfolio-details.html">Portfolio Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html"
                      ><span class="menu-text">Blog</span
                      ><i class="fa fa-angle-down"></i
                    ></a>
                    <ul class="dropdown-submenu dropdown-hover">
                      <li><a href="blog.html">Blog</a></li>
                      <li>
                        <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                      </li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html"
                      ><span class="menu-text">Contact</span></a
                    >
                  </li>
                </ul>
              </nav>
              <div class="header-right-area main-nav">
                <ul class="nav">
                  <li class="account-menu-wrap d-none d-lg-flex">
                    <a href="#" class="off-canvas-menu-btn"
                      ><i class="fa fa-bars"></i>33</a
                    >
                  </li>
                  <li class="search-box-menu d-block d-lg-none">
                    <a href="#" class="off-canvas-search-btn"
                      ><span class="btn-search"
                        ><i class="fa fa-search"></i></span
                    ></a>
                  </li>
                  <li class="mobile-menu-btn d-block d-lg-none">
                    <a class="off-canvas-btn" href="#"
                      ><i class="fa fa-bars"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="off-canvas-wrapper" id="mobileMenu">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-inner-content">
          <div class="btn-close-off-canvas"><i class="fa fa-times"></i></div>
          <div class="off-canvas-inner">
            <div class="offcanvas-widget-area">
              <div class="search-box-wrap off-canvas-item">
                <form action="#" method="post">
                  <input placeholder="Search.." /><button class="btn-search">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <div class="mobile-navigation">
                <nav>
                  <ul class="mobile-menu">
                    <li class="menu-item-has-children">
                      <a href="#">Home</a>
                      <ul class="dropdown">
                        <li><a href="">Home One</a></li>
                        <li><a href="index-2.html">Home Two</a></li>
                      </ul>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="service.html">Service</a></li>
                    <li class="menu-item-has-children">
                      <a href="#">Portfolio</a>
                      <ul class="dropdown">
                        <li><a href="portfolio.html">Portfolio One</a></li>
                        <li><a href="portfolio-2.html">Portfolio Two</a></li>
                        <li>
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul class="dropdown">
                        <li><a href="blog.html">Blog</a></li>
                        <li>
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                        </li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </nav>
              </div>
              <div class="widget-social">
                33
                <a title="Facebook" href="#"
                  ><i class="fa fa-facebook-f"></i>33</a
                ><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a
                ><a title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a
                ><a title="Youtube" href="#"><i class="fa fa-youtube"></i></a
                ><a title="Vimeo" href="#"><i class="fa fa-vimeo"></i></a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <aside class="off-canvas-search-wrapper">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-inner-content">
          <div class="off-canvas-inner">
            <form action="#" method="post">
              <input type="search" placeholder="Search.." /><button
                class="search-btn"
              >
                <i class="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </aside>
      <aside class="off-canvas-menu-wrapper" id="sideMenu">
        <div class="off-canvas-overlay"></div>
        <div class="off-canvas-inner-content">
          <div class="off-canvas-inner">
            <div class="offcanvas-widget-area">
              <div class="search-box-wrap off-canvas-item">
                <form action="#" method="post">
                  <input placeholder="Search.." /><button class="btn-search">
                    <i class="fa fa-search"></i>
                  </button>
                </form>
              </div>
              <ul class="menu-top-menu">
                <li><span>Who We Are</span></li>
              </ul>
              <p class="desc-content">
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul class="useful-link">
                <li><a href="">Home</a></li>
                <li><a href="service.html">Service</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
              </ul>
              <div class="widget-social">
                <ul class="menu-top-menu">
                  <li><span>Connect With Us</span></li>
                </ul>
                <a title="Facebook" href="#"><i class="fa fa-facebook-f"></i></a
                ><a title="Twitter" href="#"><i class="fa fa-twitter"></i></a
                ><a title="Linkedin" href="#"><i class="fa fa-linkedin"></i></a
                ><a title="Youtube" href="#"><i class="fa fa-youtube"></i></a
                ><a title="Vimeo" href="#"><i class="fa fa-vimeo"></i></a>
              </div>
            </div>
          </div>
          <div class="btn-close-off-canvas"><i class="fa fa-times"></i></div>
        </div>
      </aside>
    </header>
  </section>
</template>

<!--
开放能力
网器方案
技能中心
开发者
合作与生态
支持服务
-->

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
// nav {
//   padding: 8px 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #0d6efd !important;
//     }
//   }
// }
// .logotitle.router-link-exact-active {
//   color: #000 !important;
// }

.main-header-area {
  position: relative;
  background: #fff;
}

.main-header-area .header-logo img {
  width: 100%;
}

.header-sticky {
  width: 100%;
  z-index: 30;
  position: absolute;
  background-size: cover;
  background-position: 50% 0;
  -webkit-transition: background-color 0.3s, opacity 0.3s;
  -o-transition: background-color 0.3s, opacity 0.3s;
  transition: background-color 0.3s, opacity 0.3s;
  min-height: 100px;
}

@media (max-width: 767px) {
  .header-sticky {
    position: relative;
    min-height: 80px;
  }
}

@media (max-width: 479px) {
  .header-sticky {
    position: relative;
    min-height: 70px;
  }
}

.header-sticky .nonsticky-logo {
  display: none;
}

@media (max-width: 767px) {
  .header-sticky .nonsticky-logo {
    display: block;
  }
}

@media (max-width: 767px) {
  .header-sticky .sticky-logo {
    display: none;
  }
}

.header-sticky.sticky .nonsticky-logo {
  display: block;
}

.header-sticky.sticky .sticky-logo {
  display: none;
}

.header-sticky.sticky .main-header {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  -webkit-animation: 800ms ease-in-out 0s normal none 1 running slideInDown;
  animation: 800ms ease-in-out 0s normal none 1 running slideInDown;
  -webkit-box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.main-header {
  min-height: 100px;
}

@media (max-width: 767px) {
  .main-header {
    min-height: 80px;
  }
}

@media (max-width: 479px) {
  .main-header {
    min-height: 70px;
  }
}

.main-nav > ul > li {
  display: inline-block;
  position: relative;
}

.main-nav > ul > li:hover .dropdown-hover {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.main-nav > ul > li:hover .dropdown-hover-2 {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.main-nav > ul > li > a {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 40px 15px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  color: #212121;
}

.main-nav > ul > li > a.active {
  color: #122179;
}

.main-nav > ul > li > a:hover {
  color: #122179;
}

.main-nav > ul > li > a i {
  margin-left: 5px;
  font-size: 15px;
  vertical-align: middle;
  line-height: 1.5;
}

.main-nav > ul > li > a .menu-text {
  position: relative;
}

@media (max-width: 767px) {
  .main-nav > ul > li > a {
    padding: 32px 15px;
  }
}

@media (max-width: 479px) {
  .main-nav > ul > li > a {
    padding: 25px 15px;
  }
}

.main-nav.header-right-area > ul > li > a {
  padding-right: 0;
  padding-left: 0;
  margin-left: 15px;
}

.main-nav.header-right-area > ul > li > a:hover {
  color: #122179;
}

.header-transparent {
  background: transparent;
}

@media (max-width: 767px) {
  .header-transparent {
    background: #fff;
  }
}

.header-transparent.sticky .main-nav > ul > li > a {
  color: #212121;
}

.header-transparent.sticky .main-nav > ul > li > a:hover {
  color: #122179;
}

.header-transparent.sticky .search-box-menu .off-canvas-search-btn .btn-search {
  color: #212121;
}

.header-transparent.sticky
  .search-box-menu
  .off-canvas-search-btn
  .btn-search:hover {
  color: #122179;
}

.header-transparent .main-nav > ul > li > a {
  color: #fff;
}

@media (max-width: 767px) {
  .header-transparent .main-nav > ul > li > a {
    color: #212121;
  }
}

.header-transparent .main-nav > ul > li > a:hover .menu-text:before {
  left: 0;
  right: auto;
  width: 100%;
}

.header-transparent .main-nav > ul > li > a .menu-text:before {
  background-color: #fff;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 3px;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.header-transparent .search-box-menu .off-canvas-search-btn .btn-search {
  color: #fff;
}

@media (max-width: 767px) {
  .header-transparent .search-box-menu .off-canvas-search-btn .btn-search {
    color: #212121;
  }
}

.header-transparent .search-box-menu .off-canvas-search-btn .btn-search:hover {
  color: #122179;
}

.dropdown-submenu {
  background: #fff;
  padding: 20px 0 15px;
  width: 213px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-bottom: 3px solid #122179;
}

.dropdown-submenu > li {
  padding: 0 20px;
  margin-bottom: 5px;
}

.dropdown-submenu > li > a {
  padding: 10px 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-transform: capitalize;
  line-height: 18px;
  position: relative;
  color: #212121;
  font-size: 14px;
  font-weight: 400;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.dropdown-submenu > li > a:hover {
  color: #122179;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.dropdown-submenu > li > a:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}

.dropdown-submenu > li > a.active {
  color: #122179;
}

.dropdown-submenu > li > a:before {
  background-color: #122179;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 5px;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.dropdown-hover {
  position: absolute;
  top: 110%;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s linear 0.2s;
  -o-transition: all 0.3s linear 0.2s;
  transition: all 0.3s linear 0.2s;
  z-index: 999;
}

.off-canvas-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  z-index: 9999;
}

.off-canvas-wrapper.open {
  opacity: 1;
  visibility: visible;
}

.off-canvas-wrapper.open .off-canvas-inner-content {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}

.off-canvas-wrapper .off-canvas-inner-content {
  background-color: #fff;
  width: 380px;
  height: 100%;
  position: relative;
  -webkit-transform: translateX(calc(-100% - 50px));
  -ms-transform: translateX(calc(-100% - 50px));
  transform: translateX(calc(-100% - 50px));
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

@media (max-width: 479px) {
  .off-canvas-wrapper .off-canvas-inner-content {
    width: 280px;
  }
}

.off-canvas-wrapper .btn-close-off-canvas {
  left: 100%;
}

.off-canvas-wrapper .off-canvas-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: auto;
  height: 100%;
  overflow: auto;
}

.off-canvas-wrapper .offcanvas-widget-area {
  padding-top: 40px;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.off-canvas-wrapper .offcanvas-widget-area .widget-social {
  margin-top: auto;
  padding-bottom: 20px;
}

.off-canvas-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  content: "";
  // cursor: url(../image/cancel.png), auto;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.off-canvas-menu-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  z-index: 9999;
}

.off-canvas-menu-wrapper.open {
  opacity: 1;
  visibility: visible;
}

.off-canvas-menu-wrapper.open .off-canvas-inner-content {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
}

.off-canvas-menu-wrapper .off-canvas-inner-content {
  background-color: #fff;
  width: 400px;
  height: 100%;
  position: relative;
  -webkit-transform: translateX(calc(100% - 50px));
  -ms-transform: translateX(calc(100% - 50px));
  transform: translateX(calc(100% - 50px));
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  margin-left: auto;
  position: relative;
}

.off-canvas-menu-wrapper .off-canvas-inner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-left: auto;
  height: 100%;
  overflow: auto;
}

.off-canvas-menu-wrapper .offcanvas-widget-area {
  padding-top: 40px;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .desc-content {
  padding-bottom: 30px;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .menu-top-menu > li {
  list-style: none;
  margin-bottom: 20px;
  white-space: nowrap;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .menu-top-menu > li > span {
  font-size: 16px;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 23px;
  color: #212121;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .useful-link {
  margin: 20px 0;
  padding-bottom: 30px;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .useful-link li a {
  font-size: 14px;
  text-transform: uppercase;
  padding: 10px 0;
  font-weight: 600;
  color: #212121;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .useful-link li a:hover {
  color: #122179;
}

.off-canvas-menu-wrapper .offcanvas-widget-area .widget-social {
  margin-top: auto;
  padding-bottom: 20px;
}

.btn-close-off-canvas {
  width: 50px;
  height: 56px;
  color: #212121;
  line-height: 56px;
  cursor: pointer;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  position: absolute;
  top: 0;
  right: 100%;
  background: #f8f9fa;
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.btn-close-off-canvas i {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  font-size: 24px;
  line-height: 24px;
}

.btn-close-off-canvas:hover {
  color: #122179;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.btn-close-off-canvas:hover i {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

@media (max-width: 479px) {
  .btn-close-off-canvas {
    width: 35px;
  }

  .btn-close-off-canvas i {
    font-size: 18px;
  }
}

.offcanvas-widget-area {
  padding: 0 40px 20px;
}

@media (max-width: 479px) {
  .offcanvas-widget-area {
    padding: 0 30px 20px;
  }
}

.offcanvas-widget-area .search-box-wrap {
  background-color: #f8f9fa;
  margin: -40px -40px 60px -40px;
  padding: 14px 40px;
}

@media (max-width: 479px) {
  .offcanvas-widget-area .search-box-wrap {
    margin: -40px -30px 60px -30px;
  }
}

.offcanvas-widget-area .search-box-wrap form {
  position: relative;
}

.offcanvas-widget-area .search-box-wrap form input {
  background-color: transparent;
  border: 0;
  display: block;
  padding-right: 30px;
  outline: 0;
  width: 100%;
}

.offcanvas-widget-area .search-box-wrap form .btn-search {
  border: 0;
  background-color: transparent;
  font-size: 16px;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.offcanvas-widget-area .search-box-wrap form .btn-search:hover {
  color: #122179;
}

.mobile-header .category-toggle {
  padding: 8px 15px;
}

.mobile-menu {
  height: 100%;
  padding-right: 30px;
  margin-right: -30px;
  margin-bottom: 40px;
}

.mobile-menu li > a {
  font-size: 15px;
  color: #252525;
  text-transform: capitalize;
  line-height: 18px;
  position: relative;
  display: block;
  padding: 15px 0;
  font-weight: 600;
}

.mobile-menu li > a:hover {
  color: #000;
}

.mobile-menu li ul li {
  border: 0;
}

.mobile-menu li ul li a {
  font-size: 14px;
  text-transform: capitalize;
  padding: 10px 15px 8px;
  font-weight: 400;
}

.mobile-menu .has-children,
.mobile-menu .menu-item-has-children {
  position: relative;
}

.mobile-menu .has-children .menu-expand,
.mobile-menu .menu-item-has-children .menu-expand {
  line-height: 50;
  top: 0;
  left: 100%;
  width: 30px;
  position: absolute;
  height: 50px;
  text-align: center;
  cursor: pointer;
}

@media (max-width: 767px) {
  .mobile-menu .has-children .menu-expand,
  .mobile-menu .menu-item-has-children .menu-expand {
    left: 90%;
  }
}

.mobile-menu .has-children .menu-expand i,
.mobile-menu .menu-item-has-children .menu-expand i {
  display: block;
  position: relative;
  width: 10px;
  margin-top: 23px;
  border-bottom: 1px solid #252525;
  -webkit-transition: all 250ms ease-out;
  -o-transition: all 250ms ease-out;
  transition: all 250ms ease-out;
}

.mobile-menu .has-children .menu-expand i:before,
.mobile-menu .menu-item-has-children .menu-expand i:before {
  top: 0;
  width: 100%;
  content: "";
  display: block;
  position: absolute;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  border-bottom: 1px solid #252525;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.mobile-menu .has-children.active > .menu-expand i:before,
.mobile-menu .menu-item-has-children.active > .menu-expand i:before {
  -webkit-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
}

.mobile-navigation nav {
  height: 100%;
}

.off-canvas-search-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  z-index: 9999;
}

.off-canvas-search-wrapper.open {
  opacity: 1;
  visibility: visible;
  pointer-events: visible;
  z-index: 9999;
}

.off-canvas-search-wrapper.open .off-canvas-inner {
  opacity: 1;
  visibility: visible;
  -webkit-animation: slideInUp 1s forwards;
  animation: slideInUp 1s forwards;
}

.off-canvas-search-wrapper .off-canvas-inner-content {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
}

.off-canvas-search-wrapper .off-canvas-inner {
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}

.off-canvas-search-wrapper .off-canvas-inner form {
  position: relative;
  width: 90%;
  margin: auto;
}

.off-canvas-search-wrapper .off-canvas-inner form input {
  background-color: #e9ecef;
  border: 0;
  outline: 0;
  padding: 15px 80px 15px 15px;
  display: block;
  width: 100%;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.off-canvas-search-wrapper .off-canvas-inner form .search-btn {
  background-color: #122179;
  color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  border: 0;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  height: 100%;
  width: 60px;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.off-canvas-search-wrapper .off-canvas-inner form .search-btn:hover {
  background-color: #212121;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.off-canvas-search-wrapper .off-canvas-overlay {
  background-color: rgba(255, 255, 255, 0.8) !important;
}

.search-box-menu .off-canvas-search-btn .btn-search {
  border: 0;
  background: transparent;
  font-size: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.search-box-menu .off-canvas-search-btn .btn-search:hover {
  color: #122179;
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
</style>