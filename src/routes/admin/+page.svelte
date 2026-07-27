<script lang="ts">
	let { data } = $props();

	let search = $state('');
	let statusFilter = $state<'all' | 'attending' | 'not-attending'>('all');
	let guestsFilter = $state<number | 'all'>('all');

	let filteredReservations = $derived(
		data.reservations.filter((reservation) => {
			const searchValue = search.toLowerCase().trim();

			const matchesSearch =
				reservation.name.toLowerCase().includes(searchValue) ||
				reservation.phone.includes(searchValue) ||
				(reservation.email?.toLowerCase().includes(searchValue) ?? false);

			const matchesStatus =
				statusFilter === 'all' ||
				(statusFilter === 'attending' && reservation.attend) ||
				(statusFilter === 'not-attending' && !reservation.attend);

			const matchesGuests =
				guestsFilter === 'all' ||
				reservation.guests === guestsFilter;

			return matchesSearch && matchesStatus && matchesGuests;
		})
	);

	function deleteReservation(id: number) {
		console.log('Delete reservation:', id);
	}
</script>

<svelte:head>
	<title>Wedding Reservations</title>
</svelte:head>

<div class="Card h-full m-6 p-8 ">
	<div>
		<!-- Header -->
		<div class="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 class="text-xl font-semibold tracking-tight text-stone-900">
					Wedding Reservations
				</h1>

				<p class="mt-1 text-sm text-stone-500">
					View all RSVP responses received from your guests.
				</p>
			</div>

			<!-- Filters -->
			<div class="flex flex-col gap-2 sm:flex-row">

				<!-- Search -->
				<input
					type="text"
					bind:value={search}
					placeholder="Search guests..."
					class="h-10 w-full rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-700 outline-none transition placeholder:text-stone-400 focus:border-stone-400 focus:ring-0 sm:w-[200px]"
				/>

				<!-- Status Filter -->
				<select
					bind:value={statusFilter}
					class="h-10 min-w-[140px] rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-700 outline-none focus:border-stone-400 focus:ring-0"
				>
					<option value="all">Filter by status</option>
					<option value="attending">Coming</option>
					<option value="not-attending">Regret</option>
				</select>

				<!-- Guests Filter -->
				<select
					bind:value={guestsFilter}
					class="h-10 min-w-[120px] rounded-lg border border-stone-200 bg-white px-3 text-sm text-stone-700 outline-none focus:border-stone-400 focus:ring-0"
				>
					<option value="all">All guests</option>
					<option value={1}>1 Guest</option>
					<option value={2}>2 Guests</option>
					<option value={3}>3 Guests</option>
				</select>

			</div>
		</div>


		<!-- Table Card -->
		<div class="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">

			<div class="overflow-x-auto">

				<table class="w-full min-w-[1100px] border-collapse text-left">

					<!-- Table Header -->
					<thead>
						<tr class="bg-stone-50">

							<th class="px-5 py-4 text-xs font-medium uppercase tracking-wide text-stone-500">
								Name
							</th>

							<th class="px-5 py-4 text-xs font-medium uppercase tracking-wide text-stone-500">
								Phone
							</th>

							<th class="px-5 py-4 text-xs font-medium uppercase tracking-wide text-stone-500">
								Email
							</th>

							<th class="px-5 py-4 text-center text-xs font-medium uppercase tracking-wide text-stone-500">
								Status
							</th>

							<th class="px-5 py-4 text-center text-xs font-medium uppercase tracking-wide text-stone-500">
								Guests
							</th>

							<th class="px-5 py-4 text-xs font-medium uppercase tracking-wide text-stone-500">
								Message
							</th>

							<th class="px-5 py-4 text-center text-xs font-medium uppercase tracking-wide text-stone-500">
								<!-- Action -->
							</th>

						</tr>
					</thead>


					<!-- Table Body -->
					<tbody class="divide-y divide-stone-100">

						{#each filteredReservations as reservation}

							<tr class="transition hover:bg-stone-50">

								<!-- Name -->
								<td class="px-5 py-5 text-sm font-medium text-stone-700">
									{reservation.name}
								</td>


								<!-- Phone -->
								<td class="px-5 py-5 text-sm text-stone-500">
									{reservation.phone}
								</td>


								<!-- Email -->
								<td class="px-5 py-5 text-sm text-stone-500">
									{reservation.email || '-'}
								</td>


								<!-- Status -->
								<td class="px-5 py-5 text-center">

									{#if reservation.attend}

										<span
											class="inline-flex rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700"
										>
											Coming
										</span>

									{:else}

										<span
											class="inline-flex rounded-md bg-red-100 px-2.5 py-1 text-xs font-medium text-red-600"
										>
											Regret
										</span>

									{/if}

								</td>


								<!-- Guests -->
								<td class="px-5 py-5 text-center text-sm text-stone-500">
									{reservation.guests}
								</td>


								<!-- Message -->
								<td class="max-w-xs px-5 py-5 text-sm text-stone-500">
									<div class="max-w-[250px] truncate">
										{reservation.message || '-'}
									</div>
								</td>


								<!-- Delete Icon -->
								<td class="px-5 py-5 text-center">

									<button
										type="button"
										onclick={() => deleteReservation(reservation.id)}
										aria-label="Delete reservation"
										title="Delete reservation"
										class="inline-flex h-8 w-8 items-center justify-center rounded-lg text-stone-400 transition hover:bg-red-50 hover:text-red-500"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.7"
											stroke="currentColor"
											class="h-4 w-4"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M6 7h12M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m2 0v11a2 2 0 01-2 2H9a2 2 0 01-2-2V7m3 4v6m4-6v6"
											/>
										</svg>
									</button>

								</td>

							</tr>

						{:else}

							<tr>
								<td
									colspan="7"
									class="py-14 text-center text-sm text-stone-500"
								>
									No reservations found
								</td>
							</tr>

						{/each}

					</tbody>

				</table>

			</div>


			<!-- Footer -->
			<div class="flex items-center justify-between border-t border-stone-100 px-5 py-4">

				<p class="text-xs text-stone-500">
					Showing
					<span class="font-medium text-stone-700">
						{filteredReservations.length}
					</span>
					of
					<span class="font-medium text-stone-700">
						{data.reservations.length}
					</span>
					reservations
				</p>

				<p class="text-xs text-stone-500">
					Total Guests:
					<span class="font-medium text-stone-700">
						{data.reservations.reduce(
							(total, reservation) => total + reservation.guests,
							0
						)}
					</span>
				</p>

			</div>

		</div>

	</div>
</div>