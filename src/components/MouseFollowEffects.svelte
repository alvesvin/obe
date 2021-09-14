<script>
let star1;
let star2;
let star3;

let ball1;
let ball2;
let ball3;
        
const onMouseMove = e => {
	star1.style.left = (-7 + e.pageX) + "px";
	star1.style.top = (-28 + e.pageY) + "px";
        
	star2.style.left = (22 + e.pageX) + "px";
	star2.style.top = (22 + e.pageY) + "px";
        
	star3.style.left = (-22 + e.pageX) + "px";
	star3.style.top = (10 + e.pageY) + "px";

	ball1.style.left = (-17 + e.pageX) + "px";
	ball1.style.top = (0 + e.pageY) + "px";

	ball2.style.left = (29 + e.pageX) + "px";
	ball2.style.top = (-23 + e.pageY) + "px";

	ball3.style.left = (20 + e.pageX) + "px";
	ball3.style.top = (-10 + e.pageY) + "px";
};
        
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("wheel", onMouseMove);
</script>
    

<img bind:this={star1} alt="" draggable="false" class="element star1" src="./assets/illustrations/star.png" width="12px">
<img bind:this={star2} alt="" draggable="false" class="element star2" src="./assets/illustrations/star.png" width="10px">
<img bind:this={star3} alt="" draggable="false" class="element star3" src="./assets/illustrations/star.png" width="8px">

<div bind:this={ball1} class="element ball ball1"></div>
<div bind:this={ball2} class="element ball ball2"></div>
<div bind:this={ball3} class="element ball ball3"></div>

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
	animation: animation1 3.5s;
	animation-iteration-count: infinite;
	transform: translate(-50%, -50%);
}
.star2 {
	transition: all 0.2s;
	animation: animation2 2s;
	animation-iteration-count: infinite;
}
.star3 {
	transition: all 0.09s;
	animation: animation1 1.5s;
	animation-iteration-count: infinite;
}
.ball1 {
	transition: all 0.13s;
	animation: animation1 3.5s;
	animation-iteration-count: infinite;
	transform: translate(-50%, -50%);
}
	
.ball2 {
	transition: all 0.16s;
	animation: animation1 4s;
	animation-iteration-count: infinite;
	width: 7px;
	height: 7px;
}
	
.ball3 {
	transition: all 0.09s;
	animation: animation1 5.5s;
	animation-iteration-count: infinite;
	width: 10px;
	height: 10px;
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
@keyframes animation2 {
    from {
        transform: translateY(0px);
        transform: rotate(0);
    }
    50% {
        transform: translateY(-8px);
        transform: rotate(90deg);
    }
    to {
        transform: translateY(0px);
        transform: rotate(0);
    }
}
</style>
