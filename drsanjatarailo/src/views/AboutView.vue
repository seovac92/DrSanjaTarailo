<template>
  <div class="about">
    <main>
      <div class="hero">
        <div class="hover-hero"></div>
      </div>
      <article class="main-content-wrapper">
        <div class="main-content">
          <h2>Usne & zubi</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ipsam veniam facere eveniet enim, sunt, natus, vitae voluptatum fugit quod fugiat? Id, atque? Consequatur provident officiis asperiores, ipsam aliquid expedita tempore corrupti perspiciatis libero rerum eligendi officia sunt facilis corporis deleniti temporibus voluptates praesentium nulla a. Officia hic fuga error! Qui similique laudantium ipsum vero odit quisquam minus dolore maxime? Iusto quas iste consequatur cum recusandae sint quidem quam similique doloremque soluta reiciendis omnis</p>
        </div>
      </article>
    </main>
    <aside class="aside-content-wrapper">
      <div class="bio-content-wrapper">
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
  methods:{
    goToTop(){
      window.scroll({
        top: 0
      })
    },
    checkCurrentPage(){
      this.$emit("currentPage",this.$route.meta.name)
    }
  },
  mounted(){
    this.goToTop()
    this.checkCurrentPage()
  }
}
</script>
<style>
.about .hero{
  background-image: url("../assets/hero-aboutview-croped.jpg");
}
.about .estetic-wrapper{
  background-color: white;
  color: black;
}
</style>
