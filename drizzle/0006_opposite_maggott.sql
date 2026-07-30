CREATE TABLE "popular_food_card" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"desc" text NOT NULL,
	"price" integer NOT NULL,
	"img" text NOT NULL,
	"section" text NOT NULL
);
