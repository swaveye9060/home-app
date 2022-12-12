<template>
  <section>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav> -->

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
                      ><i class="fa fa-bars"></i
                    ></a>
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
                <a title="Facebook" href="#"><i class="fa fa-facebook-f"></i></a
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

<script>
export default {};
</script>

<style>
</style>