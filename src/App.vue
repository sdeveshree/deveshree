<template>
  <div id="app">
    <!-- Homepage First Section Container: Starts -->
    <b-container fluid class="bg-black">
      <b-row>
       <b-col>
          <div class="fullpage-section d-flex justify-content-center align-items-center flex-column">
            <div class="video">
              <!-- <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6IZmfx9jFSo?autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&enablejsapi=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </div>
            <div class="description">
              <div class="icons">
                <img src="@/assets/1.png"/>
                <img src="@/assets/2.png"/>
                <img src="@/assets/3.png"/>
                <img src="@/assets/4.png"/>
              </div>
              <h1>Deveshree Shinde</h1>
              <h2>D i g i t a l - M a r k e t e r</h2>
              <h2>Born in India, Living in Toronto</h2>
              <h2>Raised in the 90's</h2>
              <h2>Available for hire</h2>
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
    <!-- Homepage First Section Container: Ends   -->

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
                  <h2>A Creative Digital Agency For Fashion</h2>
                </div>
              </div><!--/ portfolio-item-description -->
            </div><!--/ portfolio-item -->
            <div class="scroll-animation text-center">
              <svg width="15px" height="110px">
                <path stroke="black" d="M8.5 0 L8.5 110" />
              </svg>
            </div><!--/scroll-animation -->
          </div><!--/ portfolio-item-container -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
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
</style>
