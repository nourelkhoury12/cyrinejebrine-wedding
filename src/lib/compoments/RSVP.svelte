<script lang="ts">
	import chairImg from '$lib/assets/chair.png'; 

	// Svelte 5 State Runes
	let fullName = $state('');
	let phoneNumber = $state('');
	let email = $state('');
	let attendance = $state('accept'); // 'accept' or 'reject'

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log({ fullName, phoneNumber, email, attendance });
	}
</script>

<div class="mx-auto flex max-w-md flex-col items-center p-6 font-serif">
	<!-- Top Illustration/Image -->
	<div class="mb-8 h-40 w-40">
		<img
			src={chairImg}
			alt="Wedding Chair Decoration"
			class="h-full w-full object-contain"
		/>
	</div>

	<form onsubmit={handleSubmit} class="w-full space-y-6">
		<!-- Full Name Input -->
		<div class="relative w-full">
			<input
				type="text"
				id="fullName"
				placeholder=" "
				bind:value={fullName}
				required
				class="peer w-full border-b-2 border-[#be8e8e]/60 bg-transparent py-2 pt-4 font-sans text-gray-800 outline-none transition-colors focus:border-[#a86c6c]"
			/>
			<label
				for="fullName"
				class="absolute left-0 top-3 origin-[0] -translate-y-4 scale-75 font-serif text-lg text-[#be8e8e] transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#a86c6c]"
			>
				Full Name
			</label>
		</div>

		<!-- Phone Number Input -->
		<div class="relative w-full">
			<input
				type="tel"
				id="phoneNumber"
				placeholder=" "
				bind:value={phoneNumber}
				required
				class="peer w-full border-b-2 border-[#be8e8e]/60 bg-transparent py-2 pt-4 font-sans text-gray-800 outline-none transition-colors focus:border-[#a86c6c]"
			/>
			<label
				for="phoneNumber"
				class="absolute left-0 top-3 origin-[0] -translate-y-4 scale-75 font-serif text-lg text-[#be8e8e] transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#a86c6c]"
			>
				Phone Number
			</label>
		</div>

		<!-- Email Input -->
		<div class="relative w-full">
			<input
				type="email"
				id="email"
				placeholder=" "
				bind:value={email}
				required
				class="peer w-full border-b-2 border-[#be8e8e]/60 bg-transparent py-2 pt-4 font-sans text-gray-800 outline-none transition-colors focus:border-[#a86c6c]"
			/>
			<label
				for="email"
				class="absolute left-0 top-3 origin-[0] -translate-y-4 scale-75 font-serif text-lg text-[#be8e8e] transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[#a86c6c]"
			>
				Email
			</label>
		</div>

		<!-- Radio Options (Accept / Reject) -->
		<div class="space-y-3 pt-4 font-serif text-xl text-[#be8e8e]">
			<label class="flex cursor-pointer items-center gap-3">
				<input
					type="radio"
					name="attendance"
					value="accept"
					bind:group={attendance}
					class="h-5 w-5 accent-[#c48b8b] cursor-pointer"
				/>
				<span class={attendance === 'accept' ? 'text-[#a86c6c]' : ''}>Accept</span>
			</label>

			<label class="flex cursor-pointer items-center gap-3">
				<input
					type="radio"
					name="attendance"
					value="reject"
					bind:group={attendance}
					class="h-5 w-5 accent-[#c48b8b] cursor-pointer"
				/>
				<span class={attendance === 'reject' ? 'text-[#a86c6c]' : ''}>Reject</span>
			</label>
		</div>

		<!-- Submit Button -->
		<div class="pt-6">
			<button
				type="submit"
				class="flex w-full items-center justify-center gap-2 rounded bg-[#c48b8b] py-3 text-lg font-normal text-white shadow-sm transition-all hover:bg-[#b37878] active:scale-[0.98]"
			>
				<span>Confirm your seats</span>
				<!-- Paper Plane Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="h-5 w-5 rotate-45"
				>
					<path
						d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
					/>
				</svg>
			</button>
		</div>
	</form>
</div>