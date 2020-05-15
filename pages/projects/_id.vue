<template>
  <div>
    <Nav v-on:lang="getLang($event)" />
    <b-container
      class="mt-5"
    >
      <div v-if="$fetchState.pending">Fetching project: {{$route.params.id}}...</div>
      <b-row v-else>
        <b-col lg="8">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="0"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              v-for="slides in project.slides"
              v-bind:key="slides.image"
              :caption="slides.caption"
              :img-src="slides.image"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col
          lg="4"
        >
          <h1>{{ project.title }}</h1>
          <pre>{{ details }}</pre>
          <p>{{ whatIUsed }}</p>
          <ul v-for="skill in project.skills" v-bind:key="skill">
            <li>{{ skill }}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col col="6">
          <table class="table">
            <h3>Downloads</h3>
            <tbody>
              <tr
                v-for="download in project.downloads"
                v-bind:key="download.name"
              >
                <td>
                  <a
                    :href="download.link"
                    :download="download.filename"
                  >
                  {{ download.name }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col col="6">
          <table class="table">
            <h3>Links</h3>
            <tbody>
              <tr
                v-for="link in project.links"
                v-bind:key="link.name"
              >
                <td>
                  <a
                    :href="link.link"
                    target="_blank"
                  >
                  {{ link.to }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
      whatIUsed: 'Wat ik voor dit project heb gebruikt:',
      project: {},
      details: '',
      slide: 0,
      sliding: null
    }
  },
  async fetch () {
    // if (this.language === 'nl') {
    // this.project = await this.$axios.$get(`http://localhost:3001/projectsnl/${this.$route.params.id}`)
    this.project = await this.$axios.$get(`https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projectsnl/${this.$route.params.id}`)
    // } else if (this.language === 'en') {
    // this.project = await this.$axios.$get(`http://localhost:3001/projectsen/${this.$route.params.id}`)
    // this.project = await this.$axios.$get(`https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projectsen/${this.$route.params.id}`)
    // }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getLang (language) {
      if (language === 'en') {
        this.language = 'en'
        this.whatIUsed = 'What I used for this project:'
        switch (this.$route.params.id) {
          case 'my-band':
            this.details = 'We got code from a teacher, ALTO Router en Plates/League (template engine).\r\nI made user stories, after that I made a design and wireframes.\r\nThen I started programming.'
            break
          case 'purple-shrimp':
            this.details = 'First my teammate made a design for the site. He made what you can see. I made the rest.\r\nI made a flowchart to show how everything is supposed to go.\r\nI made a login system wherein you get a verification email with the php mail() function.'
            break
          case 'chathub':
            this.details = 'I immediatly started programming.\r\nWhen you send a message it gets sent to a database with AJAX.\r\nAnd every message gets fetched and put inside a div every second or so.'
            break
          case 'sowiso':
            this.details = 'We got a design and from that design we made a website.\r\nI made most of the site: the home page, technologies, careers and contact.'
            break
          default
            :
            this.details = this.project.details
            break
        }
        // this.project = await this.$axios.$get(`http://localhost:3001/projectsen/${this.$route.params.id}`)
        // this.project = await this.$axios.$get(`https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projectsen/${this.$route.params.id}`)
      } else {
        this.language = 'nl'
        this.whatIUsed = 'Wat ik voor dit project heb gebruikt:'
        this.details = this.project.details
        // this.project = await this.$axios.$get(`http://localhost:3001/projectsnl/${this.$route.params.id}`)
        // this.project = await this.$axios.$get(`https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projectsnl/${this.$route.params.id}`)
      }
    }
  }
}
</script>

<style scoped>
pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    font: 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>
