<main id="details">
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee class="d-flex align-items-center" behavior="scroll" direction="left" scrollamount="22">
        Boire Ôbe c’est donner à la nouvelle génération la possibilité de choisir pour elle même.
    </marquee>
    <div class="content" style="">
        <p class="text-center">Ôbe est une boisson craft faite en France avec des ingrédients français, 
        sans sucres résiduels ni ajoutés, faible en calories, sans gluten et sans 
        produits controversés. Ôbe rend compte des besoins de la nouvelle génération.
        </p>
        <div class="imagens">
            <img class="ginger" src="./assets/illustrations/ginger/bottlestyled.png" alt="">
            <img class="agrumes" src="./assets/illustrations/agrumes/bottlestyled.png" alt="">
            <img class="red" src="./assets/illustrations/red/bottlestyled.png" alt="">
        </div>
    </div>
</main>

<style scoped>
main{
    background-color:#fff8e4;
    height: 2000px;
}
marquee{
    height: 90px;
    background-color: rgb(19, 19, 19);
    color: #dfe6e9;
    font-size: 45px;
    font-weight: 600;
}
marquee::selection{ 
    color:#ff7675;
}
.text-center{
    font-size: 1.6vw;
    margin: 40px 20vw 60px 20vw;
    font-weight: 500;
}
.imagens{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    margin-right: 4vw;
    margin-left: 4vw;
}
.imagens img{
    max-width: 28vw;
    transition: 0.34s cubic-bezier(0.175, 0.885, 0.32, 2.275);
    filter: contrast(95%);
}
.imagens img:hover{
    filter: contrast(105%);
    max-width: 30vw;
    transition: 0.34s cubic-bezier(0.175, 0.885, 0.32, 1.975);
}
@media screen and (min-width: 1440px) {
    .imagens img{
        max-width: 420px;
    }
    .imagens img:hover{
        max-width: 440px;
    }
    .text-center{
        font-size: 22px;
    }
}
</style>