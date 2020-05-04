<template>
  <div>
    <Nav v-on:lang="getLang($event)" />
    <b-container
      class="mt-4"
    >
      <h1 class="text-center">Contact</h1>
      <p class="text-center">{{ sendMe }}</p>
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-email"
          :label="email"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="text"
            required
            :placeholder="enterEmail"
            @blur="validateEmail"
          />
          <p
            v-if="errors.email"
            class="text-danger"
          >
            {{ validEmail }}
          </p>
        </b-form-group>
        <b-form-group
          id="input-group-name"
          :label="name"
          label-for="input-name"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            required
            :placeholder="enterName"
          />
        </b-form-group>
        <b-form-group
          id="input-group-message"
          :label="message"
          label-for="input-message"
        >
          <b-form-textarea
            id="input-message"
            v-model="form.message"
            type="text"
            required
            :placeholder="enterMessage"
            rows="10"
            max-rows="10"
          />
        </b-form-group>
        <input
          type="submit"
          class="btn btn-primary"
          :value="send"
        />
      </b-form>
      <p
        class="text-center font-weight-bold"
        v-bind:class="{ 'text-success': goodResponse, 'text-warning': !goodResponse }"
      >
        {{ response }}
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
      sendMe: 'Stuur me een berichtje!',
      name: 'Naam',
      enterName: 'Vul je naam in',
      email: 'Email adres',
      enterEmail: 'Vul je email in',
      validEmail: 'Voer A.U.B. een valide email in',
      message: 'Bericht',
      enterMessage: 'Vul hier je bericht in',
      send: 'Verstuur',
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
    },
    getLang (language) {
      if (language === 'en') {
        this.sendMe = 'Send me a message!'
        this.name = 'Name'
        this.enterName = 'Enter your name'
        this.email = 'Email address'
        this.enterEmail = 'Enter your email'
        this.validEmail = 'Please enter a valid email'
        this.message = 'Message'
        this.enterMessage = 'Enter your message here'
        this.send = 'Send'
        if (this.response === 'Please wait 10 minutes' || this.response === 'Wacht A.U.B. 10 minuten') {
          this.response = 'Please wait 10 minutes'
        }
        if (this.response === 'Mail has been sent :)' || this.response === 'Mail is verstuurd :)') {
          this.response = 'Mail has been sent :)'
        }
      } else {
        this.sendMe = 'Stuur me een berichtje!'
        this.name = 'Naam'
        this.enterName = 'Vul je naam in'
        this.email = 'Email adres'
        this.enterEmail = 'Vul je email in'
        this.validEmail = 'Voer A.U.B. een valide email in'
        this.message = 'Bericht'
        this.enterMessage = 'Vul hier je bericht in'
        this.send = 'Verstuur'
        if (this.response === 'Please wait 10 minutes' || this.response === 'Wacht A.U.B. 10 minuten') {
          this.response = 'Wacht A.U.B. 10 minuten'
        }
        if (this.response === 'Mail has been sent :)' || this.response === 'Mail is verstuurd :)') {
          this.response = 'Mail is verstuurd :)'
        }
      }
    }
  }
}
</script>
