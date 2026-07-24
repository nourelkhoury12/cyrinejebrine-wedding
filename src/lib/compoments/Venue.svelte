<script lang="ts">
import mapImgSrc from "$lib/assets/map.png"
	interface Props {
		title?: string;
		subtitle?: string;
	
		googleMapsUrl?: string;
	}

	let {
		title = 'WEDDING VENUE',
		subtitle = 'Green Land Akkar -Edbel',
	
		googleMapsUrl = 'https://www.google.com/maps/place/GreenLand+Restaurant/@34.5319336,36.0902386,17z/data=!3m1!4b1!4m6!3m5!1s0x15223b31ef4a1feb:0x6a0ae095f2930472!8m2!3d34.5319336!4d36.0902386!16s%2Fg%2F11c1xnwk87?entry=ttu&g_ep=EgoyMDI2MDcyMS4wIKXMDSoASAFQAw%3D%3D'
	}: Props = $props();
</script>

<div class="mx-auto flex max-w-md flex-col items-center p-6 text-center font-serif">
	<!-- Title -->
	<h2 class="mb-2 text-2xl tracking-widest text-[#a86c6c] uppercase sm:text-3xl">
		{title}
	</h2>

	<!-- Subtitle -->
	<p class="mb-6 text-lg text-[#be8e8e] font-normal sm:text-xl">
		{subtitle}
	</p>

	<!-- Map Container -->
	<div class="mb-8 w-full overflow-hidden rounded-2xl border-2 border-[#e0adad] shadow-lg transition-shadow duration-300 hover:shadow-xl">
		<img
			src={mapImgSrc}
			alt="{subtitle} location map"
			class="h-auto w-full object-cover"
		/>
	</div>

	<!-- Google Maps Button -->
	<a
		href={googleMapsUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="inline-flex items-center justify-center gap-2.5 rounded bg-[#c48b8b] px-6 py-3 text-lg font-sans text-white transition-all hover:bg-[#b37878] active:scale-95 shadow-sm"
	>
		<!-- Pin Icon -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="h-5 w-5"
		>
			<path
				d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
			/>
		</svg>
		<span>Open google maps</span>
	</a>
</div>