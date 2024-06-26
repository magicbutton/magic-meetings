/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.vendor
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 


);

                CREATE TABLE public.vendor_m2m_service (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,vendor_id int  
 
                    ,service_id int  
 

                );
            

                ALTER TABLE public.vendor_m2m_service
                ADD FOREIGN KEY (vendor_id)
                REFERENCES public.vendor (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.vendor_m2m_service
                ADD FOREIGN KEY (service_id)
                REFERENCES public.service (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.vendor_m2m_service;
DROP TABLE public.vendor;

