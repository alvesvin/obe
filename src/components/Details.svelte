<script>
let title = "Mouse over bottles to see details";
let description = "";

function gingerHover() {
	title = "Ôbe Saveur Citron Vert Gingembre";
	description = "Quisque enim lectus, auctor vel aliquam auctor, dignissim ut enim. Cras ut metus risus. Morbi faucibus sapien a quam pulvinar tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer pellentesque metus at efficitur vestibulum. Morbi quis posuere libero.";
}

function agrumesHover() {
	title = "Ôbe Saveur Agrumes";
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tortor interdum, interdum ex vel, vestibulum velit. In in urna neque. Praesent bibendum lorem libero, euismod condimentum nunc auctor ac.";
}

function redHover() {
	title = "Ôbe Saveur Fruits Rouges";
	description = "Quisque convallis a arcu sed vulputate. Suspendisse a enim quis mauris consectetur feugiat in sit amet sapien. Suspendisse egestas at nibh eget pulvinar.";
}

function standard() {
	title = "Mouse over bottles to see details";
	description = "";
}

</script>

<main id="details">
    <!-- svelte-ignore a11y-distracting-elements -->
    <marquee class="d-flex align-items-center" behavior="scroll" direction="left" scrollamount="23">
        Boire Ôbe c’est donner à la nouvelle génération la possibilité de choisir pour elle même.
    </marquee>
    <div class="content" style="">
        <p class="text-center">Ôbe est une boisson craft faite en France avec des ingrédients français, 
        sans sucres résiduels ni ajoutés, faible en calories, sans gluten et sans 
        produits controversés. Ôbe rend compte des besoins de la nouvelle génération.
        </p>
        <div class="imagens">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img class="ginger" on:mouseover={gingerHover} on:mouseout={standard} src="./assets/illustrations/ginger/bottlestyled.png" alt="">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img class="agrumes" on:mouseover={agrumesHover} on:mouseout={standard} src="./assets/illustrations/agrumes/bottlestyled.png" alt="">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img class="red" on:mouseover={redHover} on:mouseout={standard} src="./assets/illustrations/red/bottlestyled.png" alt="">
        </div>
        <div class="text-center">
            <h2 class="title">{title}</h2>
            <p class="description">{description}</p>
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
    font-size: 1.4vw;
    margin: 50px 20vw 20px 20vw;
    font-weight: 600;
    transition: 0.3s ease;
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
    transition: 0.34s cubic-bezier(0.175, 0.885, 0.32, 2.475);
}
.imagens img:hover{
    cursor: pointer;
    max-width: 30vw;
    transition: 0.34s cubic-bezier(0.175, 0.885, 0.32, 1.975);
    filter: contrast(105%) brightness(103%)
}
@media screen and (min-width: 1440px) {
    .imagens img{
        max-width: 400px;
    }
    .imagens img:hover{
        max-width: 423px;
    }
    .text-center{
        font-size: 20px;
    }
}
</style>