<script>
import { totalPoints, totalErrors, name } from '../stores/store';
</script>

<h1 class="text-center">La casa degli animali</h1>
<h2 class="text-center">Working memory visuospaziale</h2>
<h3 class="text-center">Complimenti {$name}!</h3> 
<h4 class="text-center green">{$totalPoints} PUNTI</h4>
<h4 class="text-center red">{$totalErrors} ERRORI</h4>


<style>
    .green{
        background-color: green;
        color: white;
        border-radius: 5px;
        width: fit-content;
        margin: 10px auto auto auto;
        padding: 0px 5px 2px 5px;
    }

    .red{
        background-color: red;
        color: white;
        border-radius: 5px;  
        width: fit-content;
        margin: 10px auto auto auto;
        padding: 0px 5px 2px 5px;
    }
</style>