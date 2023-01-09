<script lang="ts">
  import Button from "$lib/Button.svelte";
  import { getProjectCopyrightYear } from '$lib/dates.ts';
  let copyrightYear = getProjectCopyrightYear();
</script>

<div id="layout">
  <header>
    <div class="header-section" id="first">
      <h1 id="title">Flashlet</h1>
    </div>
    <div class="header-section" id="center">
      <Button size="large" label="New Set" />
    </div>
    <div class="header-section" id="last">
      <Button 
        size="large" 
        bg="var(--green)"
        fg="var(--grey)"
        label="Sign Up"/>
    </div>
  </header>

  <div class="page">
    <slot />
  </div>

  <footer>
    <div class="footer-section" id="first">
      <p>{copyrightYear}</p>
    </div>
  </footer>
</div>

<style>
  /*
    Make imported fonts availible across all routes     

    Usage:
      font-family: 'Kanit', sans-serif;
      font-family: 'Open Sans', sans-serif;
  */
  @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Open+Sans:wght@400;500;700&display=swap');

  /*
    Global color variables. While verbose it is more memorable naming.
    
    Usage:
      color: var(--red);
  */
  :global(:root) {
    --red: #FB3640;
    --blue: #247BA0;
    --green: #31E981;
    --yellow: #FFBC42;
    --white: #D8E4FF;
    --black: #08080C;
    --grey: #28283E;
  }
  
  /*
    Keeps footer at minimum the bottom of the page. If the content
    exceeds its default length the footer goes to the end of the content.
  */
  div#layout {
    display: grid;
    width: 100%;
    min-height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 68px  1fr 72px; 
    font-family: 'Open Sans', sans-serif;
  }

  header {
    position: sticky;
    font-family: 'Kanit', sans-serif;
    background-color: var(--white);
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
  }

  header > .header-section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  
  header > .header-section#first {
    padding-left: 16px;
  }
  
  header > .header-section#center {
    justify-content: space-evenly;
  }

  header > .header-section#last {
    justify-content: flex-end;
    padding-right: 16px;
  }

  header > .header-section#first > h1#title {
    margin-top: 0px;
    margin-bottom: 0px;
    opacity: 0.8;
  }
  
  .page {
    color: var(--white);
  }

  footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    background-color: var(--black);
    color: var(--white);
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
  }
  
  footer > .footer-section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  footer > .footer-section#first {
    padding-left: 16px;
  }
</style>