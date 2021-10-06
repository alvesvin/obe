<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { fly, fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  onMount(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  });

  /** @type svelte.JSX.MouseEventHandler<HTMLElement> */
  const outclick = (evt) => {
    if (evt.currentTarget !== evt.target) return;
    dispatch("close-request");
  };
</script>

<section
  on:click={outclick}
  transition:fade
  class="fixed z-40 left-0 right-0 bottom-0 top-0 bg-gray-800 bg-opacity-70 flex justify-end {$$props.class}"
>
  <section transition:fly={{ x: 200 }} class="bg-white w-2/3">asdsd</section>
</section>
