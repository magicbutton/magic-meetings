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
    ,account_id int  
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,amount character varying COLLATE pg_catalog."default"   NOT NULL
    ,currency character varying COLLATE pg_catalog."default"  NOT NULL
    ,datetime character varying COLLATE pg_catalog."default"   NOT NULL
    ,status character varying COLLATE pg_catalog."default"  NOT NULL


);

        ALTER TABLE IF EXISTS public.transaction
        ADD FOREIGN KEY (account_id)
        REFERENCES public.account (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID;


---- create above / drop below ----

DROP TABLE public.transaction;

