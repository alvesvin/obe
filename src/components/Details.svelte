<script>
let title;
let src;
if (navigator.userAgent.match(/Mobile/)) {
	title = "Touch the bottles to see the details";
	src = "./assets/illustrations/touch-icon.png";
} else {
	src = "./assets/illustrations/mouseover-icon.png";
	title = "Hover the bottles to see the details";
}

let description = "";
let hoverIcon;

function gingerHover() {
	hoverIcon.style.display = "none";
	title = "Ôbe Saveur Citron Vert Gingembre";
	description = "Quisque enim lectus, auctor vel aliquam auctor, dignissim ut enim. Cras ut metus risus. Morbi faucibus sapien a quam pulvinar tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer pellentesque metus at efficitur vestibulum. Morbi quis posuere libero.";
}

function agrumesHover() {
	hoverIcon.style.display = "none";
	title = "Ôbe Saveur Agrumes";
	description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia tortor interdum, interdum ex vel, vestibulum velit. In in urna neque. Praesent bibendum lorem libero, euismod condimentum nunc auctor ac.";
}

function redHover() {
	hoverIcon.style.display = "none";
	title = "Ôbe Saveur Fruits Rouges";
	description = "Quisque convallis a arcu sed vulputate. Suspendisse a enim quis mauris consectetur feugiat in sit amet sapien. Suspendisse egestas at nibh eget pulvinar.";
}

function standard() {
	hoverIcon.style.display = "initial";
	title = "Hover the bottles to see the details";
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
            <img class="mt-3 hover-icon" bind:this={hoverIcon} src={src} alt="" draggable="false">
            <p class="description">{description}</p>
        </div>
    </div>
</main>

<style scoped>
main{
    background-color:#fff8e4;
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
}
.text-center::selection{
    background-color:rgba(255, 117, 117, 0.644);
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
.hover-icon{
    filter: grayscale(100%);
    width: 5vw;
    animation: animation1 2s;
    animation-iteration-count: infinite;
}
.title{
    font-size: 2.7vw;
}
@keyframes animation1 {
    from {
        transform: translateX(30px);
    }
    50% {
        transform: translateX(-30px);
    }
    to {
        transform: translateX(30px);
    }
}
@media screen and (min-width: 1440px) {
    .title{
        font-size: 32px;
    }
    .imagens img{
        max-width: 400px;
    }
    .imagens img:hover{
        max-width: 423px;
    }
    .text-center{
        font-size: 20px;
    }
    .hover-icon{
        width: 60px;
    }
}
@media screen and (max-width: 800px) {
    marquee{
        height: 10vw;
        font-size: 5vw;
    }
    .text-center{
        font-size: 2vw;
    }
}
</style>