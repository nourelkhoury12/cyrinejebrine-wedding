<script lang="ts">
    import BgImage from "$lib/assets/backgd.png";
    import CountDown from "$lib/compoments/CountDown.svelte";
	import Header from "$lib/compoments/Header.svelte"
</script>


<div class="min-h-screen bg-neutral-100 p-0 md:py-10 md:px-6 flex flex-col items-center">
    
    <div class="w-full max-w-md bg-white shadow-2xl rounded-none md:rounded-lg overflow-hidden">
        
       <Header/>


            
        <CountDown/>
      

    </div>

</div>