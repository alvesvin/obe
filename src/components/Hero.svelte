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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
    overflow-x: hidden !important;
}
.group{
    position: relative;
}
.group img{
    position: absolute;
    width: 400px;
}
.rellax{
    margin-top: 16vh;
    margin-left: 3vw;
}
.main-bottle{
    width: 480px !important;
    transition: 0.2s ease;
}
.main-bottle:hover{
    width: 500px !important;
    transition: 0.2s ease;
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
.ginger{
    margin-top: 6vh !important;
}
.red{
    margin-top: 6vh !important;
}
@keyframes animation1 {
    from {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    to {
        transform: translateY(0px);
    }
}

@media screen and (max-width: 1100px) {
    .group img{
        width: 350px;
    }
    .ginger{
        transform: translateX(-7vw);
    }
    .main-bottle{
        width: 440px !important;
    }
}
@media screen and (max-width: 960px) {
    
    main{
        margin-top: 6vh !important;
    }
    .group img{
        width: 280px;
    }

    .main-bottle{
        width: 360px !important;
    }
    .main-bottle:hover{
        width: 400px !important;
    }
}
@media screen and (max-width: 830px) {
    
    .group img{
        width: 200px;
    }
    .ginger{
        transform: translateX(0vw);
    }

    .main-bottle{
        width: 280px !important;
    }
    .main-bottle:hover{
        width: 300px !important;
    }
}
@media screen and (max-width: 600px) {
    
    .group img{
        width: 180px;
    }
    .ginger{
        transform: translateX(-9vw);
    }

    .main-bottle{
        width: 250px !important;
    }
    .rellax{
        margin-top: 12vh;
        margin-left: 5vw;
    }
    .main-bottle:hover{
        width: 260px !important;
    }
}
@media screen and (max-width: 530px) {
    .group img{
        width: 180px;
    }
    .ginger{
        transform: translateX(-10vw) !important;
    }
    .argums{
        transform: translateX(-20%);
    }
    .red{
        transform: translateX(-10%);
    }

    .main-bottle{
        width: 230px !important;
    }
    .rellax{
        margin-top: 12vh;
        margin-left: 5vw;
    }
}
@media screen and (max-width: 430px) {

    .group img{
        width: 150px;
    }
    .main-bottle{
        width: 207px !important;
    }
    .argums{
        transform: translateX(-25%);
    }
    .ginger{
        transform: translateX(-10vw) !important;
    }
    .red{
        transform: translateX(-27%);
    }
    .main-bottle:hover{
        width: 210px !important;
    }
}
@media screen and (max-width: 340px) {

    .group img{
        width: 130px;
    }
    .main-bottle{
        width: 190px !important;
    }
    .argums{
        transform: translateX(-25%);
    }
    .ginger{
        transform: translateX(-18vw) !important;
    }
    .red{
        transform: translateX(-31%);
    }
}
</style>
