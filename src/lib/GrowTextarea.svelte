<svelte:options accessors={true} />

<script lang="ts">
	export let rowMax = 2;
	export let rowMin = 1;
	export let placeholder = "";
	export let value = "";
	export let inputField;

	$: focused = false;
	$: red = focused && value.length == 0;

	$: if (inputField) {
		inputField.oninput = () => {
			let newValue = inputField.innerText.replace(/\s+/g, " ").trim();
			value = newValue;
		}
	}
</script>

<div class="field-container">
	<div bind:this={inputField} on:focus={() => {focused = true;}} contenteditable="true" class="input-field">
		<p></p>
	</div>
	<p class:empty={red} class="placeholder">{placeholder}</p>
</div>


<style>
	div.input-field {
		user-select: text;
		word-break: break-word;
		overflow-wrap: break-word;
		white-space: pre-wrap;
		padding: 4px;
		font-weight: 500;
		border-bottom: 2px solid var(--white);
		transition: all 0.4s ease-in-out;
		min-height: calc(1em + 6px);
	}

	p.empty {
		color: var(--red);
	}

	p {
		min-height: 1em + 6px;
	}

	div.input-field:focus {
		border: none;
		outline: none;
		border-bottom: 2px solid var(--green);
	}
	
	div.input-field > p {
		margin: 0px;
	}
	
	p.placeholder {
		font-size: 0.9em;
		font-weight: bold;
		margin: 0px;
		transition: all 0.4s ease-in-out;
	}
	
</style>
