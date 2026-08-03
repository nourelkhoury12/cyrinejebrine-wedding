<script lang="ts">
import LocationIcon from '@iconify-svelte/mdi/location';
import FadeIn from "$lib/components/FadeIn.svelte"
import mapImgSrc from "$lib/assets/map.png";
import { language } from "$lib/stores/languages";
import { translations } from "$lib/i18n/translations";
	interface Props {
		title?: string;
		subtitle?: string;
	
		googleMapsUrl?: string;
	}

	let {
		
		subtitle = 'Green Land Akkar -Edbel',
	
		googleMapsUrl = 'https://www.google.com/maps/place/GreenLand+Restaurant/@34.5319336,36.0902386,17z/data=!3m1!4b1!4m6!3m5!1s0x15223b31ef4a1feb:0x6a0ae095f2930472!8m2!3d34.5319336!4d36.0902386!16s%2Fg%2F11c1xnwk87?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D'
	}: Props = $props();
</script>

<div class="w-full items-center p-6 text-center ">
	<FadeIn>
		<h1 class="heading-1 text-2xl sm:text-3xl">
			{translations[$language].wedding_venue}
		</h1>
	</FadeIn>

	<FadeIn>
		<p class="heading-2 mt-3 mb-8">
			{translations[$language].location}
			<br/>
			{translations[$language].time}
		</p>
	</FadeIn>
		

	<FadeIn>
		<div class="mb-8 w-full overflow-hidden rounded-2xl border-2 border-[#e0adad] shadow-lg transition-shadow duration-300 hover:shadow-xl">
			<img src={mapImgSrc} alt="{subtitle} location map" class="h-auto w-full object-cover"/>
		</div>
	</FadeIn>

	<FadeIn>
		<a
			href={googleMapsUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="anchor-primary"
		>
			<LocationIcon height="1.5em" />
			<span>{translations[$language].maps}</span>
		</a>
	</FadeIn>
</div>