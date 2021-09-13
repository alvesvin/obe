<script>
import Details from "./components/Details.svelte";
import FollowEffects from "./components/FollowEffects.svelte";
import Hero from "./components/Hero.svelte";
import Navbar from "./components/Navbar.svelte";
</script>

<main>
    <FollowEffects/>
	<Navbar/>
    <Hero/>
    <Details/>
</main>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
*{
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>