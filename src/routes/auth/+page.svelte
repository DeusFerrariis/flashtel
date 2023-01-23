<script lang="ts">
	import GrowTextarea from "$lib/GrowTextarea.svelte";
	import Field from "$lib/Field.svelte";
	import Button from "$lib/Button.svelte";
	import { validateUsername, validatePassword, signUp, signIn, username as userstore} from "$lib/user.ts";

	let username = "";
	let password = "";
	let confirmPassword = "";

	$: isPasswordConfirmed = (
		password.length == 0 || password == confirmPassword
	);
	$: errMsgs = [
		...validateUsername(username), 
		...validatePassword(password)
	];
	$: if ($userstore != "") {
		window.location.pathname = "/";
	}
</script>

<div class="content">
	<section class="sign-in-form">
		<h1>Sign In/Up</h1>
		<Field bind:value={username} label="Username" />
		<br />
		<Field bind:value={password} password label="Password" />
		<br />
		<Field bind:value={confirmPassword} password label="Confirm Password" />
		<br />
		{#each errMsgs as errMsg}
			<p>{errMsg}</p>
		{/each}
		{#if !isPasswordConfirmed}
			<p>Passwords do not match</p>
		{/if}
		<br />
		<div class="options">
			<Button
				size="large"
				label="Sign In"
				fg="var(--grey)"
				bg="var(--yellow)"
				on:click={errMsgs.length == 0 ? () => signIn(username, password) : undefined}
			/>
			<p class="or">OR</p>
			<Button
				size="large"
				label="Sign Up"
				fg="var(--grey)"
				bg="var(--green)"
				on:click={errMsgs.length == 0 ? () => signUp(username, password) : undefined}
			/>
		</div>
	</section>
</div>

<style>
	div.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	section.sign-in-form {
		width: 100%;
		max-width: 40ch;
		padding-top: 32px;
	}
	
	p {
		color: var(--red);
		margin: 0px;
		font-size: 0.9em;
	}
	
	div.options {
		width: auto;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	
	p.or {
		color: var(--white);
		font-size: 1em;
		font-weight: 600;
		margin-left: 16px;
		margin-right: 16px;
	}
</style>
