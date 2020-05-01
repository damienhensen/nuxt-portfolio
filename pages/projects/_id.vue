<template>
  <div>
    <Nav />
    <b-container
      class="mt-5"
    >
      <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div>
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
          <pre>{{ project.details }}</pre>
          <p>Wat ik voor dit project heb gebruikt:</p>
          <ul v-for="skill in project.skills" v-bind:key="skill">
            <li>{{ skill }}</li>
          </ul>
        </b-col>
      </b-row>
      <b-row>
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
      project: {},
      slide: 0,
      sliding: null
    }
  },
  async fetch () {
    this.project = await this.$axios.$get(`https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projects/${this.$route.params.id}`)
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
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
