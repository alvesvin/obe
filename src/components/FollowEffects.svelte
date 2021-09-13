<script>
    let star1;
    let star2;
    let star3;
    let star4;
        
    const onMouseMove = e => {
    	star1.style.left = (-10 + e.pageX) + "px";
    	star1.style.top = (-31 + e.pageY) + "px";
        
    	star2.style.left = (25 + e.pageX) + "px";
    	star2.style.top = (25 + e.pageY) + "px";
        
    	star3.style.left = (-25 + e.pageX) + "px";
    	star3.style.top = (13 + e.pageY) + "px";
        
    	star4.style.left = (24 + e.pageX) + "px";
    	star4.style.top = (13 + e.pageY) + "px";
    };
        
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("wheel", onMouseMove);
</script>
    

<img bind:this={star1} alt="" draggable="false" class="star star1" src="./assets/illustrations/star.png" width="13px">
<img bind:this={star2} alt="" draggable="false" class="star star2" src="./assets/illustrations/star.png" width="11px">
<img bind:this={star3} alt="" draggable="false" class="star star3" src="./assets/illustrations/star.png" width="9px">
<img bind:this={star4} alt="" draggable="false" class="star star4" src="./assets/illustrations/star.png" width="7px">

<style>
.star{
    position: absolute;
}
.star1 {
	animation: Aniamtion1 3.5s;
	animation-iteration-count: infinite;
	transform: translate(-50%, -50%);
}
	
.star2 {
	transition: all 0.2s;
	animation: Aniamtion1 4s;
	animation-iteration-count: infinite;
}
	
.star3 {
	transition: all 0.09s;
	animation: Aniamtion1 5.5s;
	animation-iteration-count: infinite;
}
	
.star4 {
	transition: all 0.07s;
	animation: Aniamtion1 2.5s;
	animation-iteration-count: infinite;
}

@keyframes Aniamtion1 {
	from {
		transform: translateY(0px);
	}
    50% {
		transform: translateY(-5px);
	}
	to {
		transform: translateY(0px);
	}
}
	
</style>
