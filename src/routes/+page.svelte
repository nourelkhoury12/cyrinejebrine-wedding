<script lang="ts">
	import env1 from "$lib/assets/env1.png";
	import env2 from "$lib/assets/env2.png";

	let isOpen = $state(false);

	function openEnvelope() {
		isOpen = true;
	}
</script>

<div class:open={isOpen} class="envelope-screen">
	<img
		src={env1}
		alt="Envelope left"
		class="env1"
	/>

	<img
		src={env2}
		alt="Envelope right"
		class="env2"
		onclick={openEnvelope}
	/>
</div>

<style>
	.envelope-screen {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;

		overflow: hidden;
		background: white;
		z-index: 1000;
	}

	.env1,
	.env2 {
		position: absolute;
		width: 100vw;
		height: 100vh;
		object-fit: cover;

		transition: transform 1.5s ease-in-out;
	}

	/* CLOSED POSITION */
	.env1 {
		transform: translateX(0);
		z-index: 1;
	}

	.env2 {
		transform: translateX(0);
		z-index: 2;
		cursor: pointer;
	}

	/* OPEN ANIMATION */
	.envelope-screen.open .env1 {
		transform: translateX(-100%);
	}

	.envelope-screen.open .env2 {
		transform: translateX(100%);
	}
</style>