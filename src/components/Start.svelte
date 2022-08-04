<script>
	import { activePage, name } from "../stores/store";
</script>

<h1 class="text-center">La casa degli animali</h1>
<h2 class="text-center">Working memory visuospaziale</h2>
<div class="d-flex flex-column justify-content-center align-items-center mt-5">
	<label for="name" class="text-center">Inserisci il tuo nome</label>
	<input bind:value={$name} name="name" type="text" class="text-center" autocomplete="off">
	<button class="text-center mt-5" on:click={() => {$activePage = 'tutorial'}}>Inizia</button>
</div>



<style>
	input{
		width: 280px;
		margin: auto;
		border-radius: 10px;
	}

	button{
		width: 320px;
		margin: auto;
		height: 60px;
		background-color: green;
		font-size: 25px;
		border-radius: 10px;
		color: white;
	}
</style>