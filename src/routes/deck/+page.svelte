<script lang="ts">
	import Deck from "$lib/Deck.svelte";
	import Button from "$lib/Button.svelte";
	let cardCount = 0;
	let deck;
	let index = 0;
	let cards = [
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
		{term: "What is the cloud concept of availibility?", definition: "No idea."},
	];
	
	$: if (cards) {
		cardCount = cards.length
		console.log(cardCount, index);
	}
</script>

<div class="content">
	<section class="flash-card">
		<Deck bind:index bind:cards bind:this={deck} />
		<br />
		<div class="deck-buttons">
			{#if index > 0}
				<Button 
					label="Previous"
					on:click={deck.previous}
					fg="var(--grey)"
					bg="var(--green)"
					size="large"
				/>
			{:else}
				<div />
			{/if}
			{#if index + 1 < cardCount}
				<Button 
					label="Next"
					on:click={deck.next}
					fg="var(--grey)"
					bg="var(--green)"
					size="large"
				/>
			{:else}
				<div />
			{/if}
		</div>
	</section>
</div>

<style>
	div.deck-buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-left: 12px;
		padding-right: 12px;
	}

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
