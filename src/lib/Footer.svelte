<script lang="ts">
  import { getProjectCopyrightYear } from '$lib/dates.ts';
  let copyrightYear = getProjectCopyrightYear();
</script>

<footer>
  <div class="footer-section" id="first">
    <p>{copyrightYear}</p>
  </div>
</footer>

<style>
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
