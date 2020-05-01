<template>
  <div>
    <Nav />
    <b-container>
      <h1>Blog projects</h1>
      <ul>
        <li v-for="project of projects" :key="project.id">
          <n-link :to="`/projects/${project.id}`">{{ project.title }}</n-link>
        </li>
      </ul>
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
    this.projects = await this.$axios.$get('http://127.0.0.1:3001/projects')
  }
}
</script>

<style scoped>
</style>
