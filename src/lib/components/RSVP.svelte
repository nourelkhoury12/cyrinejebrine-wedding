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
		<FadeIn>
			<h1 class="heading-1 text-2xl sm:text-3xl">
				{translations[$language].seat}
			</h1>
		</FadeIn>
		<FadeIn>
			<p class="heading-2 mt-3 mb-8">
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
				<input type="text" id="name" placeholder=" " required disabled={submitting} bind:value={fullName} class="form-input peer"/>
				<label for="name" class="form-label" class:left-0={$language !== 'ar'} class:right-0={$language === 'ar'}>
					{translations[$language].full_name}
				</label>
			</FadeIn>

		</div>
		
		<!-- PHONE -->
		<div class="relative">
			<FadeIn>
				<input type="tel" id="phone" placeholder=" " required disabled={submitting} bind:value={phoneNumber} class="form-input peer"/>
				<label for="phone"class="form-label" class:left-0={$language !== 'ar'} class:right-0={$language === 'ar'}>
					{translations[$language].phone_number}
				</label>
			</FadeIn>
		</div>

		<!-- EMAIL -->
		<div class="relative">
			<FadeIn>
				<input type="email" id="email" placeholder=" " disabled={submitting} bind:value={email} class="form-input peer"/>
				<label for="email" class="form-label" class:left-0={$language !== 'ar'} class:right-0={$language === 'ar'}>
					{translations[$language].email}
				</label>
			</FadeIn>
		</div>

		<!-- Attendance -->
		<div class="attendance-tabs">
			<button
				type="button"
				class:active={attendance === 'accept'}
				onclick={() => (attendance = 'accept')}
				disabled={submitting}
			>
				{translations[$language].accept}
			</button>

			<button
				type="button"
				class:active={attendance === 'reject'}
				onclick={() => (attendance = 'reject')}
				disabled={submitting}
			>
				{translations[$language].decline}
			</button>
		</div>
		
		<!-- NUMBER OF GUESTS -->
		{#if attendance === 'accept'}
			<div>
				<FadeIn>
					<label dir={$language === 'ar' ? 'rtl' : 'ltr'} for="guests" class="mb-2 block text-[#A96B79]">
						{translations[$language].guests}
					</label>
				</FadeIn>

				<FadeIn>
					<select id="guests" class="form-select" bind:value={guests} disabled={submitting}>
						<option value="1">1 {translations[$language].guest}</option>
						<option value="2">2 {translations[$language].guests_text}</option>
						<option value="3">3 {translations[$language].guests_text}</option>
					</select>
				</FadeIn>
			</div>
		{/if}

		<!-- Message -->
		{#if attendance === 'accept'}
			<div>
				<FadeIn>
					<label dir={$language === 'ar' ? 'rtl' : 'ltr'} for="msg" class="mb-2 block font-serif text-[#A96B79]">
						{translations[$language].message}
					</label>
				</FadeIn>

				<FadeIn>
					<textarea id="msg" rows="5" class="form-textarea" dir={$language === 'ar' ? 'rtl' : 'ltr'} bind:value={message} placeholder={translations[$language].message_placeholder}></textarea>
				</FadeIn>
			</div>
		{/if}

		<!-- SUCCESS -->
		{#if successMessage}
			<FadeIn>
			<div class="rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-700">
				{successMessage}
			</div>
			</FadeIn>
		{/if}

		<!-- ERROR -->
		{#if errorMessage}
		<FadeIn>
			<div class=" rounded-xl border border-red-200 bg-red-50 p-4 text-centeق text-red-700">
				{errorMessage}
			</div>
		</FadeIn>
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
			<button type="submit">
				{#if submitting}
					{translations[$language].submitting}
				{:else}
				{translations[$language].confirm}
				{/if}
			</button>
			</FadeIn>
		</div>
	</form>
</div>
