<script lang="ts">
	import { createEventDispatcher } from "svelte";
		
	export let term = "Term";
	export let definition = "Definition";

	export let flipped = false;
	const dispatch = createEventDispatcher();
	const flip = () => {
		flipped = !flipped;
		dispatch("flip");
	}
</script>

<div on:click={flip} class="flash-card flip no-select">
	<div class:flipped={flipped} class="flash-card flip-inner no-select">
		<div class="flash-card term no-select">
			<div class="label">
				<slot name="label" />
			</div>
			<p class="term no-select">{term}</p>
		</div>

		<div class="flash-card definition no-select">
			<div class="label">
				<slot name="label" />
			</div>
			<p class="term no-select">{definition}</p>
		</div>
	</div>
</div>

<style>
	div.label {
		position: absolute;
		bottom: 0;
		right: 16px;
	}
	div.flash-card {
		aspect-ratio: 5 / 3; 
		cursor: pointer;
		z-index: 200;
	}

	div.flash-card.flip {
		background-color: transparent;
		perspective: 2000px;
	}

	div.flash-card.flip-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}
	
	div.flash-card.flip-inner.flipped {
		transform: rotateY(180deg);
	}
	
	div.flash-card.term, div.flash-card.definition {
		background-color: var(--white);
		color: var(--grey);
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		position: absolute;

		font-size: 150pt;
		font-size: 7vw;
		display: flex;
		flex-direction: row;
		align-items: center;
		text-align: center;
		box-shadow:  0px 12px 24px -12px rgba(0, 0, 0, 0.5);
		border-radius: 6px;
	}
	
	div.flash-card.definition {
		transform: rotateY(180deg);
	}
	
	p.term {
		text-align: center;
		width: 100%;
	}
</style>
