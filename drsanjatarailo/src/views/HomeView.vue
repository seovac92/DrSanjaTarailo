<template>
  <div class="home">
    <main>
      <div class="hero">
        <div class="hover-hero"></div>
        <h2 class="title"><span :class="[smileNegative?'smile-negative':'','smile']" @mouseenter="addNegativeClassToSmile" @mouseleave="removeNegatiteClassFromSmile">Savrsen osmeh</span><br> <span :class="[lipsNegative?'lips-negative':'','lips']">Neodoljive usne</span></h2>
      </div>
      <article class="main-content-wrapper">
        <div class="main-content">
          <h2>Osmeh & usne</h2>
          <p><q>Neizostavni detalji za one koji drže do sebe, dovoljno govore o osobi i njenom psihofizičkom stanju bez i jedne izgovorene reči. Oni ne stare, lako se pamte i postaju nezaboravni. Neprolazne vrednosti po kojima se prepoznajemo.</q></p>
        </div>
      </article>
    </main>
    <aside class="aside-content-wrapper">
      <div class="bio-content-wrapper">
        <article class="bio-wrapper">
          <div class="profile-image"></div>
          <h2>Dr Sanja Tarailo</h2>
        </article>
        <article class="dentist-wrapper">
          <h2>Stomatolog</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab praesentium molestiae quo veniam cum nesciunt eligendi ut nulla ipsum consequatur est, ipsa minima repellat cupiditate amet dolorum tempore consectetur quos voluptates. Fugiat fugit, totam earum nulla quaerat incidunt ullam eveniet sed odio, magni tenetur quisquam, temporibus error. A quam, repellat vel ea, reiciendis harum expedita dolor suscipit corrupti accusantium ducimus unde ab sequi molestiae at possimus consectetur exercitationem repudiandae? Unde, cumque. Voluptas asperiores accusamus harum, ab aliquid quisquam libero nesciunt tenetur consequuntur necessitatibus expedita suscipit officia eos ullam quos ratione accusantium cum, id quas ad quaerat. Ut unde vel quo.</p>
        </article>
        <article class="estetic-wrapper">
          <h2>Estetika</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus eveniet minima consequuntur sit architecto qui aliquam dolor dolores, tenetur illo odit tempora officia commodi mollitia. Beatae soluta eos, modi, nam iusto architecto veritatis quaerat expedita ipsum placeat officiis culpa reprehenderit quisquam quia! Neque optio atque sint nulla eaque architecto eligendi porro modi enim totam officia eos exercitationem unde quod suscipit laborum ut sunt, qui sequi quam debitis? Rerum labore esse doloribus nesciunt itaque quod neque odio non voluptates porro. Eius quasi ab earum, voluptatibus esse corporis cupiditate animi eligendi quidem, magni sequi qui saepe modi tempora, quia hic dolores!</p>
        </article>
      </div>  
    </aside>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data:function(){
    return{
      smileNegative:false,
      lipsNegative:true
    }
  },
  methods:{
    addNegativeClassToSmile(){
      this.smileNegative=true
      this.lipsNegative=false
    },
    removeNegatiteClassFromSmile(){
      this.smileNegative=false
      this.lipsNegative=true
    },
    checkCurrentPage(){
      this.$emit("currentPage",this.$route.meta.name)
    },
    goToTop(){
      window.scroll({
        top: 0
      })
    }
  },
  mounted(){
    this.goToTop()
    this.checkCurrentPage()
  }
}
</script>
<style>
.home .hero{
  background-image: url("../assets/hero-homeview-croped.jpg");
}
.hero{
  position: relative;
  height: 500px;
  background-position: center center;
  background-size: cover;
}
.hover-hero{
  height: 500px;
  background-color: #eee;
  opacity: 0.2;
}
.hero .title{
  position: absolute;
  bottom: 0;
  left: 15%;
  font-size: 1.8rem;
}
.smile,
.lips{
  display: inline-block;
  width: 265px;
  padding: 10px;
}
.smile,
.lips{
  background-color: white;
  color: #2c3e50;
  transition: 0.4s all ease;
}
.smile-negative,
.lips-negative{
  background-color: #2c3e50;
  color: white;
}
.main-content-wrapper{
  background-color: #eee;
}
.main-content{
  width: 70%;
  margin: 0 auto;
  text-align: left;
  padding: 15px;
  background-color: white;
}
.aside-content-wrapper{
  background-color: #2c3e50;
  color: white;
}
.bio-content-wrapper{
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
.bio-wrapper,
.dentist-wrapper,
.estetic-wrapper{
  width: 70%;
  margin: 0 auto;
  text-align: left;
  padding: 15px;
}
.home .dentist-wrapper{
  background-color: white;
  color: black;
}
.bio-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-image{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #eee;
  background-image: url("../assets/gallery/slika8.jpg");
  background-position: center center;
  background-size: cover;
}
@media screen and (min-width: 992px) {
  .main-content{
    width: 60%;
  }
  .bio-content-wrapper{
    flex-direction: row;
    justify-content: space-between;
  }
  .bio-wrapper,
  .dentist-wrapper,
  .estetic-wrapper{
    flex-basis: 25%;
  }
}
</style>
