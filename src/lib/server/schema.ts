import {
	boolean,
	integer,
	pgTable,
	serial,
	text,
	timestamp,
	varchar
} from 'drizzle-orm/pg-core';

export const reservations1c = pgTable('reservations1c', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }),
	phone: varchar('phone', { length: 50 }).notNull(),
	attend: boolean('attend').notNull(),
	guests: integer('guests').notNull().default(0),
	message: text('message'),
	createdAt: timestamp('created_at').defaultNow().notNull()
});