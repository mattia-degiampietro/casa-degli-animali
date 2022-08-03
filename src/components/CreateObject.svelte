<script>
    import { objArrayF, tries } from '../stores/store.js';

    import { onMount } from 'svelte';

    onMount(() => {  
        $objArrayF = objArrayCreation();
        console.log($objArrayF);
    });
    
    export let tutorial = false;
    
    //DICHIARAZIONE VARIABILI

    //varabili importate

    //numero di tentativi
    let nTries;

    //numero di animali in totale (compresi quelli che avanzeranno) (in totale sono nTrueAnimals + (nTrueAnimals)/2)
    let nAnimals;

    //numero di anmali corretti (in totale sono (nCol^2)/2)
    let nTrueAnimals;
    
    //corrisponde a nCol^2
    let pow;

    //inizializzazione di obj, opt e arr
    let obj = { table: [], size: 0, nC: 0, nA: 0, nTa: 0, nP: 0, nTries: 0, tutorial: false, dragg: []};
    //matrice della dimensione di obj ma contiene valori crescenti
    let opt = [];
    //array che contiene valori crescenti
    let arr = []; 

    //array di oggetti che contengono gli animali e le loro foto
    let animals = [{animal: 'a', bg: './dog.png'}, {animal: 'b', bg: ''}, {animal: 'c', bg: ''}];

    let objArray = [];

    nTries = $tries

    //creazione oggetto

    function objCreation(nCol) {

        pow = Math.pow(nCol, 2);

        obj = { table: [], size: '', nC: 0, nA: 0, nTa: 0, nP: 0, nTries: 0, tutorial: false, dragg: []};

        obj.nC = nCol;

        obj.nTries = nTries;

        nTrueAnimals = Math.floor((pow)/2);
        
        obj.nTa = nTrueAnimals;

        nAnimals = nTrueAnimals + Math.floor(nTrueAnimals/2);

        obj.nA = nAnimals;

        obj.nP = pow;

        obj.tutorial = tutorial;

        //Riempimento di arr[]
        for(let i = 0; i < pow; i++){
            arr[i] = i+1;
        }

        //riempimento di obj[][] e di opt[][]
        for(let y = 0, temp = 0; y < nCol; y++){
            obj.table[y] = [];
            opt[y] = [];
            for(let x = 0; x < nCol; x++){
                obj.table[y][x] = {
                    bg: '',
                    animal: ''
                };
                temp++;
                opt[y][x] = temp;
            }
        }

        //riempimento di obj[][] con gli animali e modifica di arr[]
        for(let i = 0, temp = 0, w = 0; i < nTrueAnimals; i++){
            w = Math.floor(Math.random()*arr.length);
            temp = arr[w];
            // console.log(temp);
            for(let y = 0; y < nCol; y++){
                for(let x = 0; x < nCol; x++){
                    if(opt[y][x] === temp){
                        obj.table[y][x] = animals[Math.floor(Math.random()*animals.length)];
                        arr.splice(w, 1);
                    }
                }
            }

        }

        for(let y = 0; y < nCol; y++){
            for(let x = 0; x < nCol; x++){
                if(obj.table[y][x].animal != ''){
                    obj.dragg.push(obj.table[y][x]);
                }
            }
        }

        for(let i = 0; i < (nAnimals - nTrueAnimals); i++){
            obj.dragg.push(animals[Math.floor(Math.random()*animals.length)]);
        }

        obj.dragg = obj.dragg.sort(function(a, b) {
            if (a.animal < b.animal) return -1;
            if (a.animal > b.animal) return 1;
            return 0;
        });

        return obj;
    }

    function  objArrayCreation() {
        objArray = [];

        if(!tutorial){
            for(let i = 0, k = 2; i < 4; i++){
                for(let j = 0; j < nTries; j++){
                    objArray.push(objCreation(k));
                }
                k++;
            }  
        }else{
            objArray.push(objCreation(2))
        }
        
        

        return objArray;
    }


</script>

<style>

</style>