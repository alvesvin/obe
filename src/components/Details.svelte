<script>
  import { fade } from "svelte/transition";
  import Text from "./Text.svelte";

  let options = [
    {
      title: "Agrumes",
      picture: "/assets/bottles/2-styled-min.png",
      thumb: "",
      subtitle: "Lorem ipsum sit dolor amet",
      body: "Dès le moindre rayon de soleil tu seras toujours préparé(e)!",
      background: "bg-agrumes",
      text: "text-agrumes",
      border: "border-agrumes"
    },
    {
      title: "Fruit Rouges",
      picture: "/assets/bottles/3-styled-min.png",
      subtitle: "Lorem ipsum sit dolor amet",
      body: "Piscine, bronzette et Ôbe!",
      background: "bg-rouges",
      text: "text-rouges",
      border: "border-rouges"
    },
    {
      title: "Citron Vert Gigembre",
      picture: "/assets/bottles/1-styled-min.png",
      subtitle: "Lorem ipsum sit dolor amet",
      body: "Ginger… Hard Seltzer!",
      background: "bg-giger",
      text: "text-giger",
      border: "border-giger"
    }
  ];
  let selected = options[0];
</script>

<main id="details" class="min-h-screen">
  <Text
    class="container mx-auto text-center text-xl text-gray-500 font-medium px-3 md:text-2xl lg:px-32 md:leading-relaxed py-20"
    value="Ôbe est une boisson craft faite en France avec des ingrédients français,
    sans sucres résiduels ni ajoutés, faible en calories, sans gluten et sans
    produits controversés. Ôbe rend compte des besoins de la nouvelle génération"
  />

  <!-- Only on mobile -->
  <section
    class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:hidden"
  >
    {#each options as option}
      <section class="px-3 py-32 {option.background}">
        <h3
          class="mb-2 text-xs text-center font-bold tracking-widest max-w-max mx-auto rounded-md px-1 py-0.5 text-gray-800 text-opacity-50 {option.background}"
        >
          HARD SELTZER
        </h3>

        <Text
          class="font-bold text-4xl mb-6 text-center"
          value={option.title}
        />

        <p class="text-xl font-medium text-center">
          {option.body}
        </p>
      </section>
    {/each}
  </section>

  <!-- Only on desktops -->
  <section
    style="height: 620px"
    class="hidden xl:flex container mx-auto space-x-8"
  >
    <section class="px-3 flex-1 relative">
      <img
        width="97px"
        height="70px"
        class="block absolute -right-3"
        src="/assets/misc/sheet-detail.png"
        alt=""
      />

      {#each options as option}
        <button
          type="button"
          class="flex border-l-8 border-gray-800 border-opacity-20 mb-8 transition-colors duration-700 {selected ===
          option
            ? option.background
            : 'bg-gray-100'} w-full py-2 space-x-4"
          on:click={() => (selected = option)}
        >
          <img src={option.thumb} alt="" />

          <span class="text-gray-800 text-opacity-70">
            <h3 class="text-2xl font-semibold text-left">{option.title}</h3>
            <p class="opacity-60 text-left font-medium">{option.subtitle}</p>
          </span>
        </button>
      {/each}
    </section>

    <section
      class="{selected.background} bg-opacity-20 flex-1 flex justify-center items-center transition-colors relative"
    >
      <!-- Yes, very shitty -->

      {#if selected === options[0]}
        <img
          transition:fade={{ duration: 700 }}
          class="ml-32 absolute top-0 bottom-0 select-none"
          draggable="false"
          src={options[0].picture}
          alt=""
        />
      {/if}

      {#if selected === options[1]}
        <img
          transition:fade={{ duration: 700 }}
          draggable="false"
          class="ml-48 transform-gpu translate-x-0.5 absolute top-0 bottom-0 select-none"
          src={options[1].picture}
          alt=""
        />
      {/if}

      {#if selected === options[2]}
        <img
          transition:fade={{ duration: 700 }}
          class="ml-48 transform-gpu translate-x-0.5 absolute top-0 bottom-0 select-none"
          draggable="false"
          src={options[2].picture}
          alt=""
        />
      {/if}
    </section>

    <section class="flex-1">
      <h3
        class="mb-2 text-xs font-bold tracking-widest max-w-max rounded-md px-1 py-0.5 text-gray-800 text-opacity-50 transition-colors duration-700 {selected.background}"
      >
        HARD SELTZER
      </h3>

      <Text value={selected.title} class="font-bold text-5xl mb-8" />

      <Text class="text-2xl font-medium" value={selected.body} />
    </section>
  </section>
</main>

<style lang="postcss">
  section.desktop {
    min-height: 670px;
  }
</style>
