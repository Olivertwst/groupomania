-- Table: public.Users
-- DROP TABLE IF EXISTS public."Users";
CREATE TABLE IF NOT EXISTS public."Users" (
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"' :: regclass),
    "firstName" character varying(255) COLLATE pg_catalog."default",
    "lastName" character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT "Users_email_key" UNIQUE (email),
    CONSTRAINT "Users_email_key1" UNIQUE (email),
    CONSTRAINT "Users_email_key2" UNIQUE (email),
    CONSTRAINT "Users_email_key3" UNIQUE (email),
    CONSTRAINT "Users_email_key4" UNIQUE (email)
) TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS public."Users" OWNER to postgres;

-- Table: public.Posts
-- DROP TABLE IF EXISTS public."Posts";
CREATE TABLE IF NOT EXISTS public."Posts" (
    id integer NOT NULL DEFAULT nextval('"Posts_id_seq"' :: regclass),
    title character varying(255) COLLATE pg_catalog."default",
    content character varying(255) COLLATE pg_catalog."default",
    "userId" integer,
    "userReads" integer [],
    "mediaUrl" character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Posts_pkey" PRIMARY KEY (id)
) TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS public."Posts" OWNER to postgres;