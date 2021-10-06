<script>
  export let content = "";
</script>

<section class="overflow-x-hidden flex items-center space-x-6 bg-gray-900 h-20">
  <p class="whitespace-nowrap">{content}</p>
  <p class="whitespace-nowrap">{content}</p>
  <p class="whitespace-nowrap">{content}</p>
</section>

<style lang="postcss">
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 1.5rem));
    }
  }

  p {
    @apply font-semibold text-white text-2xl;
    animation-name: marquee;
    animation-timing-function: linear;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }
</style>
