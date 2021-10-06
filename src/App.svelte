<script>
  import Hero from "./components/Hero.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Marquee from "./components/Marquee.svelte";
</script>

<Navbar />
<Hero />
<Marquee
  content="Boire Ôbe c’est donner à la nouvelle génération la possibilité de choisir pour elle même"
/>

<style global lang="postcss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
