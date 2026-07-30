CREATE TABLE "password_resets" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"otp_hash" text NOT NULL,
	"otp_expires_at" timestamp NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
