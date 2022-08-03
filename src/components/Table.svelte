<script>

    import { onMount } from "svelte";

    import { activeObj, totalPoints, totalErrors, activePage } from '../stores/store.js';

    onMount(() => {
        obj = $activeObj;

        setTimeout(() => {
            displayTimes();
        }, 0);
        

    });



    $: obj = $activeObj;

    export let i;

    export let tutorial = false;

    let root1;
    
    let root2;

    let empty;

    let fill;

    let index = 0;

    let displayBg = false;

    let correctCounter = 0;

    let errorCounter = 0;

    let size = 0;

    let box;

    let t0 = 0;

    let t1 = 600;

    let t2 = 2000;

    let t3 = 500;

    let points = 0;

    let errors = 0;

    let fillX = 0;

    let fillY = 0;

    let h = 0;

    let w = 0;

    function querySelection(){
        setTimeout(() => {
            console.log('qeryselection');
            empty = root1.querySelectorAll('.empty');
            
            fill = root2.querySelectorAll('.fill');
            console.log(empty);
        }, 0);
        root1 = root1;
        root2 = root2;
    }

    setTimeout(() => {
        console.log('qeryselection');
        empty = root1.querySelectorAll('.empty');
        
        fill = root2.querySelectorAll('.fill');
        console.log(empty);
    }, 0);
    root1 = root1;
    root2 = root2;


    function dragStart(){
        console.log('start');
        this.className += ' hold';
        setTimeout(() => this.className += ' d-none', 0);
        index = this.dataset.id;

    }

    function dragEnd(){
        console.log('end');
        this.classList.remove('hold', 'd-none') ;
    }



    function dragOver(){
    }

    function dragEnter(){
        console.log('enter');
        this.className += ' hovered';
    }

    function dragLeave(){
        console.log('leave');
        this.classList.remove('hovered');
    }

    function dragDrop(){
        console.log('drop');
        this.classList.remove('hovered');
        console.log(fill[index]);
        if(this.dataset.animal === fill[index].dataset.animal){
            fill[index].className += ' display-fill';
            this.children[0].classList.remove('display-imm');
            correctCounter++;
            this.classList.add('pe');
            console.log('addpe');
            this.style.border = "3px solid green";
            setTimeout(() => {this.style.border = "1px solid black"}, 600);
        }else{
            errors++;
            this.style.border = "3px solid red";
            setTimeout(() => {this.style.border = "1px solid black"}, 600);
        }
    }

    function touchStart(ev){
        this.classList.add("display-imm")
        console.log('touch start');
        console.log(ev.touches);
        index = this.dataset.id;
        this.parentElement.style.position = 'absolute';                                 //aggiungere un set time out per non visualli zzare per un istante il fill in touch 
        setTimeout(() => {this.classList.remove("display-imm")
            
        }, 30);
    }

    function touchMove(ev){
        fillX = ev.touches[0].clientX;
        fillY = ev.touches[0].clientY;

        this.parentElement.style.left = (fillX -(size/2)) + 'px';
        this.parentElement.style.top = (fillY - (size)) + 'px';

        console.log(this.parentElement );
    }

    function touchEnd(){

        let w = 0;
        this.parentElement.style.position = 'static';
        this.parentElement.style.left = '0 px';
        this.parentElement.style.top = '0 px';
        empty.forEach(empty => {
            if(detectTouchEnd(fillX, fillY, empty.parentElement.offsetLeft, empty.parentElement.offsetTop, empty.parentElement.clientWidth, empty.parentElement.clientHeight)){
                console.log('drop touch');
                empty.parentElement.classList.remove('hovered');
                console.log(fill[index]);
                if(empty.parentElement.dataset.animal === fill[index].dataset.animal){
                    fill[index].className += ' display-fill';
                    empty.parentElement.children[0].classList.remove('display-imm');

                    empty.parentElement.style.border = "3px solid green";
                    setTimeout(() => {empty.parentElement.style.border = "1px solid black"}, 600);

                    correctCounter++;
                    empty.parentElement.classList.add('pe');
                    console.log('addpe');
                }else{
                    errors++;
                    empty.parentElement.style.border = "3px solid red";
                    setTimeout(() => {empty.parentElement.style.border = "1px solid black"}, 600);
                }
            }
            console.log('touch end');
            w++
        });
        
    }

    function detectTouchEnd(x0, y0, x1, y1, w, h) {
        let rtn = true;

        let x2 = x1 + w;
        let y2 = y1 + h;

        console.log(x0, x1);
        console.log(y0, y1);
        console.log(x0, x2);
        console.log(y0, y2);

    	if (x0 < x1 || y0 < y1 || x0 > x2 || y0 > y2){ 
            rtn = false;
        }

    	return rtn;
    }

    function reset(cc){
        if(cc === obj.nTa){

            points++;

            console.log(tutorial);
            
            setTimeout(() => {
                index = 0;

                displayBg = true;

                correctCounter = 0;

                errorCounter = 0;

                console.log('aaa');

                i++;

                querySelection();

                for(let k = 0; k < obj.dragg.length; k++){
                    fill[k].classList.remove('display-fill');
                }
                
                displayTimes();

                console.log(empty);

                setTimeout(() => {
                    empty.forEach(empty => {
                        empty.parentElement.classList.remove('pe');
                        console.log('removePe');
                    })

                    console.log(empty);
                }, 500);

                
            }, 500);

            
        }
    }
    
    function displayTimes(){

        setTimeout(() => {
            for(let w = 0; w < (obj.nC*obj.nC); w++){
                empty[w].dataset.visible = false;
                empty[w].className += ' display-imm';
            }
            for(let w = 0; w < obj.dragg.length; w++){
                fill[w].dataset.visible = false;
                fill[w].className += ' display-imm';
            }
        }, t0);

        setTimeout(() => {
            for(let w = 0; w < (obj.nC*obj.nC); w++){
                empty[w].dataset.visible = true;
                empty[w].classList.remove('display-imm');
            }
        }, (t1 + t0));

        setTimeout(() => {
            for(let w = 0; w < (obj.nC*obj.nC); w++){
                empty[w].dataset.visible = false;
                empty[w].className += ' display-imm';
            }
        }, (t2 + t1 + t0));

        setTimeout(() => {
            for(let w = 0; w < obj.dragg.length; w++){
                fill[w].dataset.visible = true;
                fill[w].classList.remove('display-imm');
            }
        }, (t3 + t2 + t1 + t0));

    }

    function end(){
        $totalPoints = points;

        $totalErrors = errors;

        console.log("Endgame");

        clearInterval(interval);

    }

    $: reset(correctCounter);

    $: if(errors === 5 && !obj.tutorial){
        end();        
        $activePage = 'result';
    }

    $: if(points === 1 && obj.tutorial){
        console.log('fffine');
        if(errors === 0){
            $activePage = 'testStart';
        }else{
            $activePage = 'invalid';
        }
        end();
    }
    
    function onTrue(c){
        c.parentElement.parentElement.style.border = "1px solid green";
        console.log("on true");
    }

    function setSize(size){
        fill.forEach(fill => {
            fill.style.width = size + 'px';
        })
    }

    let interval = setInterval(() => {
        size = Math.round(box.getBoundingClientRect().width - 40);
        console.log(size);
    }, 400);

    $: size = size;

