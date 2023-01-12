<script lang="ts">
  import Button from "$lib/Button.svelte";
</script>

<div id="main">
  <div id="top" />
  <h1>About Flashlet</h1>
  <section>
    <h2>A decentralized flashcard platform</h2>
    <p>
      Flashlet is a platform for creating, managing, studying, and 
      sharing flashcards. Built on top of GunDB, Flashlet gives you 
      control over your data. With a decentralized
      backend, Flashlet decks are stored wherever the user wants them
      with no restrictions.
    </p>
  </section>
  <section>
    <h2>Get Started Today</h2>
    <p>
      Getting started with Flashlet is easy. Just set up an easy 
      account only using a username and password and you can get down
      to studying.
    </p>
    <Button 
      label="Get Started" 
      fg="var(--grey)" 
      size="large" 
      bg="var(--green)" 
    />
  </section>
</div>

<style>
  div#top {
    display: block;
    margin-top: 64px;
  }

  div#main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    width: 100%;
    text-align: center;
  }
  
  section {
    width: calc(100% - 32px);
    max-width: 70ch;
  }
</style>