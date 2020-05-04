<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-container>
        <n-link
          to="/"
          class="navbar-brand"
        >
          &lt;Damien Hensen /&gt;
        </n-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <n-link
              to="/"
              class="nav-link"
            >
            {{ aboutMe }}
            </n-link>
            <n-link
              to="/projects"
              class="nav-link"
            >
            {{ work }}
            </n-link>
            <n-link
              to="/contact"
              class="nav-link"
            >
            Contact
            </n-link>
          </b-navbar-nav>
          <b-navbar-nav
            class="ml-auto"
          >
            <a class="nav-link lan">
              <span
                v-bind:class="{ 'active': isNL }"
                @click="changeToNL"
              >
                Nederlands
              </span>
              /
              <span
                v-bind:class="{ 'active': !isNL }"
                @click="changeToEN"
              >
              English
              </span>
            </a>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lang: 'nl',
      isNL: true,
      aboutMe: 'Over mij',
      work: 'Werk'
    }
  },
  mounted () {
    if (localStorage.lang) {
      this.lang = localStorage.lang
    }
    if (localStorage.isNL) {
      console.log(localStorage.isNL)
      this.isNL = JSON.parse(localStorage.isNL.toLowerCase())
    }
    if (this.lang === 'en') {
      this.aboutMe = 'About me'
      this.work = 'Work'
    } else {
      this.aboutMe = 'Over mij'
      this.work = 'Werk'
    }
    this.$emit('lang', this.lang)
  },
  methods: {
    changeToNL () {
      this.lang = 'nl'
      this.isNL = true
      localStorage.lang = this.lang
      localStorage.isNL = this.isNL
      this.aboutMe = 'Over mij'
      this.work = 'Werk'
      this.$emit('lang', this.lang)
    },
    changeToEN () {
      this.lang = 'en'
      this.isNL = false
      localStorage.lang = this.lang
      localStorage.isNL = this.isNL
      this.aboutMe = 'About me'
      this.work = 'Work'
      this.$emit('lang', this.lang)
    }
  }
}
</script>

<style scoped>
.navbar {
    background-color: #ff3410;
}

.nav-link:hover {
    color: #FFFFFF !important;
    transition: .3s;
}

.nav-link.lan .active {
    color: #FFFFFF !important;
}

.nav-link.lan {
    color: #FFFFFF;
    cursor: default;
}

.nav-link.lan span:not(.active):hover {
    color: rgba(255,255,255,.7) !important;
}

.nav-link.lan span {
    color: #FFFFFFa2;
    cursor: pointer;
}
</style>
