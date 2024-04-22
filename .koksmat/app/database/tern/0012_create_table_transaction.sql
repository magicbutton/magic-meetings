/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.transaction
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default" NOT NULL
    ,name character varying COLLATE pg_catalog."default" NOT NULL
    ,description character varying COLLATE pg_catalog."default" NOT NULL
    ,amount character varying COLLATE pg_catalog."default" NOT NULL
    ,currency character varying COLLATE pg_catalog."default" NOT NULL
    ,datetime character varying COLLATE pg_catalog."default" NOT NULL
    ,status character varying COLLATE pg_catalog."default" NOT NULL


);




---- create above / drop below ----

DROP TABLE public.transaction;
