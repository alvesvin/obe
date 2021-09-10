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
        <div class="imagens d-flex justify-content-center">
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
    font-size: 23px;
    margin: 60px 20vw 60px 20vw ;
    font-weight: 500;
}

.ginger{
    margin-top: 5vh;
    width: 420px;
    height: 644px;
}
.agrumes{
    width: 480px;
    height: 650px;
}
.red{
    margin-top: 5vh;
    width: 400px;
    height: 634px;
}
</style>