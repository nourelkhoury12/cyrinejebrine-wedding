<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import envelopeImg from '$lib/assets/card.png';

	let { onOpen }: {
			onOpen: () => void;
	} = $props();

	let show = $state(false);

	onMount(() => {
			show = true;
	});
</script>

<style>
	
</style>

<div class="page">
	{#if show}
		<div class="invitation-text" in:fade={{ duration: 1000 }}>
			<div class="beginning" in:fly={{ y: -30, duration: 1000 }}>
				The Beginning of bForever
			</div>

			<div class="invited" in:fade={{ duration: 900, delay: 500 }}>
				You Are Invited
			</div>
		</div>

		<img src={envelopeImg} alt="Envelope"  class="envelope" in:fly={{ y: 50, duration: 1200, delay: 900 }}/>

		<button class="open-btn" in:fade={{ duration: 1000, delay: 1600 }} onclick={onOpen}>Tap To Open</button>
	{/if}
</div>