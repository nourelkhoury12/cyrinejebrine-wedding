<script lang="ts">
	import { goto } from '$app/navigation';
	import waxSeal from '$lib/assets/wax-seal.png';

	let isOpen = $state(false);

	function handleOpen() {
		if (isOpen) return;
		isOpen = true;

		// Wait 1.2s for the splitting animation to complete, then navigate
		setTimeout(() => {
			goto('/invitation'); // 👈 Change '/invitation' to your target route
		}, 1200);
	}
</script>

<!-- Envelope Opener Overlay -->
<div class="envelope-overlay" class:is-open={isOpen}>
	
	<!-- LEFT PANEL -->
	<div class="envelope-half panel-left">
		<svg class="fold-lines" viewBox="0 0 50 100" preserveAspectRatio="none">
			<line x1="0" y1="0" x2="50" y2="50" class="line" />
			<line x1="0" y1="100" x2="50" y2="50" class="line" />
		</svg>
	</div>

	<!-- RIGHT PANEL -->
	<div class="envelope-half panel-right">
		<svg class="fold-lines" viewBox="50 0 50 100" preserveAspectRatio="none">
			<line x1="100" y1="0" x2="50" y2="50" class="line" />
			<line x1="100" y1="100" x2="50" y2="50" class="line" />
		</svg>
	</div>

	<!-- WAX SEAL TRIGGER -->
	<button 
		type="button" 
		class="seal-button" 
		onclick={handleOpen}
		aria-label="Open Envelope"
	>
		<img src={waxSeal} alt="Wax Seal" class="seal-image" />
	</button>

</div>

<style>
	.envelope-overlay {
		position: fixed;
		inset: 0;
		width: 100vw;
		height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 9999;
	}

	.envelope-overlay.is-open {
		pointer-events: none;
	}

	.envelope-half {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 50vw;
		height: 100%;
		background-color: #ffffff;
		transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
		will-change: transform;
		z-index: 1;
	}

	.panel-left {
		left: 0;
		transform: translateX(0);
	}

	.panel-right {
		right: 0;
		transform: translateX(0);
	}

	.fold-lines {
		width: 100%;
		height: 100%;
	}

	.line {
		stroke: rgba(236, 72, 195, 0.12);
		stroke-width: 1.5;
		vector-effect: non-scaling-stroke;
	}

	.seal-button {
		position: absolute;
		z-index: 10;
		background: transparent !important;
		border: none !important;
		outline: none !important;
		padding: 0;
		margin: 0;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	.seal-button:focus,
	.seal-button:active {
		outline: none;
		box-shadow: none;
		background: transparent;
	}

	.seal-image {
		width: 140px;
		height: auto;
		display: block;
		user-select: none;
		filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
	}

	/* SLIDE SPLIT ANIMATIONS */
	.envelope-overlay.is-open .panel-left {
		transform: translateX(-100%) !important;
	}

	.envelope-overlay.is-open .panel-right {
		transform: translateX(100%) !important;
	}

	.envelope-overlay.is-open .seal-button {
		opacity: 0;
		transform: scale(0.5);
		pointer-events: none;
	}
</style>