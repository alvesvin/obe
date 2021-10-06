<script>
  let visible = false;

  function setVisible() {
    visible = true;
  }

  const { class: classes, ...props } = $$props;
</script>

<div class={visible ? "div_visible" : "div_invisible"}>
  <img
    class={classes}
    on:load={setVisible}
    draggable="false"
    alt=""
    {...props}
  />
</div>

<style lang="postcss">
  img {
    @apply transition-opacity absolute select-none;
    max-height: 90%;
  }

  div {
    @apply flex justify-center items-center absolute left-0 right-0 top-0 bottom-0 transition duration-300 delay-500;
  }

  .div_invisible {
    @apply opacity-0;
    transform: scale(0.9);
  }

  .div_visible {
    @apply opacity-100;
    transform: scale(1);
  }
</style>
