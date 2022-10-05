<template>
  <div class="mobile-nav-wrapper">
    <header class="header">
        <div class="mobile-logo-wrapper">
            <img src="../assets/logo-negative.svg" alt="logo">
            <div class="slogan-wrapper">
                <h2 class="title-h2">Dr Sanja Tarailo</h2>
            </div>
        </div>
        <div class="mobile-icon-wrapper" @click="toggleMobileNavList">
            <font-awesome-icon icon="fa-regular fa-chart-bar"/>
        </div>
    </header>
    <transition name="navigation">
        <nav class="mobile-nav-list" v-show="mobileNavStatus">
            <div class="link-wrapper"><router-link class="link" to="/" @click="closeMobileNavList">Pocetna</router-link></div>
            <div class="link-wrapper"><router-link class="link" to="/about" @click="closeMobileNavList">Usluge</router-link></div>
            <div class="link-wrapper"><router-link class="link" to="/about" @click="closeMobileNavList">Galerija</router-link></div>
            <div class="link-wrapper"><router-link class="link" to="/about" @click="closeMobileNavList">Kontakt</router-link></div>
        </nav>
    </transition>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            mobileNavStatus:false
        }
    },
    methods:{
        toggleMobileNavList(){
            this.mobileNavStatus=!this.mobileNavStatus
        },
        closeMobileNavList(){
            this.mobileNavStatus=false
        }
    }
}
</script>

<style>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eee;
    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 1;
    top: 0;
}
.mobile-logo-wrapper{
    position: relative;
    padding: 21px;
    background-color: #2c3e50;
    cursor: pointer;
}
.mobile-logo-wrapper img{
    width: 40px;
    height: 2.5rem;
}
.slogan-wrapper{
    width: 205px;
    position: absolute;
    bottom: 0;
    left: 30px;
    opacity: 0;
    padding: 5px;
    transition: 0.3s all ease;
}
.mobile-logo-wrapper:hover .slogan-wrapper{
    opacity: 1;
    bottom: 0;
    left: 80px;
    background-color: #2c3e50;
    color: white;
}
.slogan-wrapper .title-h2{
    margin: 0;
}
.mobile-brand-icons-wrapper{
    flex-basis: 15%;
    display: flex;
    justify-content: space-around;
    font-size: 2rem;
}
.mobile-icon-wrapper{
    text-align: right;
    font-size: 2.5rem;
    padding: 20px;
    background-color: #2c3e50;
    color: white;
    cursor: pointer;
}
.mobile-nav-list{
    width: 60vw;
    margin-left: auto;
    background-color: #2c3e50;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
    position: fixed;
    z-index: 1;
}
.arrow-icon{
    vertical-align: bottom;
}
.mobile-nav-list .link-wrapper{
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
}
.mobile-nav-list .link-wrapper:hover{
    background-color: white;
}
.mobile-nav-list .link-wrapper:hover .link{
    color: black;
}
.mobile-nav-list .link-wrapper .link{
    display: block;
    text-decoration: none;
    color: white;
    padding: 15px;
}
.navigation-enter-from{
  transform: translateX(-70vw);
}
.navigation-enter-to{
  transform: translateX(0);
}
.navigation-enter-active{
  transition: all 0.3s ease;
}
.navigation-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.navigation-leave-to{
  transform: translateX(-70vw);
}
.navigation-leave-active{
  transition: all 0.3s ease;
}
@media screen and (min-width: 768px){
    .mobile-nav-list{
        width: 400px;
    }
}
</style>