<script lang="ts">
	import Loader from "$lib/components/Loader.svelte";
	import Header from "$lib/components/Header.svelte";
	import CountDown from "$lib/components/CountDown.svelte";
	import Venue from "$lib/components/Venue.svelte";
	import RSVP from "$lib/components/RSVP.svelte";
	import MarriageList from "$lib/components/MarriageList.svelte";

	let opened = $state(false);
</script>

{#if !opened}
	<Loader onOpen={() => (opened = true)} />
{:else}
	<Header />
	<CountDown />
	<Venue />
	<RSVP />
	<MarriageList />
{/if}