<script lang="ts">
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div id="layout">
  <Header />
  <div class="page">
    <slot />
  </div>
  <Footer />
</div>

<style>
  /* Make Fonts and Colors Globally availible */
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Open+Sans:wght@400;500;700&display=swap');

  :global(:root) {
    --red: #FB3640;
    --blue: #247BA0;
    --green: #31E981;
    --yellow: #FFBC42;
    --white: #D8E4FF;
    --black: #08080C;
    --grey: #28283E;
  }
  
  div#layout {
    display: grid;
    width: 100%;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 68px  1fr 72px; 
    font-family: 'Open Sans', sans-serif;
  }

  .page {
    color: var(--white);
  }
</style>