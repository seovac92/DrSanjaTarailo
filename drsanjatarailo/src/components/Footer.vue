<template>
  <div class="footer">
    <div class="footer-logo-wrapper">
        <img src="../assets/logo-negative.svg" alt="logo">
    </div>
    <div class="footer-contact-wrapper">
        <h2>Dr Sanja Tarailo</h2>
        <p><a class="phone" href="tel:+1239012930123">90812038901283</a></p>
    </div>
    <div class="footer-icons-wrapper">
        <a class="social-network-icon" href="https://www.facebook.com/profile.php?id=100007107225818" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-facebook" /></a>
        <a href="https://www.instagram.com/drsanjatarailo/" target="_blank" class="social-network-icon"> <font-awesome-icon class="icon" icon="fa-brands fa-instagram" /></a>
    </div>
    <div class="footer-copyright-wrapper">
        <p>Copyright &copy; Dr Sanja Tarailo | 2022</p>
    </div>
  </div>
</template>

<style>
.footer{
    padding: 20px 0;
}
.footer h2,
.footer p{
    margin: 10px 10px;
}
.footer-logo-wrapper img{
    width: 100px;
    height: 100px;
}
.footer-contact-wrapper{
    display: flex;
    flex-direction: column;
}
.phone{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
}
.phone:hover{
    text-decoration: underline;
}
.footer-icons-wrapper{
    display: flex;
    justify-content: space-evenly;
    width: 20%;
    margin: 0 auto;
    font-size: 1.8rem;
}
.footer-icons-wrapper .icon{
    cursor: pointer;
    transition: 0.3s all ease;
}
.footer-icons-wrapper .icon:hover{
    transform: scale(1.5)
}
.social-network-icon:link,
.social-network-icon:visited,
.social-network-icon:hover,
.social-network-icon:active{
    color: #2c3e50;
}
@media screen and (min-width: 768px) {
    .footer-contact-wrapper{
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
}
</style>