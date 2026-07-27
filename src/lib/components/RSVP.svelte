<script lang="ts">
	import chairImg from '$lib/assets/chair.png';
	import FadeIn from "$lib/components/FadeIn.svelte"
import { language } from "$lib/stores/languages";
    import { translations } from "$lib/i18n/translations";

	let fullName = $state('');
	let phoneNumber = $state('');
	let email = $state('');
	let attendance = $state('accept');
	let guests = $state('1');
	let message = $state('');

	let submitting = $state(false);
	let successMessage = $state('');
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		submitting = true;
		successMessage = '';
		errorMessage = '';

		const data = {
			name: fullName,
			phone: phoneNumber,
			email: email || null,
			attend: attendance === 'accept',
			guests: attendance === 'accept' ? Number(guests) : 0,
			message: attendance === 'accept' ? message || null : null
		};

		try {
			const response = await fetch('/api/reservations', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			const result = await response.json();

			if (!response.ok) {
				errorMessage = result.error || 'Something went wrong.';
				return;
			}

			successMessage = 'Thank you! Your RSVP has been confirmed.';

			// Reset form
			fullName = '';
			phoneNumber = '';
			email = '';
			attendance = 'accept';
			guests = '1';
			message = '';
		} catch (error) {
			console.error(error);
			errorMessage = 'Unable to submit your RSVP. Please try again.';
		} finally {
			submitting = false;
		}
	}

</script>

<div class="mx-auto max-w-xlbg-white p-8 shadow-[0_20px_50px_rgba(196,138,151,0.15)] md:p-10">
	<FadeIn>
		<div class="flex justify-center">
			<img src={chairImg} alt="Wedding Chair" class="w-40 h-40 md:w-52 object-contain"/>
		</div>
	</FadeIn>
	
	<div class="mt-6 text-center">
		<FadeIn><h2 class="text-2xl sm:text-3xl">{translations[$language].seat}</h2></FadeIn>
		<FadeIn>
			<p class="h5">
				{translations[$language].seat_text}
			</p>
		</FadeIn>
	</div>

	<!-- Divider -->
	<FadeIn>
		<div class="my-8 flex items-center gap-4">
			<div class="h-px flex-1 bg-[#eadedf]"></div>
			<span class="text-xl text-[#C48A97]">❀</span>
			<div class="h-px flex-1 bg-[#eadedf]"></div>
		</div>
	</FadeIn>

	<form onsubmit={handleSubmit} class="space-y-7">
		<!-- Name -->
		<div class="relative">
			<FadeIn>
				<input
						type="text"
						id="name"
						placeholder=" "
						required
						disabled={submitting}
						bind:value={fullName}
						class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
					/>

				<label for="name"
					class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
				>
					Full Name
				</label>
			</FadeIn>
		</div>

		<!-- Phone -->
		<div class="relative">
			<FadeIn>
				<input
					type="tel"
					id="phone"
					placeholder=" "
					required
					disabled={submitting}
					bind:value={phoneNumber}
					class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
				/>

				<label
					for="phone"
					class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
				>
					Phone Number
				</label>
			</FadeIn>
		</div>

		<!-- Email -->
		<div class="relative">
			<FadeIn>
				<input
					type="email"
					id="email"
					placeholder=" "
					disabled={submitting}
					bind:value={email}
					class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
				/>

				<label
					for="email"
					class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
				>
					Email (Optional)
				</label>
			</FadeIn>
		</div>

		<!-- Attendance -->
		<div>
			<FadeIn><h3 class="mb-4 text-xl font-serif text-[#A96B79]">Attendance</h3></FadeIn>

			<div class="space-y-4">
				<FadeIn>
				<label class="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadedf] p-4 transition hover:border-[#C48A97]">
					<input
						type="radio"
						value="accept"
						name="attendance"
						bind:group={attendance}
						disabled={submitting}
						class="h-5 w-5 accent-[#C48A97]"
					/>

					<span class="text-[#6E5A5E]">Joyfully Accept</span>
				</label>
				</FadeIn>

				<FadeIn>
				<label class="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadedf] p-4 transition hover:border-[#C48A97]">
					<input
						type="radio"
						value="reject"
						name="attendance"
						bind:group={attendance}
						disabled={submitting}
						class="h-5 w-5 accent-[#C48A97]"
					/>

					<span class="text-[#6E5A5E]">Regretfully Decline</span>
				</label>
				</FadeIn>
			</div>
		</div>

		<!-- Guests -->
		 {#if attendance === 'accept'}
		<div>
			<FadeIn><label for="guests" class="mb-2 block text-lg font-serif text-[#A96B79]">Number of Guests</label></FadeIn>

			<FadeIn>
			<select disabled={submitting} bind:value={guests} class="w-full rounded-xl border border-[#eadedf] bg-[#fcf8f5] px-4 py-3 text-[#6E5A5E] outline-none focus:border-[#C48A97]">
				<option value="1">1 Guest</option>
				<option value="2">2 Guests</option>
				<option value="3">3 Guests</option>
			</select>
			</FadeIn>
		</div>
		{/if}

		<!-- Message -->
		 {#if attendance === 'accept'}
		<div>
			<FadeIn><label for="msg" class="mb-2 block text-lg font-serif text-[#A96B79]">Message to the Couple</label></FadeIn>

			<FadeIn>
			<textarea
				rows="5"
				bind:value={message}
				placeholder="Share your wishes with the happy couple..."
				class="w-full resize-none rounded-xl border border-[#eadedf] bg-[#fcf8f5] px-4 py-4 text-[#6E5A5E] outline-none transition focus:border-[#C48A97]"
			></textarea>
			</FadeIn>
		</div>
		{/if}

		<!-- Success Message --> 
		{#if successMessage} 
		 	<FadeIn> 
				<div class="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-700" > 
					{successMessage} 
				</div> 
			</FadeIn> 
		{/if} 
		<!-- Error Message --> 
		{#if errorMessage} 
			<FadeIn> 
				<div class="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-700" > 
					{errorMessage} 
				</div> 
			</FadeIn> 
		{/if}

		<!-- Submit -->
		<div class="pt-4">
			<FadeIn>
			<button type="submit" class="w-full rounded-full bg-[#C48A97] py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#B37786] hover:shadow-xl">
				{#if submitting}
					submitting...
				{:else}
				Confirm Your RSVP
				{/if}
			</button>
			</FadeIn>
		</div>
	</form>
</div>
