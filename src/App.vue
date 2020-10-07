<template>
  <div id="app">
    <div class="pointer d-flex align-items-center justify-content-center">
      <b-icon-arrow-left-right class="arrow"></b-icon-arrow-left-right>
    </div>
    <!-- Homepage Hero Content: Starts -->
    <b-container fluid class="bg-black">
      <b-row>
       <b-col>
          <div class="fullpage-section d-flex justify-content-center align-items-center flex-column text-center">
            <div class="video">
              <!-- <b-embed
                type="iframe"
                aspect="16by9"
                src="https://www.youtube.com/embed/6IZmfx9jFSo?autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&enablejsapi=1&mute=1"
                allowfullscreen
              ></b-embed> -->
              <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6IZmfx9jFSo?autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&enablejsapi=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </div>
            <div class="description">
              <div class="icons" data-aos="fade-up" data-aos-duration="1000">
                <img src="@/assets/1.png"/>
                <img src="@/assets/2.png"/>
                <img src="@/assets/3.png"/>
                <img src="@/assets/4.png"/>
              </div>
              <h1 data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">Deveshree Shinde</h1>
              <h2 data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">D i g i t a l - M a r k e t e r</h2>
              <h2 data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">Born in India, Living in Toronto</h2>
              <h2 data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">Raised in the 90's</h2>
              <h2 data-aos="fade-left" data-aos-duration="1000"  data-aos-delay="1000">Available for hire</h2>
            </div>
            <div class="scroll-animation">
              <svg width="15px" height="55px">
                <path stroke="white" d="M8.5 0 L8.5 55" />
              </svg>
              <span>Scroll</span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- /Homepage Hero Content: Ends -->

    <!-- Homepage - Journey Map: Starts -->
    <b-container>
      <b-row>
        <b-col>
          <div class="info-section-container">
            <div class="info-section">
              <div class="info-section-header-container" data-aos="fade-right" data-aos-duration="1000">
                <div class="info-section-header">
                  <h1>Skills <span>.101</span></h1>
                </div><!--/info-section-header -->
                <div class="info-section-subheader d-flex align-items-baseline">
                  <h1><b>MY JOURNEY</b></h1>
                  <h2>Through Digital Marketing</h2>
                </div><!--/info-section-subheader -->
              </div><!-- /info-section-header-container -->
            </div><!-- /info-section -->
          </div><!-- /section-container -->
        </b-col>
      </b-row>
    </b-container>
    <section>
      <div class="chart-container">
        <div class="chart-scroll-container d-flex"
          @mouseenter="mouseEnterChart"
          @mouseleave="mouseLeaveChart">
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Branding, Strategy, and Planning: 101</h2>
            </div>
          </div>
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Content Marketing</h2>
            </div>
          </div>
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Social Media Marketing</h2>
            </div>
          </div>
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Performance Marketing</h2>
            </div>
          </div>
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Analytics & Reporting</h2>
            </div>
          </div>
          <div class="chart-item-container">
            <div class="chart-item d-flex align-items-center text-center">
              <h2>Professional Development</h2>
            </div>
          </div>
        </div><!--/chart-scroll-container -->
      </div><!--/ chart-container -->
      <div class="scroll-animation text-center">
        <svg width="15px" height="55px">
          <path stroke="black" d="M8.5 0 L8.5 55" />
        </svg>
      </div><!-- /scroll-animation -->
    </section>
    <!-- /Homepage - Journey Map: Starts -->

    <!-- Portfolio Section
    <b-container>
      <b-row>
        <b-col>
          <div class="portfolio-item-container">
            <div class="portfolio-item">
              <div class="portfolio-item-description">
                <div class="project-number">
                  <h1>Project <span>.01</span></h1>
                </div>
                <div class="project-description d-flex align-items-baseline">
                  <h1><b>HYPERLOCAL</b></h1>
                  <h2>&nbsp;&nbsp;- A Creative Digital Agency For Fashion</h2>
                </div>
              </div>
            </div>
            <div class="scroll-animation text-center">
              <svg width="15px" height="110px">
                <path stroke="black" d="M8.5 0 L8.5 110" />
              </svg>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  methods: {
    mouseEnterChart (e) {
      const pointer = document.querySelector('.pointer')
      pointer.classList.add('expand')
    },
    mouseLeaveChart (e) {
      const pointer = document.querySelector('.pointer')
      pointer.classList.remove('expand')
    }
  }
}
</script>

<style lang="scss">
// Hero Content: CSS Begins
.fullpage-section {
  position: relative;
  overflow: hidden;
  .video {
    position: absolute;
    width: 100%;
    height: 120%;
    opacity: 0.3;
    pointer-events: none;
  }
  .description {
    z-index: 1;
    text-transform: uppercase;
    padding: 300px 20px 245px;
    h1 {
      margin-bottom: 20px;
      font-size: 6.5rem;
      font-weight: bold;
    }
    .icons {
      padding-bottom: 10px;
      img {
        max-width: 25px;
        margin: 0 20px;
        animation: circle 2s linear infinite;
      }
    }
  }
}
// Hero Content: CSS Ends

// Journey Map CSS: Starts
.info-section-container {
  .info-section {
    padding: 100px 20px 20px;
    .info-section-header-container {
      padding-bottom: 100px;
      .info-section-header {
        h1 {
          text-transform: uppercase;
          margin-bottom: 20px;
          font-size: 6.5rem;
          font-weight: bold;
          span {
            font-size: 20rem;
          }
        }
      }
      .info-section-subheader {
        h1 {
          font-size: 6.5rem;
          font-weight: bold;
        }
        h2 {
          padding-left: 20px;
        }
      }
    }
  }
}
.chart-container {
  padding-bottom: 100px;
  .chart-scroll-container {
    overflow-x: scroll;
    padding-left: 25vw;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    .chart-item-container {
      padding-right: 100px;
      &:last-child {
        padding-right: 25vw;
      }
      .chart-item {
        width: 200px;
        height: 200px;;
        border: 5px solid #232323;
        border-radius: 5px;
        padding: 10px;
        justify-content: center;
      }
    }
  }
}
// Journey Map CSS: Ends

.portfolio-item-container {
  .portfolio-item {
    padding: 100px 20px 20px;
    .portfolio-item-description {
      h1 {
        text-transform: uppercase;
        margin-bottom: 20px;
        font-size: 6.5rem;
        font-weight: bold;
        span {
          font-size: 20rem;
        }
      }
      h2 {

      }
    }
  }
}

@keyframes circle{
  0%{
    transform:rotate(0deg);
  }
  100%{
  transform:rotate(360deg);
  }
}

.pointer {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(254, 220, 38, 0.3);
  border: 1px solid rgba(254, 220, 38, 0.9);
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  .b-icon.bi.arrow {
    display: none;
  }
  &.expand {
    width: 40px;
    height: 40px;
    .b-icon.bi.arrow {
      display: block;
    }
  }
}
</style>
