<template>
  <div>
    <Nav />
    <b-container class="mt-4">
      <h1 class="text-center">Over mij</h1>
      <b-row class="mt-3 mb-5">
        <b-col lg="8" cols="12" class="text-center">
          <b-img
            fluid
            src="/me.png"
          />
        </b-col>
        <b-col lg="4">
          <p>
            Hoi! Ik ben Damien Hensen en ik ben een developer.
            <br>
            Ik woon in Zaandam en ik ben 17 jaar oud.
            <br>
            Ik zit in mijn 2de jaar op het Media College Amsterdam en doe de opleiding Mediadeveloper.
          </p>
          <b-row class="text-center">
            <b-col cols="12">
            <h3 class="mx-auto pb-3">Hier kan je mijn CV</h3>
            </b-col>
            <b-col cols="6">
              <a href="/downloads/cv.pdf" class="btn btn-primary" target="_blank">Bekijken</a>
            </b-col>
            <b-col cols="6">
              <a href="/downloads/cv.pdf" class="btn btn-primary" download="damien-hensen-cv.pdf">Downloaden</a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h2 class="text-center">Wat ik kan</h2>
      <b-row>
        <b-col md="3" cols="6">
          <h4>Front-end</h4>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              jQuery
            </li>
            <li>
              SASS
            </li>
          </ul>
        </b-col>
        <b-col md="3" cols="6">
          <h4>Back-end</h4>
          <ul>
            <li>
              PHP
            </li>
            <li>
              SQL
            </li>
          </ul>
        </b-col>
        <b-col md="3" cols="6">
          <h4>Frameworks</h4>
          <ul>
            <li>
              Laravel
            </li>
            <li>
              Nuxt
            </li>
          </ul>
        </b-col>
        <b-col md="3" cols="6">
          <h4>Programs</h4>
          <ul>
            <li>
              PhotoShop
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'

export default {
  components: {
    Nav
  },
  data () {
    return {
      projects: []
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

ul li:before {
  content: '✓';
}
</style>