</script>
<div class="position-fixed top-0 end-0 bg-primary d-none d-md-block">
    punti: {points} <br>
    vite: {5 - errors}
</div>

<div class="top-0 start-0 w-100 bg-primary d-sm-block d-md-none text-center mb-3">
    punti: {points} vite: {5 - errors}
</div>

<div class="row">
    <div class="col-sm-6 col-md-5 col-lg-4 col-sm-10 m-auto" bind:this="{root1}">
        {#each obj.table as table, y}
            <div class="row container m-auto">
                {#each table as t}
                    <div class="col borders box {t.animal} " 
                    data-animal={t.animal}
                    data-id={y}
                    data-used='true'
                    on:dragover|preventDefault={dragOver} 
                    on:dragenter|preventDefault={dragEnter}
                    on:dragleave={dragLeave}
                    on:drop={dragDrop}>
                        <img src="" alt="" class="imm-table empty" bind:this={box} data-visible=true>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<!-- <h3>i: {i}, correctcounter: {correctCounter}, nTa: {obj.nTa}, size: { size }</h3> -->
<div class="row justify-content-center row-cols-auto" bind:this="{root2}">
    {#each obj.dragg as dragg, q}
        <div class=" justify-content-center pt-5" draggable='true' >
            <div class="fill m-auto {dragg.animal}"
            draggable='true'
            data-animal={dragg.animal}
            on:dragstart={dragStart} 
            on:touchstart={touchStart}
            on:dragend={dragEnd}
            on:touchend={touchEnd}
            on:touchmove={touchMove}
            data-id={q}>
                <img src="./img/dog.png" alt="" style="height: {size}px;">
            </div>
        </div>
    {/each}
</div>

<style>


    .borders{
        border: 1px solid black;
    }

    .box{
        position: relative;
        width: 100%;
        margin: 1px;
        padding: 0px;
    }
    
    .box:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .a img{
        content: url("../img/dog.png");
        width: 100%;
    }

    .b img{
        content: url("../img/fox.png");
        width: 100%;
    }

    .c img{
        content: url("../img/boar.png");
        width: 100%;
    }

    :global(.fill){
        cursor: pointer;
        height: auto;
        width: auto;
        display: block;
        background-size:     contain;
        background-repeat:   no-repeat;
        background-position: center center;
    }

    :global(.hold){
            border: 4px solid gray;
            cursor: move;
    }

    :global(.hovered){
        background: gray;
        border-style: dashed;
    }

    :global(.box){

        border: 1px solid black;
    }

    .display-bg{
        background-image: none !important;
    }

    .display-imm{
        visibility: hidden;
    }

    .display-fill{
        display: none;
    }

    .imm-table{
        position: absolute;
        width: 100%;
        padding: 20px;
    }

    .pe{
        pointer-events: none;
    }

</style>




<!-- <script>

    

    console.log(fill);

    let a = '';

    function dragStart(){
        console.log('start');
        this.className += ' hold';
        setTimeout(() => this.className += ' d-none', 0);
    }

    function dragEnd(){
        console.log('end');
        this.className = 'fill ';
    }

    function dragOver(){
    }

    function dragEnter(){
        console.log('enter');
        this.className += ' hovered';
    }

    function dragLeave(){
        console.log('leave');
        this.className = 'empty';
    }

    function dragDrop(){
        console.log('drop');
        this.className = 'empty';
        this.append(fill);
    }


</script>

<div 
class="empty borders"
on:dragover|preventDefault={dragOver}
on:dragenter|preventDefault={dragEnter}
on:dragleave={dragLeave}
on:drop={dragDrop}>

    <div class="fill" draggable="true" on:dragstart={dragStart} on:dragend={dragEnd} bind:this="{fill}"></div>  

</div>
<div 
class="empty borders"
on:dragover|preventDefault={dragOver}
on:dragenter|preventDefault={dragEnter}
on:dragleave={dragLeave}
on:drop={dragDrop}></div>
<div 
class="empty borders"
on:dragover|preventDefault={dragOver}
on:dragenter|preventDefault={dragEnter}
on:dragleave={dragLeave}
on:drop={dragDrop}></div>



<style>
    
    :global(.empty){
        height: 100px;
        width: 100px;
        border: 1px solid black;
    }

    :global(.fill){
        cursor: pointer;
        background-image: url("favicon.png");
        height: 80px;
        width: 80px;
        display: block;
    }

    

    :global(.hovered){
        background: gray;
        border-style: dashed;
    }
</style> -->