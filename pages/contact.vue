<template>
  <div>
    <Nav />
    <b-container
      class="mt-4"
    >
      <h1 class="text-center">Contact</h1>
      <p class="text-center">Stuur me een berichtje!</p>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-email"
          label="Email adres"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="text"
            required
            placeholder="Vul je email in"
            @blur="validateEmail"
          />
          <p
            v-if="errors.email"
            class="text-danger"
          >
            Please enter a valid email
          </p>
        </b-form-group>
        <b-form-group
          id="input-group-name"
          label="Naam"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            required
            placeholder="Vul je naam in"
          />
        </b-form-group>
        <b-form-group
          id="input-group-message"
          label="Bericht"
          label-for="input-message"
        >
          <b-form-textarea
            id="input-message"
            v-model="form.message"
            type="text"
            required
            placeholder="Vul hier je bericht in"
            rows="10"
            max-rows="10"
          />
        </b-form-group>
        <input
          type="submit"
          class="btn btn-primary"
          value="Verstuur"
        />
      </b-form>
      <p
        class="text-center font-weight-bold"
        v-bind:class="{ 'text-success': goodResponse, 'text-warning': !goodResponse }"
      >
        Please wait 10 minutes
      </p>
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

const querystring = require('querystring')

export default {
  components: {
    Nav
  },
  data () {
    return {
      sent: false,
      response: '',
      goodResponse: false,
      form: {
        email: '',
        name: '',
        message: '',
        ip: ''
      },
      errors: {
        email: false
      }
    }
  },
  async fetch () {
    this.form.ip = await this.$axios.$get('http://v6.ipv6-test.com/api/myip.php')
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      if (this.errors.email === false) {
        this.$axios.post('https://api.damienhensen.nl/mail.php', querystring.stringify(this.form)).then((res) => {
          this.sent = true
          this.response = res.data
        })
      }
    },
    validateEmail () {
      const isValid = window.isValidEmail(this.form.email)
      this.errors.email = !isValid
    },
    handleResponse () {
      if (this.response === 'Please wait 10 minutes') {
        this.goodResponse = false
      } else {
        this.goodResponse = true
      }
    }
  }
}
</script>
