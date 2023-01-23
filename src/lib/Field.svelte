<script>
	export let value = "";
	export let password = false;
	export let label = "";
	export let red = false;
</script>

{#if password}
	<input bind:value={value} class:password={password} type="password" />
{:else}
	<input bind:value={value} class:password={password} type="text" />
{/if}
<p class:red={red}>{label}</p>

<style>
	input {
		border: none;
		outline: none;
		background-color: transparent;
		color: var(--white);
		border-bottom: 2px solid var(--white);
		font-family: 'Open Sans', sans-serif;
		width: 100%;
		font-size: 1em;
		padding-bottom: 4px;
	}
	
	input.password {
		font-size: .9em;
		padding-bottom: calc(4px + .05em);
	}
	
	input:focus, input:active {
		border: none;
		outline: none;
		border-bottom: 2px solid var(--green);
	}
	
	p {
		margin: 0px;
		font-size: 0.9em;
		font-weight: 600;
	}
	
	p.red {
		color: var(--red);
	}
</style>
