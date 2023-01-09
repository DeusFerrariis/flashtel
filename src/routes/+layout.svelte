<header>
  <div class="header-section" id="first">
    <h1 id="title">Flashlet</h1>
  </div>
  <div class="header-section" id="center">
    .
  </div>
  <div class="header-section" id="last">
    .
  </div>
</header>

<slot />

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
  }

  header {
    position: sticky;
    font-family: 'Kanit', sans-serif;
    background-color: var(--white);
    height: 68px;
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

  header > .header-section#first > h1#title {
    margin-top: 0px;
    margin-bottom: 0px;
    opacity: 0.8;
  }
</style>