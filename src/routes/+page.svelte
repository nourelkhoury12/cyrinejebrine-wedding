<script lang="ts">
    import { onMount, onDestroy } from "svelte";

    import Header from "$lib/components/Header.svelte";
    import CountDown from "$lib/components/CountDown.svelte";
    import Venue from "$lib/components/Venue.svelte";
    import MarriageList from "$lib/components/MarriageList.svelte";
    import RSVP from "$lib/components/RSVP.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import InvitationImage from "$lib/assets/cart.png";

    let music: HTMLAudioElement | null = null;

    let isMuted = $state(false);
    let hasStarted = $state(false);
    let showSplash = $state(true);
    let isOpening = $state(false);

    async function enterSite() {
        if (isOpening) return;

        isOpening = true;

        if (music && !hasStarted) {
            try {
                await music.play();
                hasStarted = true;
                isMuted = false;
            } catch (err) {
                console.log("Play failed", err);
            }
        }

        await new Promise((resolve) => setTimeout(resolve, 1200));

        showSplash = false;
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
    class:is-opening={isOpening}
    class="splash"
    aria-label="Open invitation"
>
    <img
        src={InvitationImage}
        alt="Wedding Invitation"
    />

    <div class="light"></div>
</button>
{/if}

<div class="min-h-screen bg-neutral-100 p-0 md:px-6 md:py-10 flex justify-center">
    <div class="w-full max-w-md overflow-hidden bg-white shadow-2xl md:rounded-lg">
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

<style>
.splash {
    position: fixed;
    inset: 0;
    z-index: 100;
    overflow: hidden;
    border: none;
    padding: 0;
    background: white;
    cursor: pointer;
}

.splash img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition:
        transform 1.2s ease,
        opacity 1.2s ease,
        filter 1.2s ease;
}

.light {
    position: absolute;
    inset: 0;
    pointer-events: none;

    background:
        radial-gradient(
            circle,
            rgba(255,255,255,0) 10%,
            rgba(255,255,255,.2) 45%,
            rgba(255,255,255,.95) 100%
        );

    opacity: 0;
}

.splash.is-opening img {
    transform: scale(1.05);
    opacity: 0;
    filter: brightness(1.5);
}

.splash.is-opening .light {
    animation: glow 1.2s ease forwards;
}

@keyframes glow {

    0% {
        opacity: 0;
        transform: scale(.8);
    }

    40% {
        opacity: .35;
    }

    70% {
        opacity: .75;
    }

    100% {
        opacity: 1;
        transform: scale(1.4);
    }

}
</style>