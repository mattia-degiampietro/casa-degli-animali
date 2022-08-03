<script>
	import Result from "./components/Result.svelte";
	import Start from "./components/Start.svelte";
	import Test from "./components/Test.svelte";
	import TestStart from "./components/TestStart.svelte";
	import Tutorial from "./components/Tutorial.svelte";
	import Invalid from "./components/Invalid.svelte";
	
	import { activePage } from "./stores/store";

	
</script>

<main>

	{#if $activePage === 'start'}
		<Start />
	{:else if $activePage === 'test'}
		<Test />
	{:else if $activePage === 'tutorial'}
		<Tutorial />
	{:else if $activePage === 'result'}
		<Result />
	{:else if $activePage === 'testStart'}
		<TestStart />
	{:else if $activePage === 'invalid'}
		<Invalid />
	{/if}
</main>

<style>

</style>