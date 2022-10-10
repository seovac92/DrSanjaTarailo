<template>
  <div class="app-wrapper">
    <MobileNav :currentPage="currentPage"></MobileNav>
    <router-view class="page" @currentPage="handleCurrentPage"/>
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
  },
  data:function(){
    return{
      currentPage:null
    }
  },
  methods:{
    handleCurrentPage(page){
      this.currentPage=page
    }
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
::-webkit-scrollbar-track{
	background-color: #F5F5F5;
}

::-webkit-scrollbar{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb{
	background-color: #2c3e50;	
	background-image: -webkit-linear-gradient(45deg,
	                                          rgba(255, 255, 255, .2) 25%,
											  transparent 25%,
											  transparent 50%,
											  rgba(255, 255, 255, .2) 50%,
											  rgba(255, 255, 255, .2) 75%,
											  transparent 75%,
											  transparent)
}
</style>