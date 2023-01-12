<script>
	import Flashcard from "$lib/Flashcard.svelte";
	import Carousel from "svelte-carousel";
	
	export let cards = [
		{term: "Term", definition: "Definition"},
//		{term: "Term", definition: "Definition"},
//		{term: "Term", definition: "Definition"},
//		{term: "Term", definition: "Definition"},
	];
	
	let index = 0;
</script>
{#each cards as card, index}
	<Flashcard 
		term={card.term} 
		definition={card.definition} 
	/>
{/each}
