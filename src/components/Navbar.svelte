<main>
    <nav class="navbar mt-2">
        <a href="/" class="navbar-brand">
            <img src="./assets/brand.png" draggable="false" alt="" width="70px">
        </a>
        <div class="nav-items">
            <a href="#home" class="item text-decoration-none mx-4">Home</a>
            <a href="#details" class="item text-decoration-none mx-4">Détails</a>
            <a href="#histoire" class="item text-decoration-none mx-4">Histoire</a>
            <a href="#merch" class="item text-decoration-none mx-4">Merch</a>
            <a href="#sommes-nous" class="item text-decoration-none mx-4">Où Sommes-Nous</a>
        </div>
    </nav>
    <hr class="mt-2">
</main>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

main{
    margin: 0px 80px 0px 80px;
}

a{
    position: relative;
    color: #2d3436!important;
    font-weight: 600;
    font-size: 19px;
    display: inline-block;
    transition: 0.2s ease-in;
}

a:hover{
    -webkit-transform: scale(1.1);
    color: rgb(0, 0, 0) !important;
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.2s ease-out;
}

.item::after{
    content: "";
    width: 100%;
    height: 0.175rem;
    position: absolute;
    background-color: #ff7675;
    left: 0;
    bottom: -10px;
    transform: scale(0, 1);
    transition: 0.3s ease-in;
    
}
.item:hover::after{
    transform: scale(1, 1);
    transition: 0.3s ease-out;
}

@media screen and (max-width: 1000px) {
    .navbar-brand{
        display: none;
    }
    .nav-items{
        height: 80px;
    }
    .navbar{
        align-items: center;
        justify-content: center;
    }
    a{
        margin-top: 30px;
        font-size: 18px
    }
}

@media screen and (max-width: 850px) {
    a{
        font-size: 17px;
        margin-left: 7px !important;
        margin-right: 7px !important;
    }
    
}

@media screen and (max-width: 660px) {
    .navbar-brand{
        display:block;
    }
    .navbar{
        align-items: center;
        justify-content: center;
    }
    .nav-items{
        display: none;
    }
}
</style>