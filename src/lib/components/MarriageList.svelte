<script lang="ts">
    import GiftOutlineIcon from '@iconify-svelte/solar/gift-outline';
	import FadeIn from '$lib/components/FadeIn.svelte';
</script>
<div class="mx-auto max-w-3xl items-center text-center   bg-white p-10 shadow-[0_20px_50px_rgba(196,138,151,0.12)]">
	<FadeIn>
		<h2 class="text-2xl sm:text-3xl mb-2">
			Liste de Mariage
		</h2>
	</FadeIn>

	<FadeIn>
		<p class="mb-6 text-lg h5">
			Your presence at our wedding is the greatest gift we could receive.
			If you would like to celebrate with a gift, we have prepared our
			marriage list below.
		</p>
	</FadeIn>


	<div class="grid gap-6 md:grid-cols-3">
		<div class="grid gap-8 pt-2 text-center">
			<div class="flex flex-col items-center">
				<FadeIn>
					<div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#eadedf]">
						<GiftOutlineIcon height="2em" style="color: var(--primary)"/>
					</div>
				</FadeIn>
				<FadeIn>
					<p class="text-lg h5">
						Kindly use our wish money account number
					</p>
				</FadeIn>
				<FadeIn>
					<p class="mt-3 text-xl font-semibold text-[#964b54] transition hover:text-[#7c3942]">
						+961 76 164 422
					</p>
				</FadeIn>
			</div>
		</div>
	</div>
</div>
