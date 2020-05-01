<template>
  <div>
    <Nav />
    <b-container class="projects">
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
      projects: []
    }
  },
  async fetch () {
    this.projects = await this.$axios.$get('https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projects')
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
