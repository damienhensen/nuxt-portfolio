<template>
  <div>
    <Nav v-on:lang="getLang($event)" />
    <b-container class="mt-4">
      <h1 class="text-center">{{ pageTitle }}</h1>
      <b-row class="mt-3 mb-5">
        <b-col lg="8" cols="12" class="text-center">
          <b-img
            fluid
            src="/me.png"
          />
        </b-col>
        <b-col lg="4">
          <pre>{{ aboutMe }}</pre>
          <b-row class="text-center">
            <b-col cols="12">
            <h3 class="mx-auto pb-3">{{ cvText }}</h3>
            </b-col>
            <b-col cols="6">
              <a href="/downloads/cv.pdf" class="btn btn-primary" target="_blank">{{ cvLook }}</a>
            </b-col>
            <b-col cols="6">
              <a href="/downloads/cv.pdf" class="btn btn-primary" download="damien-hensen-cv.pdf">{{ cvDownload }}</a>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h2 class="text-center">{{ whatIKnow }}</h2>
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
          <h4>{{ programs }}</h4>
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
      pageTitle: 'Over mij',
      aboutMe: 'Hoi! Ik ben Damien Hensen en ik ben een developer.\r\nIk woon in Zaandam en ik ben 17 jaar oud.\r\nIk zit in mijn 2de jaar op het Media College Amsterdam en doe de opleiding Mediadeveloper.',
      cvText: 'Hier kan je mijn CV',
      cvLook: 'Bekijken',
      cvDownload: 'Downloaden',
      whatIKnow: 'Wat ik kan',
      programs: 'Programma\'s'
    }
  },
  methods: {
    getLang (language) {
      if (language === 'en') {
        this.pageTitle = 'About me'
        this.aboutMe = 'Hi! My name is Damien Hensen and I am a developer.\r\nI live in Zaandam and I am 17 years old.\r\nI am currently in my second year at Media College Amsterdam and I am doing the course Mediadeveloper.'
        this.cvText = 'Here you can'
        this.cvLook = 'Check out my CV'
        this.cvDownload = 'Download my CV'
        this.whatIKnow = 'What I can do'
        this.programs = 'Programs'
      } else {
        this.pageTitle = 'Over mij'
        this.aboutMe = 'Hoi! Ik ben Damien Hensen en ik ben een developer.\r\nIk woon in Zaandam en ik ben 17 jaar oud.\r\nIk zit in mijn 2de jaar op het Media College Amsterdam en doe de opleiding Mediadeveloper.'
        this.cvText = 'Hier kan je mijn CV'
        this.cvLook = 'Bekijken'
        this.cvDownload = 'Downloaden'
        this.whatIKnow = 'Wat ik kan'
        this.programs = 'Programma\'s'
      }
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

pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    font: 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
}
</style>
