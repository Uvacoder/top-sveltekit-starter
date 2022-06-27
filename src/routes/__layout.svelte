<script lang="ts">
  import Header from "$lib/header/Header.svelte";
  import AppFooter from "$lib/AppFooter.svelte";
  import "../app.css"
</script>

<main class="flex flex-col w-screen h-screen bg-base-200">
  <Header>
    <slot/>
  </Header>

  <AppFooter/>
</main>

