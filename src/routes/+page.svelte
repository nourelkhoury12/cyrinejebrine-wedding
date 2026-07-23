<script lang="ts">
	import env1 from "$lib/assets/env1.png";
	import env2 from "$lib/assets/env2.png";

	let isOpen = $state(false);

	function openEnvelope() {
		if (isOpen) return;

		isOpen = true;
	}
</script>

<div class:open={isOpen} class="envelope-screen">
	<div class="envelope-wrapper">
		<img
			src={env1}
			alt="Envelope"
			class="env1"
		/>

		<img
			src={env2}
			alt="Envelope seal"
			class="env2"
			onclick={openEnvelope}
		/>
	</div>
</div>

<style>
	/* =========================
	   FULL SCREEN
	========================= */

	.envelope-screen {
		position: fixed;
		inset: 0;

		width: 100%;
		height: 100dvh;

		display: flex;
		justify-content: center;
		align-items: center;

		overflow: hidden;
		background: white;

		z-index: 1000;
	}


	/* =========================
	   ENVELOPE
	========================= */

	.envelope-wrapper {
		position: relative;

		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		overflow: hidden;
	}


	/* =========================
	   ENVELOPE IMAGES
	========================= */

	.env1,
	.env2 {
		position: absolute;

		width: 100%;
		height: 100%;

		object-fit: contain;
		object-position: center;

		transition:
			transform 1.5s cubic-bezier(0.77, 0, 0.175, 1);

		will-change: transform;
	}


	/* =========================
	   CLOSED
	========================= */

	.env1 {
		transform: translateX(0);
		z-index: 1;
	}

	.env2 {
		transform: translateX(0);
		z-index: 2;

		cursor: pointer;

		/* Makes the click easier on mobile */
		touch-action: manipulation;
	}


	/* =========================
	   OPEN
	========================= */

	.envelope-screen.open .env1 {
		transform: translateX(-100%);
	}

	.envelope-screen.open .env2 {
		transform: translateX(100%);
	}


	/* =========================
	   MOBILE
	========================= */

	@media (max-width: 600px) {
		.env1,
		.env2 {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}


	/* =========================
	   TABLET
	========================= */

	@media (min-width: 601px) and (max-width: 1024px) {
		.env1,
		.env2 {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
</style>