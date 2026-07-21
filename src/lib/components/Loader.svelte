<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import envelopeImg from '$lib/assets/card.png';

	let show = $state(false);

	onMount(() => {
		show = true;
	});
</script>

<style>
	.page {
		width: 100%;
		min-height: 100vh;
		background: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
		overflow: hidden;
	}

	.invitation-text {
		margin-bottom: 2.5rem;
	}

	.beginning {
		font-family: "Cinzel", serif;
		font-size: clamp(2rem, 5vw, 3rem);
		font-weight: 500;
		color: #333;
		letter-spacing: 1px;
	}

	.forever {
		font-style: italic;
	}

	.invited {
		margin-top: 0.8rem;
		font-family: "Montserrat", sans-serif;
		font-size: 0.95rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 6px;
		color: #888;
	}

	.envelope {
		width: min(80%, 320px);
		cursor: pointer;
		filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.08));
	}

	.open-btn {
		margin-top: 2rem;
		padding: 12px 35px;
		border: 1px solid #b58b7a;
		background: transparent;
		color: #8b6455;
		font-family: "Montserrat", sans-serif;
		font-size: 0.85rem;
		letter-spacing: 3px;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.open-btn:hover {
		background: #b58b7a;
		color: white;
		transform: translateY(-2px);
	}
</style>


<div class="page">

	{#if show}

		<div
			class="invitation-text"
			in:fade={{ duration: 1000 }}
		>
			<div
				class="beginning"
				in:fly={{ y: -30, duration: 1000 }}
			>
				The Beginning of <span class="forever">Forever</span>
			</div>

			<div
				class="invited"
				in:fade={{ duration: 900, delay: 500 }}
			>
				You Are Invited
			</div>
		</div>


		<img
			src={envelopeImg}
			alt="Envelope"
			class="envelope"
			in:fly={{ y: 50, duration: 1200, delay: 900 }}
		/>


		<button
			class="open-btn"
			in:fade={{ duration: 1000, delay: 1600 }}
		>
			Tap To Open
		</button>

	{/if}

</div>