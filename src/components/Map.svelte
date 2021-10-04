<script>
let title = "Hover the cities to see the details";
let hoverIcon;
let shops = [];
let auxText = "";
let src;

if (navigator.userAgent.match(/Mobile/)) {
	src = "./assets/illustrations/touch-icon.png";
} else {
	src = "./assets/illustrations/mouseover-icon.png";
}

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
	shops = ["Lorem ipsum", "Dolor sit ipsum", "Amet sit Lorem"];
}

</script>
<main id="sommes-nous">
    <h2 class="text-center title">Où Sommes-Nous</h2>
    <div class="content d-flex">
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
            <img class="mt-3 hover-icon" bind:this={hoverIcon} src="{src}" alt="" draggable="false">
            <h4 class="mb-4">{auxText}</h4>
            <ul  class="p-0">
                {#each shops as shop}
                    <li>{shop}</li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="text-center contact">
        <span class="text-center mb-0">anything else?</span><br>
        <a href="mailto: crsthian.04@gmail.com" class="contact-text h1 mt-0">Nous contacter</a>
    </div>
</main>
<style scoped>
main{
    background-color:rgb(255, 245, 223);
    padding-top: 6vh;
    min-height: 100vh;
}
.contact{
    margin-top: 16vh;
    height: 30vh;
}
.contact-text{
    margin-top: 16vh;
    color: #333333 !important;
    font-weight: 600;
}
.title{
    margin-bottom: 5vw;
}
.content{
    justify-content: space-between;
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
    width: 4vw;
    animation: animation1 2s;
    animation-iteration-count: infinite;
}
h3{
    font-size: 2vw;
}
h4{
    font-size: 1.85vw;
}
li{
    font-size: 1.2vw;
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
@media screen and (max-width: 900px) {
    main{
        min-height: fit-content;
    }
    .content{
        transform: translateX(-3vw);
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .infos{
        width: fit-content;
    }
    .map{
        margin-bottom: 20vw;
        width: 80vw;
        height: 80vw;
    }
    p{
        font-size: 3.4vw;
    }
    .title{
        margin-bottom: 20vw;
    }
    .contact{
        margin-top: 16vw;
        height: 30vw;
    }
    h3{
        margin-bottom: 2vw !important;
        font-size: 4vw;
    }
    h4{
        margin-bottom: 2vw !important;
        font-size: 3.6vw;
    }
    li{
        margin-bottom: 0 !important;
        font-size: 2.6vw;
    }
    .hover-icon{
        width: 8vw;
    }
}
</style>
