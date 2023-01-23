<svelte:options accessors={true} />

<script>
	import Flashcard from "$lib/Flashcard.svelte";
	import Button from "$lib/Button.svelte";
	import { swipe } from "svelte-gestures";
	import { handleSwipe } from "./deck.js";
	
	export let cards = [
		{term: "Term 1", definition: "Definition 1"},
		{term: "Term 2", definition: "Definition 2"},
		{term: "Term 3", definition: "Definition 3"},
		{term: "Term 4", definition: "Definition 4"},
	];
	export let index = 0;
	export let swipeable = true;

	let slide = "none";
	
	export function next() {
		console.log("ree");
		if (slide == "none" && index + 1  < cards.length) {
			slide = "next";
			index += 1;
			setTimeout(() => {slide = "none"}, 800);
		}
	}
	
	export function previous() {
		if (slide == "none" && index > 0) {
			slide = "previous";
			setTimeout(() => {
				slide = "none";
				index -= 1;
			}, 750)
		}
	}
</script>

<div 
	use:swipe={{
		timeframe: 300,
		minSwipeDistance: 100,
		touchAction: 'pan-y'
	}} 
	on:swipe={swipeable ? (e) => handleSwipe(e, slideCard) : () => {}}
	class="deck slider"
>
	{#each cards as card, idx}
		{#if (idx == index || idx == index - 1)}
			<div 
				class="fc" 
				class:previous={idx == index - 1} 
				class:current={idx == index}
				class:slide-previous={slide == "previous"}
				class:slide-next={slide == "next"}
			>
				{#if idx == index - 1}
					<Flashcard flipped={false} term={card.term} definition={card.definition}>
						<p slot="label" class="tabulation">{idx + 1} / {cards.length}</p>
					</Flashcard>
				{:else}
					<Flashcard flipped={false} term={card.term} definition={card.definition}>
						<p slot="label" class="tabulation">{idx + 1} / {cards.length}</p>
					</Flashcard>
				{/if}
			</div>
		{/if}
	{/each}
</div>

<style>
	div.deck.slider {
		position: relative;
		width: 100%;
		aspect-ratio: 5 / 3;
	}
	
	div.fc {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}

	div.fc.current {
		position: absolute;
		opacity: 1;
		left: 0;
	}

	div.fc.previous.slide-previous {
		animation-name: slide-out;
		animation-duration: 0.8s;
		animation-timing-function: ease-in-out;
		animation-direction: reverse;
	}
	
	div.fc.previous.slide-next {
		animation-name: slide-out;
		animation-duration: 0.8s;
		animation-timing-function: ease-in-out;
	}
	
	div.fc.previous {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 100%;
		transform: translateX(16px); 
		z-index: 10;
	}
	
	@keyframes slide-out {
		0% {
			opacity: 1;
			left: 0%;
			transform: translateX(0px);
		}
		50% {
			opacity: 1;
			left: 100%;
			transform: translateX(16px);
		}
		100% {
			opacity: 0;
			left: 100%;
			transform: translateX(16px);
		}
	}
	
	p.tabulation {
		color: var(--grey);
		opacity: 0.9;
		font-size: 12px;
		font-weight: 600;
		border-radius: 4px;
		background-color: var(--yellow);
		padding: 2px;
		padding-left: 4px;
		padding-right: 4px;
	}
</style>
