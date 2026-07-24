<script lang="ts">
    import FloralClockImg from "$lib/assets/clock.png";

    let days = 36;
    let hours = 39;
    let minutes = 11;
    let seconds = 54;
</script>


<div class="w-full bg-white text-center pt-16 pb-4 px-4 font-serif overflow-hidden">
    <h2 class="text-2xl sm:text-3xl ">
        Counting Down to<br />Our Special Day
    </h2>

    <p class="h5 mt-3 mb-8 max-w-xs mx-auto">
        Every moment brings us one step closer to celebrating together
    </p>

    <div class="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6 relative z-10">
        <div class="flex flex-col items-center">
            <span class="h4">{days}</span>
            <span class="subtitle">Days</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="h4">{hours}</span>
            <span class="subtitle">Hours</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="h4">{minutes}</span>
            <span class="subtitle">Minutes</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="h4">{seconds}</span>
            <span class="subtitle">Seconds</span>
        </div>
    </div>
</div>


<div class="w-full -mt-12 sm:-mt-16 relative z-0">
        <img 
            src={FloralClockImg} 
            alt="Floral Clock Arrangement" 
            class="w-full h-auto object-contain block mx-auto" 
        />
</div>