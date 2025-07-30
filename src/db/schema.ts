import { integer,pgTable,varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  createdAt: integer("created_at").notNull().default(Math.floor(Date.now() / 1000)),
  updatedAt: integer("updated_at").notNull().default(Math.floor(Date.now() / 1000)),
}); 