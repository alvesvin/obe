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
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/misc/1-5-min.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/misc/1-6-min.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/misc/1-7-min.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/misc/1-8-min.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/misc/1-1-min.png" />
    <HeroImage class="rellax" data-rellax-speed="8" src="/assets/misc/1-2-min.png" />
    <HeroImage class="rellax" data-rellax-speed="7" src="/assets/misc/1-3-min.png" />
    <HeroImage class="rellax" data-rellax-speed="10" src="/assets/misc/1-4-min.png" />
    <span>
      <HeroImage src="/assets/bottles/1-min.png" />
    </span>
  </section>

  <!-- prettier-ignore -->
  <section class="bottle-section">
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/misc/2-6-min.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/misc/2-7-min.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/misc/2-8-min.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/misc/2-9-min.png" />
    <HeroImage class="rellax" data-rellax-speed="7" src="/assets/misc/2-1-min.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/misc/2-2-min.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/misc/2-3-min.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/misc/2-4-min.png" />
    <HeroImage class="rellax" data-rellax-speed="9" src="/assets/misc/2-5-min.png" />
    <span>
      <HeroImage src="/assets/bottles/2-min.png" />
    </span>
  </section>

  <!-- prettier-ignore -->
  <section class="bottle-section">
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/misc/3-1-min.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/misc/3-2-min.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/misc/3-3-min.png" />
    <HeroImage class="rellax" data-rellax-speed="1" src="/assets/misc/3-4-min.png" />
    <HeroImage class="rellax" data-rellax-speed="2" src="/assets/misc/3-5-min.png" />
    <HeroImage class="rellax" data-rellax-speed="4" src="/assets/misc/3-6-min.png" />
    <HeroImage class="rellax" data-rellax-speed="3" src="/assets/misc/3-7-min.png" />
    <HeroImage class="rellax" data-rellax-speed="5" src="/assets/misc/3-8-min.png" />
    <HeroImage class="rellax" data-rellax-speed="6" src="/assets/misc/3-9-min.png" />
    <span>
      <HeroImage src="/assets/bottles/3-min.png" />
    </span>
  </section>
</main>

<style lang="postcss">
  span {
    @apply flex justify-center items-center absolute left-0 right-0 top-0 bottom-0;
  }

  .bottle-section {
    @apply flex items-center justify-center relative;

    /* Screen height - Navbar height */
    height: calc(100vh - 5rem);

    @media (min-width: 1024px) {
      /* Screen height - Navbar height - Vertical padding */
      height: calc(100vh - 5rem - 5rem);
    }

    &:nth-child(1) {
      @apply bg-giger bg-opacity-20;

      & > span {
        animation: breathing 4s infinite;
      }
    }

    &:nth-child(2) {
      @apply bg-agrumes bg-opacity-20;

      & > span {
        animation: breathing 2.5s infinite;
      }
    }

    &:nth-child(3) {
      @apply bg-rouges bg-opacity-20;

      & > span {
        animation: breathing 3.5s infinite;
      }
    }
  }

  @keyframes breathing {
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
