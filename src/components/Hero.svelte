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

<main style="height:3000px">
    <div class="argums">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/agrumes/sheet-1.png" alt="">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/agrumes/sheet-2.png" alt="">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/agrumes/sheet-3.png" alt="">
        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/agrumes/sheet-4.png" alt="">

        <img class="rellax" data-rellax-speed="2"src="./assets/illustrations/agrumes/fruit-1.png" alt="">
        <img class="rellax" data-rellax-speed="4"src="./assets/illustrations/agrumes/fruit-2.png" alt="">
        <img class="rellax" data-rellax-speed="3"src="./assets/illustrations/agrumes/fruit-3.png" alt="">
        <img class="rellax" data-rellax-speed="-1"src="./assets/illustrations/agrumes/fruit-4.png" alt="">
        <img class="rellax" data-rellax-speed="1"src="./assets/illustrations/agrumes/fruit-5.png" alt="" >

        <img class="main-bottle" src="./assets/illustrations/agrumes/bottle.png" alt="" >
    </div>
</main>

<style scoped>
.argums img{
    position:absolute;
    width: 500px;
}
.main-bottle{
    width: 510px !important;
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
</style>
