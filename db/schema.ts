
import { pgTable, varchar, timestamp, text, boolean,serial,integer } from "drizzle-orm/pg-core"



export const usersTable = pgTable("users", {
  id: varchar("id", { length: 255 }).primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})


export const pendingUsers = pgTable("pending_users", {

  id: varchar("id", { length: 255, }).primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  otpHash: text("otp_hash").notNull(),
  otpExpiresAt: timestamp("otp_expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const refreshTokens = pgTable("refresh_tokens",
  {
    id: text("id").primaryKey(),
    userId: text("user_id").notNull(),
    tokenHash: text("token_hash").notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  }
);


export const passwordResets = pgTable("password_resets",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    otpHash: text("otp_hash").notNull(),
    otpExpiresAt: timestamp("otp_expires_at").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    verified:boolean("verified").default(false).notNull(),
  }
);


export const popularFoodCard = pgTable("popular_food_card",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
  price: integer("price").notNull(), 
  img:text("img").notNull(),
  }
);


export const foodcards = pgTable("foodcards", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  image: text("image").notNull(),
  category: varchar("category", { length: 100 }).notNull(),
  section: varchar("section", { length: 100 }).notNull(),
  subsection: varchar("subsection", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
