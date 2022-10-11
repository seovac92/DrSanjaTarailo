<template>
  <div class="gallery">
    <main>  
    <div class="picture-wrapper">
        <img class="picture" :src="require(`../assets/gallery/${pictures[activePicture]}`)" alt="slika">
        <font-awesome-icon class="arrow-left" icon="fa-regular fa-circle-left" @click="previousPicture"/>
        <font-awesome-icon class="arrow-right" icon="fa-regular fa-circle-right" @click="nextPicture"/>
    </div>
    <div class="pictures-wrapper">
        <transition-group appear @before-enter="beforeEnter" @enter="enter">
        <div v-for="(picture,index) in pictures" :key="index" :data-index="index">
            <img :src="require(`../assets/gallery/${picture}`)" @click="changeActivePicture(index)" :class="{active:index===indexOfActivePicture?true:false}">
        </div>
        </transition-group>
    </div>
    </main>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data:function(){
        return{
            pictures:[
                "slika1.jpg",
                "slika2.jpg",
                "slika3.jpg",
                "slika4.jpg",
                "slika5.jpg",
                "slika6.jpg"
            ],
            activePicture:0,
            indexOfActivePicture:0
        }
    },
    methods:{
        changeActivePicture(index){
            this.activePicture=index
            this.indexOfActivePicture=index
        },
        goToTop(){
            window.scroll({
                top: 0
            })
        },
        checkCurrentPage(){
            this.$emit("currentPage",this.$route.meta.name)
        },
        previousPicture(){
            if(this.activePicture<=0){
                this.activePicture=this.pictures.length-1
                this.indexOfActivePicture=this.pictures.length-1
                return
            }
            this.activePicture--
            this.indexOfActivePicture=this.activePicture
        },
        nextPicture(){
            if(this.activePicture>=this.pictures.length-1){
                this.activePicture=0
                this.indexOfActivePicture=0
                return
            }
            this.activePicture++
            this.indexOfActivePicture=this.activePicture
        },
        onKeyDown(e){
            switch(e.key){
                case "ArrowRight":
                    this.nextPicture()
                    break;
                case "ArrowLeft":
                    this.previousPicture()
                    break;
            }
        },
        beforeEnter(el){
            el.style.opacity=0
            el.style.transform= "translateY(100px)"
        },
        enter(el,done){
            gsap.to(el,{
                opacity:1,
                y:0,
                duration:0.8,
                onComplete:done,
                delay:el.dataset.index * 0.2
            })
        }
    },
    mounted(){
        this.goToTop()
        this.checkCurrentPage()
        window.addEventListener("keydown",this.onKeyDown)
    }
}
</script>

<style>
.gallery{
    border-bottom: 2px solid #eee;
}
.picture-wrapper{
    width: 100%;
    margin-top: 90px;
    position: relative;
    background-color: #2c3e50;
}
.picture{
    display: block;
    margin: 0 auto;
    width: 300px;
    transition: 0.3s all ease;
}
.pictures-wrapper{
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    overflow-y: scroll;
}
.pictures-wrapper img{
    width: 150px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
}
.active{
    border: 4px solid #2c3e50;
}
.arrow-left,
.arrow-right{
    font-size: 3rem;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transition: 0.3s all ease;
    color: white;
    opacity: 0.4;
}
.arrow-left:hover,
.arrow-right:hover{
    transform: scale(1.3);
}
.arrow-left{
    left: 2%;
}
.arrow-right{
    right: 2%;
}
@media screen and (min-width: 768px){
    .arrow-left{
        left: 24%;
    }
    .arrow-right{
        right: 24%;
    }
}
@media screen and (min-width: 992px){
    .arrow-left{
        left: 30%;
    }
    .arrow-right{
        right: 30%;
    }
}
@media screen and (min-width: 1200px){
    .arrow-left{
        left: 33%;
    }
    .arrow-right{
        right: 30%;
    }
}
</style>