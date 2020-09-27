<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-container fluid class="bg-black">
      <b-row>
       <b-col>
          <div class="fullpage-section d-flex justify-content-center align-items-center">
            <div class="video">
              <!-- <iframe frameborder="0" height="100%" width="100%" src="https://www.youtube.com/embed/6IZmfx9jFSo?autoplay=1&controls=0&showinfo=0&autohide=1"></iframe> -->
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6IZmfx9jFSo?controls=0&autoplay=1&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="description">
              <h1>Deveshree Shinde</h1>
              <h2>Digital Marketer</h2>
              <h2>Born in India, Living in Toronto</h2>
              <h2>Raised in the 90's</h2>
              <h2>Available to hire</h2>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <b-col>
          <div class="fullpage-section">
            <h1>Deveshree Shinde</h1>
            <h2>Digital Marketer</h2>
            <h2>Born in India, Living in Toronto</h2>
            <h2>Raised in the 90's</h2>
            <h2>Available to hire</h2>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
.fullpage-section {
  height: 100vh;
  padding: 20px;
  .video {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
  .description {
    z-index: 1;
    text-transform: uppercase;
    h1 {
      margin-bottom: 20px;
      font-size: 6.5rem;
      font-weight: bold;
    }
  }
}
</style>
