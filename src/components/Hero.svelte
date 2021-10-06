<script>
  import HeroImage from "./HeroImage.svelte";

  const initializeRellax = () => {
    new Rellax(".rellax", { center: true });
  };
</script>

<svelte:head>
  <script
    src="https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js"
    on:load={initializeRellax}></script>
</svelte:head>

<main class="container mx-auto grid grid-cols-1 lg:grid-cols-3 lg:py-10">
  <!-- prettier-ignore -->
  <section class="bottle-section">
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/illustrations/ginger/ginger-1.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/illustrations/ginger/ginger-2.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/illustrations/ginger/ginger-3.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/illustrations/ginger/ginger-4.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/illustrations/ginger/fruit-1.png" />
    <HeroImage class="rellax" data-rellax-speed="8" src="/assets/illustrations/ginger/fruit-2.png" />
    <HeroImage class="rellax" data-rellax-speed="7" src="/assets/illustrations/ginger/fruit-3.png" />
    <HeroImage class="rellax" data-rellax-speed="10" src="/assets/illustrations/ginger/fruit-4.png" />
    <HeroImage src="/assets/illustrations/ginger/bottle.png" />
  </section>

  <!-- prettier-ignore -->
  <section class="bottle-section">
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/illustrations/agrumes/sheet-1.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/illustrations/agrumes/sheet-2.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/illustrations/agrumes/sheet-3.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/illustrations/agrumes/sheet-4.png" />
    <HeroImage class="rellax" data-rellax-speed="7" src="/assets/illustrations/agrumes/fruit-1.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/illustrations/agrumes/fruit-2.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/illustrations/agrumes/fruit-3.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/illustrations/agrumes/fruit-4.png" />
    <HeroImage class="rellax" data-rellax-speed="9" src="/assets/illustrations/agrumes/fruit-5.png" />
    <HeroImage src="/assets/illustrations/agrumes/bottle.png" />
  </section>

  <!-- prettier-ignore -->
  <section class="bottle-section">
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/illustrations/red/fruit-1.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/illustrations/red/fruit-2.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/illustrations/red/fruit-3.png" />
    <HeroImage class="rellax" data-rellax-speed="1" src="/assets/illustrations/red/fruit-4.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/illustrations/red/fruit-5.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/illustrations/red/fruit-6.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/illustrations/red/fruit-7.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/illustrations/red/fruit-8.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/illustrations/red/fruit-9.png" />
    <HeroImage src="/assets/illustrations/red/bottle.png" />
  </section>
</main>

<style lang="postcss">
  .bottle-section {
    @apply flex items-center justify-center relative;

    /* Screen height - Navbar height */
    height: calc(100vh - 5rem);

    @media (min-width: 1024px) {
      /* Screen height - Navbar height - Vertical padding */
      height: calc(100vh - 5rem - 5rem);
    }

    &:nth-child(1) {
      @apply bg-green-50;
    }

    &:nth-child(2) {
      @apply bg-yellow-50;
    }

    &:nth-child(3) {
      @apply bg-red-50;
    }
  }
</style>
