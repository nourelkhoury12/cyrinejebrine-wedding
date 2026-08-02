<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import CountDown from "$lib/components/CountDown.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import MarriageList from "$lib/components/MarriageList.svelte";
    import RSVP from "$lib/components/RSVP.svelte";
    import Venue from "$lib/components/Venue.svelte";

    let music: HTMLAudioElement | null = null;
    let isMuted = $state(false);
    let hasStarted = $state(false);
    let showSplash = $state(true);

    function enterSite() {
        showSplash = false;
        if (music && !hasStarted) {
            music.play().catch(() => console.log("Play failed"));
            hasStarted = true;
            isMuted = false;
        }
    }

    function toggleMute() {
        if (!music) return;
        music.muted = !music.muted;
        isMuted = music.muted;
    }

    onMount(() => {
        history.scrollRestoration = "manual";
        window.scrollTo(0, 0);

        music = new Audio("/wedding.mp3");
        music.loop = true;
        music.volume = 0.4;
    });

    onDestroy(() => {
        if (music) {
            music.pause();
            music.src = "";
        }
    });
</script>

{#if showSplash}
    <button
        onclick={enterSite}
        class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-neutral-100 gap-4 w-full"
    >
        <span class="text-lg tracking-wide text-neutral-700">Tap to open invitation</span>
        <!-- put your monogram/crest or a nice icon here -->
    </button>
{/if}

<div class="min-h-screen bg-neutral-100 p-0 md:py-10 md:px-6 flex flex-col items-center">
    <div class="w-full max-w-md bg-white shadow-2xl rounded-none md:rounded-lg overflow-hidden">
        <Header />
        <CountDown />
        <Venue />
        <MarriageList />
        <RSVP />
        <Footer />
    </div>
</div>

<button
    onclick={toggleMute}
    style="width: 56px; height: 56px; min-width: 56px; min-height: 56px;"
    class="fixed bottom-5 right-5 z-50 rounded-full bg-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 flex items-center justify-center border border-neutral-200"
    aria-label={isMuted ? "Unmute music" : "Mute music"}
>
    {#if isMuted}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-neutral-700 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
    {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-neutral-700 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 5 6 9H2v6h4l5 4V5Z" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    {/if}
</button>