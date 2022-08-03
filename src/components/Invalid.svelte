
<script>
	import { activePage, name } from "../stores/store";
</script>

<h1 class="text-center">La casa degli animali</h1>
<h2 class="text-center">Working memory visuospaziale</h2>
<div class="d-flex flex-column justify-content-center align-items-center mt-5">
	<p class="text-center">{$name}, non hai eseguito il tutorial correttamente.</p>
	<button class="text-center mt-5" on:click={() => {$activePage = 'tutorial'}}>Ripeti il tutorial</button>
</div>



<style>
	p{
		font-size: 25px;
		margin: auto;
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