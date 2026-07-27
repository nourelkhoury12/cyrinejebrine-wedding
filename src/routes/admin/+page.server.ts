import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { reservations1c  } from "$lib/server/schema";
import { desc } from "drizzle-orm";

export const load: PageServerLoad = async () => {
	const data = await db
		.select()
		.from(reservations1c)
		.orderBy(desc(reservations1c.createdAt));

	return {
		reservations: data
	};
};