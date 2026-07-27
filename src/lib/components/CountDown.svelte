<script lang="ts">
    import FloralClockImg from "$lib/assets/clock.png";
    import { onMount } from "svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";
    import { language } from "$lib/stores/languages";
    import { translations } from "$lib/i18n/translations";

    const weddingDate: Date = new Date("2026-09-13T20:00:00+03:00");

    let days = $state("00");
    let hours = $state("00");
    let minutes = $state("00");
    let seconds = $state("00");

    function format(value: number): string {
        return value.toString().padStart(2, "0");
    }

    function updateCountdown(): void {
        const now = Date.now();
        const distance = weddingDate.getTime() - now;

        if (distance <= 0) {
            days = "00";
            hours = "00";
            minutes = "00";
            seconds = "00";
            return;
        }

        days = format(Math.floor(distance / (1000 * 60 * 60 * 24)));
        hours = format(Math.floor((distance / (1000 * 60 * 60)) % 24));
        minutes = format(Math.floor((distance / (1000 * 60)) % 60));
        seconds = format(Math.floor((distance / 1000) % 60));
    }

    onMount(() => {
        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    });
</script>

<div class="w-full bg-white text-center pt-16 pb-4 px-4 overflow-hidden">
    <FadeIn>
        <h2 class="text-2xl sm:text-3xl ">
            {translations[$language].count}<br />{translations[$language].day}
        </h2>
    </FadeIn>

    <FadeIn>
        <p class="h5 mt-3 mb-8 max-w-xs mx-auto">
            {translations[$language].celebration}
        </p>
    </FadeIn>

    <FadeIn>
        <div class="grid grid-cols-4 gap-2 max-w-xs mx-auto mb-6 relative z-10">
            <div class="flex flex-col items-center">
                <span class="h4">{days}</span>
                <span class="subtitle">{translations[$language].days}</span>
            </div>

            <div class="flex flex-col items-center">
                <span class="h4">{hours}</span>
                <span class="subtitle">{translations[$language].hours}</span>
            </div>

            <div class="flex flex-col items-center">
                <span class="h4">{minutes}</span>
                <span class="subtitle">{translations[$language].minutes}</span>
            </div>

            <div class="flex flex-col items-center">
                <span class="h4">{seconds}</span>
                <span class="subtitle">{translations[$language].seconds}</span>
            </div>
        </div>
    </FadeIn>
</div>

<FadeIn>
    <div class="w-full -mt-12 sm:-mt-16 relative z-0">
        <img src={FloralClockImg}  alt="Floral Clock Arrangement" class="w-full h-auto object-contain block mx-auto" />
    </div>
</FadeIn>