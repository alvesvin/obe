<script>
let title = "Hover the cities to see the details";
let hoverIcon;
let shops = [];
let auxText = "";
function standart() {
	hoverIcon.style.display = "initial";
	title = "Hover the cities to see the details";
	auxText = "";
	shops = [];
}

function parisHover() {
	hoverIcon.style.display = "none";
	title = "Paris";
	auxText = "in Paris we are in these establishments:";
	shops = ["Lorem ipsum", "Dolor sit", "Amet"];
}

</script>
<main id="sommes-nous">
    <h2 class="text-center title">Où Sommes-Nous</h2>
    <div class="content d-flex justify-content-between">
        <div class="map">
            <div class="cities">
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
                <p id="paris" on:mouseover={parisHover} on:mouseout={standart}>PARIS</p>
                <p id="lyon">LYON</p>
                <p id="marselha">MARSEILLE</p>
                <p id="toulouse">TOULOUSE</p>
            </div>
        </div>
        <div class="infos text-center">
            <h3 class="mb-3">{title}</h3>
            <img class="mt-3 hover-icon" bind:this={hoverIcon} src="./assets/illustrations/mouseover-icon.png" alt="" draggable="false">
            <h4 class="mb-4">{auxText}</h4>
            <ul>
                {#each shops as shop}
                    <li>{shop}</li>
                {/each}
            </ul>
        </div>
        
    </div>
</main>
<style>
main{
    background-color:rgb(255, 245, 223);
    padding-top: 6vh;
}
.title{
    margin-bottom: 5vw;
}
.content{
    margin: 0 10vw 0 10vw;
}
.map{
    background-image: url("../assets/illustrations/france-map.png");
    background-size: 100% 100%;
    width: 40vw;
    height: 40vw;
}
.infos{
    width: 30vw;
}
.hover-icon{
    filter: grayscale(100%);
    width: 4.3vw;
    animation: animation1 2s;
    animation-iteration-count: infinite;
}
ul{
    list-style: none;
}
p{
    position: relative;
    font-size: 1.7vw;
    font-weight: 600;
    transition: 0.3s ease;
    width: fit-content;
}
p:hover{
    cursor: pointer;
    color: #000;
    transform: scale(1.09);
    transition: 0.3s ease;
}
#paris{
    margin-left: 48%;
    margin-top: 30%;
}
#lyon{
    margin-left: 63%;
    margin-top: 20%;
}
#marselha{
    margin-left: 64%;
    margin-top: 15%;
}
#toulouse{
    margin-left: 28%;
    margin-top: -12%;
}
@keyframes animation1 {
    from {
        transform: translateX(50px);
    }
    50% {
        transform: translateX(-10px);
    }
    to {
        transform: translateX(50px);
    }
}
@media screen and (min-width: 1280px) {
    .map{
        width: 480px;
        height: 480px;
    }
    p{
        font-size: 21.8px;
    }
}

</style>
