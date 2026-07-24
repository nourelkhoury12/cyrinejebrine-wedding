<script lang="ts">
    import FloralClockImg from "$lib/assets/clock.png";

    let days = 36;
    let hours = 39;
    let minutes = 11;
    let seconds = 54;
</script>

<!-- Countdown Section Container (Original spacing & centering restored) -->
<div class="w-full bg-white text-center pt-16 pb-4 px-4 font-serif overflow-hidden">
    
    <!-- Heading -->
    <h2 class="text-2xl sm:text-3xl text-[#964b54] tracking-wider uppercase font-normal leading-tight">
        Counting Down to<br />Our Special Day
    </h2>

    <!-- Subtitle (Original spacing) -->
    <p class="text-xs sm:text-sm text-[#b28287] mt-3 mb-8 max-w-xs mx-auto leading-relaxed">
        Every moment brings us one step closer to celebrating together
    </p>

    <!-- Countdown Timer Grid (Original spacing) -->
    <div class="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6 relative z-10">
        
        <div class="flex flex-col items-center">
            <span class="text-2xl sm:text-3xl font-normal text-[#964b54]">{days}</span>
            <span class="text-xs text-[#a09e9e] mt-1 font-sans font-light">Days</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="text-2xl sm:text-3xl font-normal text-[#964b54]">{hours}</span>
            <span class="text-xs text-[#a09e9e] mt-1 font-sans font-light">Hours</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="text-2xl sm:text-3xl font-normal text-[#964b54]">{minutes}</span>
            <span class="text-xs text-[#a09e9e] mt-1 font-sans font-light">Minutes</span>
        </div>

        <div class="flex flex-col items-center">
            <span class="text-2xl sm:text-3xl font-normal text-[#964b54]">{seconds}</span>
            <span class="text-xs text-[#a09e9e] mt-1 font-sans font-light">Seconds</span>
        </div>

    </div>

</div>

<!-- Bottom Floral Clock Illustration (ONLY the image space is collapsed) -->
<div class="w-full -mt-12 sm:-mt-16 relative z-0">
        <img 
            src={FloralClockImg} 
            alt="Floral Clock Arrangement" 
            class="w-full h-auto object-contain block mx-auto" 
        />
</div>