<script lang="ts">
  import Button from "$lib/Button.svelte";
</script>

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

<style>
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
</style>
