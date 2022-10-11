<template>
    <div class="contact">
        <main>
            <div class="form-wrapper">
                <h1>Posaljite poruku</h1>
                <form class="form" action="https://formspree.io/f/mdojzryp" method="POST">
                    <input v-model="name" class="form-input" type="text" name="name" placeholder="Vase ime" required>
                    <input v-model="email" class="form-input" type="email" name="email" placeholder="Vas email" required>
                    <textarea v-model="text" class="form-textarea" name="message" placeholder="Vasa poruka" cols="30" rows="10" required></textarea>
                    <button class="form-button" type="submit" @click="submit">Posalji</button>
                </form>
                <h2>ILI</h2>
                <h2>Pozovite na broj: </h2>
                <a class="phone" href="tel:+1231231241234123">Tel: 12390891273821</a>
            </div>
        </main>
    </div>
</template>
<script>
export default{
    data:function(){
        return{
            name:"",
            email:"",
            text:""
        }
    },
    methods:{
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
.contact{
    background-color: #2c3e50;
}
.form-wrapper{
    background-color: white;
    width: 80%;
    margin: 0 auto;
    padding: 80px 0;
    border-bottom: 2px solid #eee;
}
.form-wrapper h1,
.form-wrapper h2{
    font-size: 2rem;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-input,
.form-textarea{
    width: 70%;
    margin-bottom: 20px;
    font-size: 1.1rem;
    padding: 5px 0 5px 10px;
    border: transparent;
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
}
.form-input{
    height: 30px;
}
.form-textarea{
    resize: none;
}
.form-button{
    width: 90px;
    height: 50px;
    border: transparent;
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #2c3e50;
    color: white;
    cursor: pointer;
    transition: 0.3s all ease;
}
.form-button:hover{
    background-color: white;
    color: #2c3e50;
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
}
.contact .phone{
    display: inline-block;
    padding: 15px;
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.3rem;
    transition: 0.3s all ease;
}
.contact .phone:hover{
    background-color: #2c3e50;
    color: white;
    box-shadow: 0 4px 6px rgb(32 33 36 / 28%);
}
@media screen and (min-width: 768px){
    .form-wrapper{
        width: 60%;
    }
}
@media screen and (min-width: 1200px){
    .form-wrapper{
        width: 900px;
    }
}
</style>