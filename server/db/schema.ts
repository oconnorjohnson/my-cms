import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const blogs = sqliteTable("blogs", {
  id: integer("id").primaryKey(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text("name").unique().notNull(),
  post: text("post").notNull(),
});

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  name: text("name").unique().notNull(),
  about: text("about").notNull(),
  url: text("url").notNull(),
});

export type InsertBlog = typeof blogs.$inferInsert;
export type SelectBlog = typeof blogs.$inferSelect;

export type InsertProject = typeof projects.$inferInsert;
export type SelectProject = typeof projects.$inferSelect;
