<script lang="ts" context="module">
	export enum Size {
		Small = "small",
		Medium = "medium",
		Large = "large",
	}
</script>

<script lang="ts">
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();
	function click() {
		dispatch('click');
	}

	export let label: String = "";
	export let bg: String = "var(--blue)";
	export let fg: String = "var(--white)";
	export let hoverBg: String = bg;
	export let hoverFg: String = fg;
	export let size: Size = Size.Medium;

	let buttonStyle = `
		--bg: ${bg};
		--fg: ${fg};
		--hBg: ${hoverBg};
		--hFg: ${hoverFg};
	`;
	
</script>

<button 
	on:click={click}
	style={buttonStyle}
	class:small={size == "small"}
	class:large={size == "large"}>
	{#if label == ""}
		<slot />
	{:else}
		{label}
	{/if}
</button>

<style>
	button {
		border: none;
		background-color: var(--bg);
		color: var(--fg);
		font-family: 'Kanit', sans-serif;
		padding-top: 4px;
		padding-bottom: 4px;
		border-radius: 4px;
		box-shadow: none;
		transition: all 0.3s ease-in-out;
	}
	
	button.small {
		padding-top: 2px;
		padding-bottom: 2px;
	}
	
	button.large {
		padding-top: 6px;
		padding-bottom: 6px;
		padding-right: 6px;
		padding-left: 6px;
	}
	
	button:hover {
		color: var(--hFg);
		background-color: var(--hBg);
		box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.4);
	}
	
	button:active {
		box-shadow: 0px 0px 41px -13px rgba(0,0,0,0.4) inset;
		transition: all 0.3s ease-in-out;
	}
</style>
