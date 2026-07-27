<script lang="ts">
    import { onMount } from "svelte";

    import CountDown from "$lib/components/CountDown.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import MarriageList from "$lib/components/MarriageList.svelte";
    import RSVP from "$lib/components/RSVP.svelte";
    import Venue from "$lib/components/Venue.svelte";

    onMount(() => {
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        window.scrollTo(0, 0);
    });
</script>

<div class="min-h-screen bg-neutral-100 p-0 md:py-10 md:px-6 flex flex-col items-center">
    <div class="w-full max-w-md bg-white shadow-2xl rounded-none md:rounded-lg overflow-hidden">
        <!-- <Header /> -->
        <CountDown />
        <Venue />
        <MarriageList />
        <RSVP />
        <Footer />
    </div>
</div>