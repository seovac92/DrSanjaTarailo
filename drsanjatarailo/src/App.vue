<template>
  <div class="app-wrapper">
    <MobileNav></MobileNav>
    <router-view class="page"/>
    <Footer></Footer>
  </div>  
</template>

<script>
import MobileNav from './components/MobileNav.vue'
import Footer from './components/Footer.vue'

export default {
  components:{
    MobileNav,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
.page{
  margin-top: 88px;
}
</style>
