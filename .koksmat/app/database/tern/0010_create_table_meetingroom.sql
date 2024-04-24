/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.meetingroom
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,floor_id int  
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,email character varying COLLATE pg_catalog."default"  NOT NULL
    ,capacity character varying COLLATE pg_catalog."default"   NOT NULL
    ,features character varying COLLATE pg_catalog."default" 


);

        ALTER TABLE IF EXISTS public.meetingroom
        ADD FOREIGN KEY (floor_id)
        REFERENCES public.floor (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID;


---- create above / drop below ----

DROP TABLE public.meetingroom;

