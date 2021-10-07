<script>
  import Hero from "./components/Hero.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Marquee from "./components/Marquee.svelte";
  import Details from "./components/Details.svelte";
</script>

<Navbar />
<Hero />
<Marquee
  content="Boire Ôbe c’est donner à la nouvelle génération la possibilité de choisir pour elle même"
/>
<Details />

<section
  style="background-image: url('/assets/misc/background.png'); background-position: right; background-size: cover"
  class="h-screen bg-black"
/>

<style global lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  @tailwind base;

  * {
    scroll-behavior: smooth;
  }

  html {
    @apply text-gray-800 3xl:text-xl 4xl:text-4xl 5xl:text-5xl 6xl:text-6xl;
  }

  @tailwind components;
  @tailwind utilities;
</style>
