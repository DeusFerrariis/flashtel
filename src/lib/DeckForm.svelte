<script>
	import { createEventDispatcher } from "svelte";
	import GrowTextarea from "$lib/GrowTextarea.svelte";
	import Button from "$lib/Button.svelte";

	export let term = "";
	export let definition = "";
	export let index = "";
	export let focus = false;
	export let removeAble;
	
	let termElement;

	$: if (focus && termElement) {
		termElement.inputField.focus();
		focus = false;
	}

	const dispatch = createEventDispatcher();
	function remove() {
		dispatch("remove");
	}
</script>

<div class="deck-form">
	<p>{index}</p>
	<br />
	<div class="fields-row">
		<GrowTextarea
			placeholder="Term"
			bind:value={term}
			bind:this={termElement}
		/>
		<GrowTextarea
			placeholder="Definition"
			bind:value={definition}
		/>
	</div>
	<div class="buttons">
		{#if removeAble}
			<Button
				ref="df-remove-button"
				size="small"
				label="Remove"
				fg="var(--grey)"
				bg="var(--red)"
				on:click={remove}
			/>
		{/if}
	</div>
</div>

<style>
	div.deck-form {
		width: auto;
		padding: 16px;
		border: 2px solid var(--yellow);
		border-radius: 4px;
	}
	
	div.fields-row {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 16px;
	}
	
	@media only screen and (max-width: 720px) {
		div.fields-row {
			grid-template-columns: none;
			grid-template-rows: auto auto;
			row-gap: 16px;
		}
	}
	
	div.buttons {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		column-gap: 16px;
	}
	
	:global([ref=df-remove-button]) {
		grid-column: 5;
	}
	
	p {
		margin: 0px;
	}
</style>
