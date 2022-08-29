<script lang="ts">
  import NativeFileApi from "$lib/NativeFileApi.svelte";
  import Carousel from "$lib/Carousel.svelte";

  import { Alert,Datepicker, AccordionItem } from 'flowbite-svelte';
</script>

<svelte:head>
  <title>Top Svelte</title>
</svelte:head>

<div class="container mx-auto">
  <AccordionItem id="1" color>
    <h2 slot="header">My Header 1</h2>
    <div slot="body">
      <p class="mb-2">
        Lorem ipsum dolor sit amet ...
      </p>
      ...
    </div>
  </AccordionItem>
  <AccordionItem id="2">
    <h2 slot="header">My Header 2</h2>
    <div slot="body">
      <p class="mb-2">
        Lorem ipsum dolor sit amet ...
      </p>
      ...
    </div>
  </AccordionItem>

  <h2>Flowbie</h2>
  <div class="p-8">
    <Alert>
      <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>

    <Datepicker range />
  </div>

  <div class="text-3xl mt-20">Index page</div>
  <div class="prose">
    <ul>
      <li>SvelteKit</li>
      <li>TailwindCSS (with official plugins) + DaisyUI + FlowBir</li>
      <li>Theme Switcher</li>
      <li>Markdown Routes with mdsvex</li>
      <li>Static Blog with markdown files</li>
      <li>Supabase with Auth</li>
      <li>Electron</li>
      <li>Native File System API</li>
      <li></li>
    </ul>

    Custom Components:
    <ul>
      <li>Simple image carrousel</li>
    </ul>
  </div>

  <div class="my-5"></div>

  <NativeFileApi/>

  <Carousel/>

</div>
