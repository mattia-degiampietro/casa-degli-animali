<script>
    import { onMount } from "svelte";

    import CreateObject from "./CreateObject.svelte";
    import Table from "./Table.svelte";
    import { activeObj } from '../stores/store.js';
    import { objArrayF } from '../stores/store.js';
        
    onMount(() => {
        $activeObj = $objArrayF[i];
    })

    let objArrayCreation;

    let nTries = 3;

    let objArray = [{}, {}, {}];

    let i = 0;

    let tutorial = false;

    $: $activeObj = $objArrayF[i];
    
</script>            


<CreateObject bind:tutorial />

<Table bind:i/>

<style>

</style>
