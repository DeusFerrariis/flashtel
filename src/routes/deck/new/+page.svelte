<script>
	import Button from "$lib/Button.svelte";
	import DeckForm from "$lib/DeckForm.svelte";
	import GrowTextarea from "$lib/GrowTextarea.svelte";

	$: cards = [{term: "", definition: "", focused: true, id: 0}]
	
	function addCard() {
		let cardsClone = cards;
		cardsClone.push({
				term: "",
				definition: "", 
				focused: true,
				id: cards[cards.length - 1].id + 1,
		});

		cards = cardsClone;
	}
	
	function removeCard(id) {
		let cardsClone = [...cards.slice(0, id), ...cards.slice(id+1)];
		console.log(cardsClone);
		cards = cardsClone;
	}
</script>

<div class="content">
	<section>
		<h1>Create a New Deck </h1>
		{#each cards as card, idx (card.id)}
			<DeckForm 
				index={`${idx + 1}/${cards.length}`}
				bind:definition={card.definition}
				bind:term={card.term}
				bind:focus={card.focused}
				removeAble={cards.length > 1}
				on:remove={() => removeCard(idx)}
				on:submit={addCard}
			/>
			<br />
		{/each}
		<div class="card-form add">
			<br />
			<Button 
				size="large"
				label="+ Add Card"
				on:click={addCard}
				fg="var(--grey)"
				bg="var(--green)"
			/>
			<br />
		</div>
		<br/>
		<Button 
			size="large"
			label="Create Deck"
			fg="var(--white)"
			bg="var(--blue)"
		/>
	</section>
</div>

<style>
	div.card-form-buttons {
		width: auto;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;		
		padding-top: 8px;
		grid-template-rows: auto;
	}
	
	div.card-form {
		width: auto;
		display: grid;
		grid-template-columns: 1fr 16px 1fr;		
		grid-template-rows: auto;
		grid-gap-row: 8px;
		height: auto;
		padding: 16px;
		border: 2px solid var(--yellow);
		border-radius: 4px;
	}
	
	div.card-form.add {
			grid-template-columns: 1fr 1fr 1fr;		
	}
	
	div.content {
		padding-top: 32px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	section {
		width: calc(100% - 64px);
		max-width: 75ch;
	}

	div.term {
		width: 100%;
	}
</style>
