<template>
  <div>
    <Nav v-on:lang="getLang($event)" />
    <b-container class="projects">
      <h1 class="text-center m-4">{{ myWork }}</h1>
      <b-row class="mt-3">
        <b-col
          v-for="project of projects"
          :key="project.id"
          md="4"
          class="col"
        >
          <n-link
            :to="`/projects/${project.id}`"
          >
            <b-col
              md="12"
            >
              <b-row>
                <b-img
                  fluid
                  v-bind:src="project.image"
                />
              </b-row>
              <b-row>
                <p
                  class="mx-auto pt-3"
                >
                  {{ project.title }}
                </p>
              </b-row>
            </b-col>
          </n-link>
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
      myWork: 'Mijn werk',
      projects: []
    }
  },
  async fetch () {
    // this.projects = await this.$axios.$get('https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projects')
    this.projects = await this.$axios.$get('http://localhost:3001/projects')
  },
  methods: {
    getLang (language) {
      if (language === 'en') {
        this.myWork = 'My work'
      } else {
        this.myWork = 'Mijn werk'
      }
    }
  }
}
</script>

<style scoped>
.col {
    /* background-color: purple; */
}

.projects a {
    color: #000000;
}
</style>
