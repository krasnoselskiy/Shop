<template>
  <nav id="sidebar" class="sidebar-wrapper" :class="isOpenMenu ? 'toggled' : 'closed'" @button-clicked="showMenu">
    <div class="sidebar-content">
      <!-- sidebar-brand  -->
      <div class="sidebar-item sidebar-brand">
          <router-link class="sidebar_logo" to="/">Vue Shop</router-link>
          <div id="close-sidebar" @click="closeMenu">
            <i class="fas fa-times"></i>
          </div>
      </div>
      <!-- sidebar-header  -->
      <div class="sidebar-item sidebar-header">
          <div class="user-pic">
              <img class="img-responsive img-rounded" src="../../assets/imgs/user.png" alt="User picture">
          </div>
          <div class="user-info">
              <span class="user-name">
                Boris.K
              </span>
              <span class="user-role"> {{ email }} </span>
              <span class="user-status">
                  <i class="fa fa-circle"></i>
                  <span>Online</span>
              </span>
          </div>
      </div>
      <!-- sidebar-search  -->
      <div class="sidebar-item sidebar-search">
          <div>
              <div class="input-group">
                  <input type="text" class="form-control search-menu" placeholder="Search...">
                  <div class="input-group-append">
                      <span class="input-group-text">
                          <i class="fa fa-search" aria-hidden="true"></i>
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <!-- sidebar-menu  -->
      <div class=" sidebar-item sidebar-menu" >
          <ul @click="closeMenu">
              <li class="header-menu">
                  <span>Menu</span>
              </li>

              <li>
                  <router-link to="/admin/overview" >
                      <i class="fa fa-chart-line"></i>
                      <span>Overview</span>
                  </router-link>
              </li>
              <li>
                  <router-link to="/admin/products" >
                      <i class="fab fa-amazon"></i>
                      <span>Products</span>
                  </router-link>
              </li>
              <li>
                  <router-link to="/admin/orders" >
                      <i class="fa fa-shopping-cart"></i>
                      <span>Orders</span>
                  </router-link>
              </li>

              <li>
                  <router-link to="/admin/profile" >
                      <i class="fa fa-user"></i>
                      <span>Profile</span>
                  </router-link>
              </li>
              <li>
                  <a href="#" @click="logout()">
                      <i class="fa fa-power-off"></i>
                      <span>Logout</span>
                  </a>
              </li>
          </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
  </nav>
  <!-- sidebar-content  -->
</template>

<script>
  export default {
    name: 'admin_sidebar',
    components: {

    },
    data: () => ({
      email: "user@gmail.com",
      isOpenMenu: false,
    }),
    computed: {

    },
    mounted() {
      this.$root.$on('show', () => {
        this.isOpenMenu = true;
      });

      // EventBus.$on('ROUTER_CHANGED', () => {
      //   console.log(`Oh, that's nice. It's gotten clicks! :)`)
      // });
    },
    methods: {
      showMenu() {
        this.$root.$on('show', () => {
          this.isOpenMenu = true;
        })
      },
      closeMenu() {
        this.isOpenMenu = false;
      },
      onConfirm () {
        this.value = 'Agreed'
      },
      onCancel () {
        this.value = 'Disagreed'
      }
    }
  }
</script>

<style>
  .sidebar-wrapper.toggled {
    left: 0;
  }
  #close-sidebar i {
    color: #ccc;
  }
  .sidebar_logo {
    margin-right: 20px;
  }
</style>