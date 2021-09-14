<script>
let star1;
let star2;
let star3;
let star4;
let star5;

let ball1;
let ball2;
let ball3;
let ball4;
let ball5;

function followScroll() {
	star1.style.top = (window.scrollY + 300) + "px";
	star2.style.top = (window.scrollY + 600) + "px";
	star3.style.top = (window.scrollY + 700) + "px";
	star4.style.top = (window.scrollY + 250) + "px";
	star5.style.top = (window.scrollY + 200) + "px";

	ball1.style.top = (window.scrollY + 100) + "px";
	ball2.style.top = (window.scrollY + 80) + "px";
	ball3.style.top = (window.scrollY + 450) + "px";
	ball4.style.top = (window.scrollY + 800) + "px";
	ball5.style.top = (window.scrollY + 740) + "px";
}

document.addEventListener("scroll", followScroll);

</script>

<img bind:this={star1} alt="" draggable="false" class="element star1" src="./assets/illustrations/star.png" width="13px">
<img bind:this={star2} alt="" draggable="false" class="element star2" src="./assets/illustrations/star.png" width="11px">
<img bind:this={star3} alt="" draggable="false" class="element star3" src="./assets/illustrations/star.png" width="9px">
<img bind:this={star4} alt="" draggable="false" class="element star4" src="./assets/illustrations/star.png" width="13px">
<img bind:this={star5} alt="" draggable="false" class="element star5" src="./assets/illustrations/star.png" width="13px">

<div bind:this={ball1} class="element ball ball1"></div>
<div bind:this={ball2} class="element ball ball2"></div>
<div bind:this={ball3} class="element ball ball3"></div>
<div bind:this={ball4} class="element ball ball4"></div>
<div bind:this={ball5} class="element ball ball5"></div>

<style>
.element{
    position: absolute;
}
.ball{
	width: 12px;
	height: 12px;
	border: 1px solid;
	border-radius: 50%;
	position: absolute;
}
.star1 {
    transition: all 3s;
	animation: animation1 3.5s;
	animation-iteration-count: infinite;
    left: 40%;
    top: 27%;
}
.star2 {
	transition: all 2s;
	animation: animation1 2s;
	animation-iteration-count: infinite;
    left: 3%;
    top: 8%;
}
.star3 {
	transition: all 3.5s;
	animation: animation1 1.5s;
	animation-iteration-count: infinite;
    left: 34%;
    top: 75%;
}
.star4 {
	transition: all 3.5s;
	animation: animation1 1.9s;
	animation-iteration-count: infinite;
    left: 90%;
    top: 10%;
}
.star5 {
	transition: all 3.5s;
	animation: animation1 1s;
	animation-iteration-count: infinite;
    left: 76%;
    top: 84%;
}

.ball1 {
    transition: all 3s;
	animation: animation1 3.5s;
	animation-iteration-count: infinite;
    left: 95%;
    top: 54%;
	width: 15px;
	height: 15px;
}
.ball2 {
	transition: all 2s;
	animation: animation1 2s;
	animation-iteration-count: infinite;
    left: 44%;
    top: 50%;
    width: 15px;
	height: 15px;
}
.ball3 {
	transition: all 3.5s;
	animation: animation1 1.5s;
	animation-iteration-count: infinite;
    left: 15%;
    top: 90%;
    width: 17px;
	height: 17px;
}
.ball4 {
	transition: all 3.5s;
	animation: animation1 1.5s;
	animation-iteration-count: infinite;
    width: 24px;
	height: 24px;
    left: 95%;
    top: 80%;
}
.ball5 {
	transition: all 3.5s;
	animation: animation1 1.5s;
	animation-iteration-count: infinite;
    left: 36%;
    top: 10%;
    width: 18px;
	height: 18px;
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