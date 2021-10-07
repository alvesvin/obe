<script>
  import { onMount, onDestroy } from "svelte";
  import { backOut, quadOut, elasticOut } from "svelte/easing";

  export let value = "";

  let loaded = false;
  /** @type HTMLElement */
  let we;

  $: words = value.split(/\s+/g);
  $: y = we && we.getBoundingClientRect().y;

  const check = () => {
    const inscreen =
      window.scrollY + window.innerHeight > y + window.innerHeight * 0.3;

    if (we && inscreen && !loaded) {
      loaded = true;
    }

    window.requestAnimationFrame(check);
  };

  /** @type { (_: HTMLSpanElement, __: any) => any }*/
  const anim = (node, { delay, duration = 700 }) => {
    return {
      duration,
      delay,
      css: (t) => {
        const back = backOut(t);
        const quad = quadOut(t);

        return `
          opacity: ${quad};
          transform: translateY(${100 - back * 100}%);
        `;
      }
    };
  };

  onMount(() => {
    window.requestAnimationFrame(check);
  });
</script>

<section bind:this={we} class="space-x-0.5 {$$props.class}">
  {#each words as word, i}
    {#if loaded}
      <span class="inline-block px-0.5">
        <p transition:anim={{ delay: i * 30 }}>
          {word}
        </p>
      </span>
    {/if}
  {/each}
</section>

<style lang="postcss">
  p {
    will-change: transform, opacity;
  }
</style>
