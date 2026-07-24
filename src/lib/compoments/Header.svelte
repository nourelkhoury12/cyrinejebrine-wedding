 <script lang="ts">
     import BgImage from "$lib/assets/backgd.png";
 </script>
 
 <div class="relative w-full h-screen md:h-auto md:aspect-[3/4] overflow-hidden text-white text-center font-serif">
              
    <img src={BgImage} alt="Background" class="w-full h-full object-cover block" />

    <div class="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-black/10">   
        <!-- Top Bar: Language Switcher -->
        <div class="flex justify-end">
            <div class="flex items-center gap-1 bg-white/90 backdrop-blur-sm p-1 rounded-full shadow-sm text-xs font-sans font-semibold">
                <span class="bg-[#c28888] text-white px-3 py-1 rounded-full cursor-pointer">
                    En
                </span>
                <span class="text-[#c28888] px-3 py-1 rounded-full cursor-pointer">
                    Ar
                </span>
            </div>
        </div>

        <!-- Central Content -->
        <div class="flex flex-col items-center justify-center my-auto space-y-6">  
            <!-- Top Quote -->
            <p class="text-[10px] sm:text-xs tracking-widest leading-relaxed uppercase opacity-95 max-w-xs drop-shadow-sm font-semibold">
                “Three things will last forever - faith, hope, and love, and the greatest of these is love”
            </p>

            <!-- Names & Ampersand -->
            <div class="space-y-1">
                <h1 class="text-3xl sm:text-4xl tracking-[0.25em] font-normal uppercase drop-shadow">
                    Jebrine
                </h1>
                <div class="text-2xl sm:text-3xl italic font-serif opacity-90 my-1">
                    &amp;
                </div>
                <h1 class="text-3xl sm:text-4xl tracking-[0.25em] font-normal uppercase drop-shadow">
                    Cyrine
                </h1>
            </div>

            <!-- Date Info -->
            <div class="w-full max-w-xs pt-4">
                <p class="text-xs sm:text-sm tracking-wider capitalize font-sans opacity-90 mb-1">
                    This will happen
                </p>
                <h2 class="text-lg sm:text-xl tracking-[0.2em] font-medium uppercase border-b border-white/50 pb-2 mb-3">
                    Sunday
                </h2>
                            
                <div class="text-2xl sm:text-3xl tracking-[0.3em] font-normal">
                    13 &nbsp; 9 &nbsp; 2026
                </div>
            </div>
        </div>
    </div>
</div>