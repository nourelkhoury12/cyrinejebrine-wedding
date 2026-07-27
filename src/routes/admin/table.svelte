<script lang="ts">
	let { data } = $props();

	let search = $state("");
    let statusFilter = $state<"all" | "attending" | "not-attending">("all");
	let guestsFilter = $state<number | "all">("all");

	let filteredReservations = $derived(
		data.reservations.filter((reservation) => {

			const matchesSearch =
				reservation.name.toLowerCase().includes(search.toLowerCase()) ||
				reservation.phone.includes(search);


			const matchesStatus =
				statusFilter === "all" ||
				(statusFilter === "attending" && reservation.attend) ||
				(statusFilter === "not-attending" && !reservation.attend);


			const matchesGuests =
				guestsFilter === "all" ||
				reservation.guests === guestsFilter;


			return matchesSearch && matchesStatus && matchesGuests;
		})
	);

</script>   

<div class="min-h-screen bg-stone-100 py-10 px-4">
	<div class="mx-auto max-w-7xl">
		<div class="rounded-3xl bg-white p-8 shadow-xl md:p-12">

			<div class="text-center">
				<p class="text-sm font-semibold uppercase tracking-[0.35em] text-stone-500">
					Administration
				</p>

				<h1 class="mt-4 text-4xl font-serif text-stone-700 md:text-6xl">
					Wedding Reservations
				</h1>

				<p class="mt-5 text-stone-500 md:text-lg">
					View all RSVP responses received from your guests.
				</p>
			</div>

			<!-- Desktop Table -->
			<div class="mt-12 hidden overflow-x-auto rounded-2xl border border-stone-200 md:block">

				<table class="min-w-full">

					<thead class="bg-[#556B4F] text-white">

						<tr>
							<th class="px-8 py-5 text-left">Name</th>
							<th class="px-8 py-5 text-left">Email</th>
							<th class="px-8 py-5 text-left">Phone</th>
							<th class="px-8 py-5 text-center">Status</th>
							<th class="px-8 py-5 text-center">Guests</th>
							<th class="px-8 py-5 text-left">Message</th>
						</tr>

					</thead>

					<tbody class="divide-y divide-stone-200">

						{#each filteredReservations as reservation}

							<tr class="hover:bg-[#FCF8F5] transition">


								<td class="px-5 py-4 text-[#4A3E3E]">
									{reservation.name}
								</td>


								<td class="px-5 py-4 text-[#8B7B7B]">
									{reservation.phone}
								</td>


								<td class="px-5 py-4">

									{#if reservation.attend}

										<span class="
											text-xs
											text-[#A96B79]
											border
											border-[#E8C7CF]
											bg-[#FCF1F3]
											px-3 py-1
										">
											Coming
										</span>

									{:else}

										<span class="
											text-xs
											text-[#8B7B7B]
											border
											border-[#EADFD9]
											bg-[#FAF8F5]
											px-3 py-1
										">
											Not coming
										</span>

									{/if}

								</td>



								<td class="px-5 py-4 text-[#4A3E3E]">
									{reservation.guests}
								</td>



								<td class="
									max-w-xs
									truncate
									px-5 py-4
									text-[#8B7B7B]
								">
									{reservation.message || "-"}
								</td>


							</tr>


						{:else}

							<tr>

								<td
									colspan="5"
									class="
										py-10
										text-center
										text-[#8B7B7B]
									"
								>
									No reservations found
								</td>

							</tr>

						{/each}

					</tbody>

				</table>

			</div>

			<!-- Mobile Cards -->
			<!-- <div class="mt-10 space-y-4 md:hidden">

				{#each data.reservations as reservation, index}

					<div class="overflow-hidden rounded-2xl border border-stone-200 bg-white">

						<button
							class="flex w-full items-center justify-between p-5 text-left"
							onclick={() => toggle(index)}
						>

							<div>

								<h2 class="text-lg font-semibold text-stone-700">
									{reservation.name}
								</h2>

								<p class="mt-1 text-sm text-stone-500">
									{reservation.attend ? "Attending" : "Not Attending"}
								</p>

							</div>

							<div class="text-2xl text-stone-500">
								{openReservation === index ? "−" : "+"}
							</div>

						</button>

						{#if openReservation === index}

							<div class="space-y-5 border-t border-stone-200 bg-stone-50 p-5">

								<div>
									<p class="text-xs uppercase tracking-widest text-stone-500">
										Email
									</p>

									<p class="mt-1">
										{reservation.email}
									</p>
								</div>

								<div>
									<p class="text-xs uppercase tracking-widest text-stone-500">
										Phone
									</p>

									<p class="mt-1">
										{reservation.phone}
									</p>
								</div>

								<div>
									<p class="text-xs uppercase tracking-widest text-stone-500">
										Guests
									</p>

									<p class="mt-1">
										{reservation.guests}
									</p>
								</div>

								<div>
									<p class="text-xs uppercase tracking-widest text-stone-500">
										Status
									</p>

									<div class="mt-2">

										{#if reservation.attend}
											<span class="rounded-full bg-green-100 px-3 py-2 text-sm font-medium text-green-700">
												✅ Attending
											</span>
										{:else}
											<span class="rounded-full bg-red-100 px-3 py-2 text-sm font-medium text-red-700">
												❌ Declined
											</span>
										{/if}

									</div>

								</div>

								<div>
									<p class="text-xs uppercase tracking-widest text-stone-500">
										Message
									</p>

									<p class="mt-1">
										{reservation.message || "—"}
									</p>
								</div>

							</div>

						{/if}

					</div>

				{/each}

			</div>

			<div class="mt-10 text-center text-lg text-stone-600">
				Total Reservations:
				<span class="font-semibold text-stone-800">
					{data.reservations.length}
				</span>
			</div> -->

		</div>

	</div>
</div>