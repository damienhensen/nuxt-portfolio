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
          About me
          </n-link>
          <n-link
            to="/projects"
            class="nav-link"
          >
          Work
          </n-link>
          <n-link
            to="/contact"
            class="nav-link"
          >
          Contact
          </n-link>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</div>

</template>

<style scoped>
.navbar {
    background-color: #ff3410;
}

.nav-link:hover {
    color: #FFFFFF !important;
    transition: .3s;
}
</style>
