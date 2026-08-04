<script lang="ts">
    import GiftOutlineIcon from '@iconify-svelte/solar/gift-outline';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import { language } from "$lib/stores/languages";
    import { translations } from "$lib/i18n/translations";
</script>
<div class="mx-auto max-w-3xl items-center text-center  p-10 shadow-[0_20px_50px_rgba(196,138,151,0.12)]">
	<FadeIn>
		<h1 class="heading-1 text-2xl sm:text-3xl">{translations[$language].wedding_list}</h1>
	</FadeIn>

	<FadeIn>
		<p class="heading-2 mt-3 mb-8">{translations[$language].marriage_text}</p>
	</FadeIn>

	<div class="grid gap-6">
		<div class="grid gap-8 pt-2 text-center">
			<div class="flex flex-col items-center">
				<FadeIn>
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#eadedf]">
						<GiftOutlineIcon height="2em" style="color: var(--primary)"/>
					</div>
				</FadeIn>
				<FadeIn>
					<p class="heading-2">{translations[$language].wish_money}</p>
				</FadeIn>
				<FadeIn>
					<p class="mt-3 text-xl font-semibold text-[#964b54] transition hover:text-[#7c3942]">
						+961 79 164 688
					</p>
				</FadeIn>
			</div>
		</div>
	</div>
</div>
