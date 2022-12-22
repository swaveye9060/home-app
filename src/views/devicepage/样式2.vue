<template>
  <section class="pagebox">
    <div>
      <div class="portfolio-section masonry-wrapper pt-90">
        <div class="container">
          <div class="row mt-n2">
            <div class="messonry-button text-center mb-6" data-aos="fade-up">
              <button data-filter="*" class="is-checked port-filter">All</button
              ><button data-filter=".cat-1" class="port-filter">App</button
              ><button data-filter=".cat-2" class="port-filter">
                Development</button
              ><button data-filter=".cat-3" class="port-filter">
                Marketing</button
              ><button data-filter=".cat-4" class="port-filter">Software</button
              ><button data-filter=".cat-5" class="port-filter">
                UX Design
              </button>
            </div>
          </div>
          <div
            class="
              row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1
              mesonry-list
              mb-n6
            "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="resizer col"></div>
            <div class="col cat-1 cat-3 cat-4 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/11.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Company Typeface</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col cat-2 cat-5 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/2.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Nature Vibes</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col cat-3 cat-2 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/03.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Typography Design</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col cat-4 cat-5 cat-3 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/04.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Deliver Result</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col cat-5 cat-1 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/05.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Truly Creative</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="col cat-2 cat-1 cat-4 mb-6">
              <div class="single-portfolio-wrap">
                <figure
                  class="portfolio-thumb hover-style position-relative m-0"
                >
                  <a href="portfolio-details.html"
                    ><img
                      src="../../assets/picture/06.jpg"
                      alt="Portfolio Image"
                    />
                    <div class="overlay-1"></div>
                  </a>
                  <figcaption class="portfolio-details">
                    <div class="port-info">
                      <h3 class="title">
                        <a href="portfolio-details.html">Best of the web</a>
                      </h3>
                      <nav class="nav portfolio-cate">
                        <a href="portfolio-details.html">Design</a
                        ><span>&nbsp;/&nbsp;</span
                        ><a href="portfolio-details.html">Photography</a>
                      </nav>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="false" class="container text-center">
      <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="pills-tabs01-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tabs01"
            type="button"
            role="tab"
            aria-controls="pills-tabs01"
            aria-selected="true"
          >
            快速解决方案
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-tab02-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tab02"
            type="button"
            role="tab"
            aria-controls="pills-tab02"
            aria-selected="false"
          >
            设备解决方案
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-tab03-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-tab03"
            type="button"
            role="tab"
            aria-controls="pills-tab03"
            aria-selected="false"
          >
            行业解决方案
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-tabs01"
          role="tabpanel"
          aria-labelledby="pills-tabs01-tab"
          tabindex="0"
        >
          ...666
        </div>
        <div
          class="tab-pane fade"
          id="pills-tab02"
          role="tabpanel"
          aria-labelledby="pills-tab02-tab"
          tabindex="0"
        >
          <TabTwo />
        </div>
        <div
          class="tab-pane fade"
          id="pills-tab03"
          role="tabpanel"
          aria-labelledby="pills-tab03-tab"
          tabindex="0"
        >
          ...4
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    TabOne: () => import("./tabs/TabOne.vue"),
    TabTwo: () => import("./tabs/TabTwo.vue"),
  },
};
</script>

<style lang="less" scoped>
.pagebox {
  height: 2000px;
  // height: 50px;
  // border: 1px solid #000;
}

.portfolio-section .single-portfolio-wrap .port-info {
  position: absolute;
  top: 40%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
}

.portfolio-section .single-portfolio-wrap .port-info .title {
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.portfolio-section .single-portfolio-wrap .port-info .title a {
  color: #fff;
}

.portfolio-section .single-portfolio-wrap .port-info .portfolio-cate a {
  color: #fff;
  position: relative;
}

.portfolio-section .single-portfolio-wrap .port-info .portfolio-cate a:before {
  background-color: #fff;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 4px;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.portfolio-section
  .single-portfolio-wrap
  .port-info
  .portfolio-cate
  a:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}

.portfolio-section .single-portfolio-wrap:hover .port-info {
  top: 50%;
  opacity: 1;
  visibility: visible;
}

.portfolio-section .single-portfolio-wrap .portfolio-thumb > a {
  display: block;
}

.portfolio-section .single-portfolio-wrap .portfolio-thumb > a > img {
  width: 100%;
}

.messonry-button .port-filter {
  position: relative;
  border: 0;
  background-color: #fff;
  padding: 0;
  margin: 0 30px 10px 0;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  color: #212121;
}

.messonry-button .port-filter:before {
  background-color: #122179;
  content: "";
  position: absolute;
  left: auto;
  right: 0;
  bottom: 0;
  height: 2px;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
  width: 0;
}

.messonry-button .port-filter:last-child {
  margin-right: 0;
}

.messonry-button .port-filter:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter.is-checked {
  color: #122179;
}

.messonry-button .port-filter.is-checked:before {
  left: 0;
  right: auto;
  width: 100%;
}

.messonry-button .port-filter:hover {
  color: #122179;
  left: 0;
  right: auto;
  -webkit-transition: 0.4s;
  -o-transition: 0.4s;
  transition: 0.4s;
}

.messonry-button .port-filter:hover:before {
  left: 0;
  right: auto;
  width: 100%;
}

.hover-style {
  display: block;
  overflow: hidden;
}

.hover-style img {
  -webkit-transform: scale(1.01) rotate(0.05deg);
  -ms-transform: scale(1.01) rotate(0.05deg);
  transform: scale(1.01) rotate(0.05deg);
  -webkit-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}

.hover-style .overlay-1 {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  content: "";
  background-color: black;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}

.hover-style:hover img {
  -webkit-transform: scale(1.05) rotate(0.05deg);
  -ms-transform: scale(1.05) rotate(0.05deg);
  transform: scale(1.05) rotate(0.05deg);
  -webkit-transition: all 0.6s ease-in-out;
  -o-transition: all 0.6s ease-in-out;
  transition: all 0.6s ease-in-out;
}

.hover-style:hover .overlay-1 {
  opacity: 0.7;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
</style>