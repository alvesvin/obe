<script>
  import Drawer from "./Drawer.svelte";

  let open = false;

  function closeDrawer() {
    open = false;
  }

  function openDrawer() {
    open = true;
  }
</script>

<nav class="container h-20 flex items-center justify-between px-4 mx-auto">
  <a href="/">
    <img
      class="h-12"
      src="./assets/brand.png"
      draggable="false"
      alt="Ôbe logo"
    />
  </a>

  {#if open}
    <Drawer on:close-request={closeDrawer} class="sm:hidden" />
  {/if}

  <!-- Hamburguer menu. Only visible on mobile -->

  <button class="sm:hidden" type="button" on:click={openDrawer}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>

  <ul class="hidden sm:flex sm:space-x-12">
    <li><a href="#home" class="">Home</a></li>

    <li>
      <a href="#details" class="">Détails</a>
    </li>

    <li>
      <a href="#histoire" class="">Histoire</a>
    </li>

    <li><a href="#merch" class="">Merch</a></li>

    <li>
      <a href="#sommes-nous" class="">Où Sommes-Nous</a>
    </li>
  </ul>
</nav>

<style lang="postcss">
  ul > li > a {
    @apply text-gray-400 hover:text-gray-800 transition-colors relative py-3;
  }

  ul > li > a::after {
    content: "";
    @apply block absolute h-0.5 left-0 right-0 bg-gray-900 rounded-full scale-0 transition-transform mt-1;
  }

  ul > li > a:hover::after {
    @apply scale-100;
  }
</style>
