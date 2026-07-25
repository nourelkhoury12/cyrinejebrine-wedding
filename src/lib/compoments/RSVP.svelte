<script lang="ts">
	import chairImg from '$lib/assets/chair.png';

	let fullName = $state('');
	let phoneNumber = $state('');
	let email = $state('');
	let attendance = $state('accept');
	let guests = $state('1');
	let message = $state('');

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		console.log({
			fullName,
			phoneNumber,
			email,
			attendance,
			guests,
			message
		});
	}
</script>

<div class="mx-auto font-serif max-w-xlbg-white p-8 shadow-[0_20px_50px_rgba(196,138,151,0.15)] md:p-10">
	<!-- Chair -->
	<div class="flex justify-center">
		<img src={chairImg} alt="Wedding Chair" class="w-40 h-40 md:w-52 object-contain"/>
	</div>

	<!-- Title -->
	<div class="mt-6 text-center">
		<h2 class="text-2xl sm:text-3xl">Reserve Your Seat</h2>
		<p class="h5">
			We would be honored to celebrate this beautiful day with you.
			Please let us know if you'll be joining us.
		</p>
	</div>

	<!-- Divider -->
	<div class="my-8 flex items-center gap-4">
		<div class="h-px flex-1 bg-[#eadedf]"></div>
		<span class="text-xl text-[#C48A97]">❀</span>
		<div class="h-px flex-1 bg-[#eadedf]"></div>
	</div>

	<form onsubmit={handleSubmit} class="space-y-7">
		<!-- Name -->
		<div class="relative">
			<input
					type="text"
					id="name"
					placeholder=" "
					required
					bind:value={fullName}
					class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
				/>

			<label for="name"
				class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
			>
				Full Name
			</label>
		</div>

		<!-- Phone -->

		<div class="relative">
				<input
					type="tel"
					id="phone"
					placeholder=" "
					required
					bind:value={phoneNumber}
					class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
				/>

				<label
					for="phone"
					class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
				>
					Phone Number
				</label>
		</div>

		<!-- Email -->
		<div class="relative">
				<input
					type="email"
					id="email"
					placeholder=" "
					bind:value={email}
					class="peer w-full border-b-2 border-[#D9BCC4] bg-transparent pb-2 pt-6 text-[#5d4d50] outline-none transition focus:border-[#C48A97]"
				/>

				<label
					for="email"
					class="absolute left-0 top-4 origin-left -translate-y-4 scale-75 text-[#B88D93] transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75"
				>
					Email (Optional)
				</label>
		</div>

		<!-- Attendance -->
		<div>
				<h3 class="mb-4 text-xl font-serif text-[#A96B79]">
					Attendance
				</h3>

				<div class="space-y-4">
					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadedf] p-4 transition hover:border-[#C48A97]"
					>
						<input
							type="radio"
							value="accept"
							name="attendance"
							bind:group={attendance}
							class="h-5 w-5 accent-[#C48A97]"
						/>

						<span class="text-[#6E5A5E]">
							 Joyfully Accept
						</span>
					</label>

					<label
						class="flex cursor-pointer items-center gap-3 rounded-xl border border-[#eadedf] p-4 transition hover:border-[#C48A97]"
					>
						<input
							type="radio"
							value="reject"
							name="attendance"
							bind:group={attendance}
							class="h-5 w-5 accent-[#C48A97]"
						/>

						<span class="text-[#6E5A5E]">
							Regretfully Decline
						</span>
					</label>
				</div>
			</div>

			<!-- Guests -->

			<div>
				<label
					class="mb-2 block text-lg font-serif text-[#A96B79]"
				>
					Number of Guests
				</label>

				<select
					bind:value={guests}
					class="w-full rounded-xl border border-[#eadedf] bg-[#fcf8f5] px-4 py-3 text-[#6E5A5E] outline-none focus:border-[#C48A97]"
				>
					<option value="1">1 Guest</option>
					<option value="2">2 Guests</option>
					<option value="3">3 Guests</option>
				</select>
			</div>

			<!-- Message -->

			<div>
				<label
					class="mb-2 block text-lg font-serif text-[#A96B79]"
				>
					Message to the Couple
				</label>

				<textarea
					rows="5"
					bind:value={message}
					placeholder="Share your wishes with the happy couple..."
					class="w-full resize-none rounded-xl border border-[#eadedf] bg-[#fcf8f5] px-4 py-4 text-[#6E5A5E] outline-none transition focus:border-[#C48A97]"
				></textarea>
			</div>

			<!-- Submit -->

			<div class="pt-4">
				<button
					type="submit"
					class="w-full rounded-full bg-[#C48A97] py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#B37786] hover:shadow-xl"
				>
					Confirm Your RSVP
				</button>
			</div>
		</form>
	</div>
