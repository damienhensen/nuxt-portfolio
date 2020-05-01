<template>
  <div>
    <Nav />
    <b-container>
      <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div>
      <div v-else>
        <h1>{{ project.title }}</h1>
        <p>{{ project.details }}</p>
        <p><n-link to="/">Back to posts</n-link></p>
      </div>
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
      project: {}
    }
  },
  async fetch () {
    this.project = await this.$axios.$get(`http://127.0.0.1:3001/projects/${this.$route.params.id}`)
  }
}
</script>

<style scoped>
</style>
