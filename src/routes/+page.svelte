<script lang="ts">
	import { goto } from '$app/navigation';
	import waxSeal from '$lib/assets/wax-seal.png';

	let isOpen = $state(false);

	function handleOpen(e?: Event) {
		if (e) e.preventDefault();
		if (isOpen) return;
		
		isOpen = true;

		setTimeout(() => {
			goto('/invitation');
		}, 1200);
	}
</script>

<!-- Envelope Opener Overlay -->
<div class="envelope-overlay" class:is-open={isOpen}>
	
	<!-- LEFT PANEL -->
	<div class="envelope-half panel-left">
		<svg class="fold-lines" viewBox="0 0 50 100" preserveAspectRatio="none">
			<!-- Shadow Line -->
			<line x1="0" y1="1" x2="50" y2="51" class="line-shadow" />
			<!-- Main Line -->
			<line x1="0" y1="0" x2="50" y2="50" class="line-main" />
			<line x1="0" y1="100" x2="50" y2="50" class="line-main" />
		</svg>
	</div>

	<!-- RIGHT PANEL -->
	<div class="envelope-half panel-right">
		<svg class="fold-lines" viewBox="50 0 50 100" preserveAspectRatio="none">
			<!-- Shadow Line -->
			<line x1="100" y1="1" x2="50" y2="51" class="line-shadow" />
			<!-- Main Line -->
			<line x1="100" y1="0" x2="50" y2="50" class="line-main" />
			<line x1="100" y1="100" x2="50" y2="50" class="line-main" />
		</svg>
	</div>

	<!-- WAX SEAL BUTTON -->
	<button 
		type="button" 
		class="seal-button" 
		onclick={handleOpen}
		ontouchstart={handleOpen}
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

	/* Envelope panels set to Cloud White (#f9f9fb) */
	.envelope-half {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 50vw;
		height: 100%;
		background-color: #f9f9fb; /* Cloud White */
		transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);
		will-change: transform;
		z-index: 1;
	}

	/* Removed box-shadow to eliminate vertical center line */
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
		filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.15));
	}

	/* Rose fold line color matching your wax seal accent */
	.line-main {
		stroke: rgba(216, 161, 178, 0.6);
		stroke-width: 1.5;
		vector-effect: non-scaling-stroke;
	}

	.line-shadow {
		stroke: rgba(0, 0, 0, 0.08);
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
		touch-action: manipulation;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		user-select: none;
		transition: opacity 0.6s ease, transform 0.6s ease;
	}

	.seal-button:focus,
	.seal-button:active {
		outline: none;
		box-shadow: none;
		background: transparent;
	}

	.seal-image {
		width: 130px;
		height: auto;
		display: block;
		pointer-events: none;
		user-select: none;
		-webkit-user-drag: none;
		filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.2));
	}

	/* SLIDE ANIMATION */
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