<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Invitation from '$lib/assets/invitation.png';
</script>

<section class="flex items-center justify-center overflow-hidden px-4 py-12 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#E8C7CF_45%,_#E8C7CF_100%)]">
	<div class="flex flex-col items-center gap-4" in:fade={{ duration: 1000 }}>
		<img src={Invitation} alt="Ali & Mireille Wedding Invitation"
			 class="w-[min(720px,95vw)] rounded-[18px] shadow-[0_10px_25px_rgba(0,0,0,0.05),0_25px_60px_rgba(0,0,0,0.10)] transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.01] animate-float"
			in:fly={{
				y: 30,
				duration: 1200
			}}
		/>

		<div class="hero-scroll" in:fade={{delay: 1200,duration: 700}}>
	
		</div>
	</div>
</section>