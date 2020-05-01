<template>
  <div>
    <Nav />
    <b-container>
      <form id="contact-form" @submit.prevent="processContactForm">
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        >
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          @blur="validateEmail"
        >
        <p v-if="errors.email">Please enter a valid email</p>
        <input type="submit" value="Enter">
      </form>
    </b-container>

    <script>
      function isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    </script>
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
      name: '',
      email: '',
      errors: {
        name: false,
        email: false
      }
    }
  },
  methods: {
    processContactForm () {
      console.log({ name: this.name, email: this.email })
      alert('processing')
    },
    validateEmail () {
      const isValid = window.isValidEmail(this.email)
      this.errors.email = !isValid
    }
  }
}
</script>

<style>
</style>
