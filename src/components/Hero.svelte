<script>
let rellax;
const initializeRellax = () => {
	// eslint-disable-next-line no-undef
	rellax = new Rellax(".rellax");
};
</script>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"on:load={initializeRellax}></script>
</svelte:head>

<main>
    <div class="group ginger">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/ginger/ginger-1.png" alt="">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/ginger/ginger-2.png" alt="">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/ginger/ginger-3.png" alt="">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/ginger/ginger-4.png" alt="">
        <img class="rellax" data-rellax-speed="6"src="./assets/illustrations/ginger/fruit-1.png" alt="">
        <img class="rellax" data-rellax-speed="8"src="./assets/illustrations/ginger/fruit-2.png" alt="">
        <img class="rellax" data-rellax-speed="7"src="./assets/illustrations/ginger/fruit-3.png" alt="">
        <img class="rellax" data-rellax-speed="10"src="./assets/illustrations/ginger/fruit-4.png" alt="">
        <img class="main-bottle ginger-bottle" src="./assets/illustrations/ginger/bottle.png" alt="" >
    </div>
    <div class="group argums">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/agrumes/sheet-1.png" alt="">
        <img class="rellax" data-rellax-speed="5"src="./assets/illustrations/agrumes/sheet-2.png" alt="">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/agrumes/sheet-3.png" alt="">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/agrumes/sheet-4.png" alt="">
        <img class="rellax" data-rellax-speed="7"src="./assets/illustrations/agrumes/fruit-1.png" alt="">
        <img class="rellax" data-rellax-speed="6"src="./assets/illustrations/agrumes/fruit-2.png" alt="">
        <img class="rellax" data-rellax-speed="5"src="./assets/illustrations/agrumes/fruit-3.png" alt="">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/agrumes/fruit-4.png" alt="">
        <img class="rellax" data-rellax-speed="9"src="./assets/illustrations/agrumes/fruit-5.png" alt="" >
        <img class="main-bottle agrumes-bottle" src="./assets/illustrations/agrumes/bottle.png" alt="" >
    </div>
    <div class="group red">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/red/fruit-1.png" alt="">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/red/fruit-2.png" alt="">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/red/fruit-3.png" alt="">
        <img class="rellax" data-rellax-speed="1"src="./assets/illustrations/red/fruit-4.png" alt="">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/red/fruit-5.png" alt="" >
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/red/fruit-6.png" alt="">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/red/fruit-7.png" alt="">
        <img class="rellax" data-rellax-speed="5"src="./assets/illustrations/red/fruit-8.png" alt="">
        <img class="rellax" data-rellax-speed="6"src="./assets/illustrations/red/fruit-9.png" alt="">
        <img class="main-bottle red-bottle" src="./assets/illustrations/red/bottle.png" alt="" >
    </div>
</main>

<style scoped>
main{
    display: flex;
    justify-content:center;
    min-height: 103vh;
    overflow: hidden !important;
}
.group{
    position: relative;
    display: flex;
    justify-content: center;
    width: 33vw;
}
.group img{
    position: absolute;
    width: 30vw;
}
.rellax{
    margin-top: 16vh;
}
.main-bottle{
    width: 37vw !important;
    transition: 0.2s ease;
}
.main-bottle:hover{
    width: 38.3vw !important;
    transition: 0.2s ease;
}
.ginger{
    margin-top:7vh;
}
.red{
    margin-top:7vh;
}
.ginger-bottle{
    animation: animation1 4s;
    animation-iteration-count: infinite;
}
.agrumes-bottle{
    animation: animation1 2.5s;
    animation-iteration-count: infinite;
}
.red-bottle{
    animation: animation1 3.5s;
    animation-iteration-count: infinite;
}
@keyframes animation1 {
    from {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-8px);
    }
    to {
        transform: translateY(0px);
    }
}

@media screen and (max-width: 1050px) {
    .rellax{
        margin-top: 10vh;
    }
}
@media screen and (max-width: 910px) {
    .rellax{
        margin-top: 10vh;
    }
    .ginger{
        margin-top:3vh;
    }
    .red{
        margin-top:3vh;
    }
    .group{
        margin-top: 10%;
    }
}
@media screen and (max-width: 590px) {
    main{
        height:fit-content;
        justify-content:center;
        flex-direction: column;
    }
    .rellax{
        margin-top: 7vh;
    }
    .group{
        margin: 0;
        height: 90vh;
        width: 100vw;
    }
    .group img{
        width: 85vw;
    }
    .main-bottle{
        width: 90vw !important;
        transition: 0.2s ease;
    }
    .main-bottle:hover{
        width: 92vw !important;
        transition: 0.2s ease;
    }
}
</style>
