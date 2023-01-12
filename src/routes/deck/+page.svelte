<script lang="ts">
	import Deck from "$lib/Deck.svelte";
</script>

<div class="content">
	<section class="flash-card">
		<Deck />
	</section>
</div>

<style>
	div.content {
		padding-top: 32px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section.flash-card {
		width: calc(100% - 32px);
		max-width: 75ch;
	}

	div.flash-card {
		background-color: var(--white);
		color: var(--grey);
		width: 100%;
		font-size: 150pt;
		font-size: 7vw;
		aspect-ratio: 5 / 3; 
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		box-shadow:  0px 12px 24px -12px rgba(0, 0, 0, 0.5);
		border-radius: 6px;
	}
</style>
