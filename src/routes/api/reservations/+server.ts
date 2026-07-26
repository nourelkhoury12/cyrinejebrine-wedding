import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { reservations1c } from '$lib/server/schema';
import { eq } from 'drizzle-orm';

export async function POST({ request }) {
    try {
        const body = await request.json();

        let {
            name,
            email,
            phone,
            attend,
            guests,
            message
        } = body;

        if (!name || !phone || attend === undefined) {
            return json(
                {
                    success: false,
                    error: 'Missing required fields.'
                },
                { status: 400 }
            );
        }

        // User isn't attending
        if (!attend) {
            guests = 0;
            message = null;
        } else {
            if (![1, 2, 3].includes(guests)) {
                return json(
                    {
                        success: false,
                        error: 'Guests must be 1 or 2.'
                    },
                    { status: 400 }
                );
            }
        }

        // Check duplicate phone
        const existing = await db
            .select()
            .from(reservations1c)
            .where(eq(reservations1c.phone, phone))
            .limit(1);

        if (existing.length) {
            return json(
                {
                    success: false,
                    error: 'This phone number has already been used.'
                },
                { status: 409 }
            );
        }

        await db.insert(reservations1c).values({
            name,
            email: email || null,
            phone,
            attend,
            guests,
            message
        });

        return json({
            success: true
        });
    } catch (err) {
        console.error(err);

        return json(
            {
                success: false,
                error: 'Internal server error.'
            },
            { status: 500 }
        );
    }
}