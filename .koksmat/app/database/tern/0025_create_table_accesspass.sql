/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.accesspass
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,visitor_id int   NOT NULL
    ,validfrom character varying COLLATE pg_catalog."default"   NOT NULL
    ,validto character varying COLLATE pg_catalog."default"   NOT NULL
    ,status character varying COLLATE pg_catalog."default"  NOT NULL


);

                ALTER TABLE IF EXISTS public.accesspass
                ADD FOREIGN KEY (visitor_id)
                REFERENCES public.visitor (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----

DROP TABLE public.accesspass;

