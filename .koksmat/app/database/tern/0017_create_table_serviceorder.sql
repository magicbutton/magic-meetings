/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.serviceorder
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,deliverydate character varying COLLATE pg_catalog."default"  
    ,deliverto_id int  
    ,status character varying COLLATE pg_catalog."default"  NOT NULL
    ,payment_id int  


);

                ALTER TABLE IF EXISTS public.serviceorder
                ADD FOREIGN KEY (deliverto_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.serviceorder_m2m_service (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,serviceorder_id int  
 
                    ,service_id int  
 

                );
            

                ALTER TABLE public.serviceorder_m2m_service
                ADD FOREIGN KEY (serviceorder_id)
                REFERENCES public.serviceorder (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.serviceorder_m2m_service
                ADD FOREIGN KEY (service_id)
                REFERENCES public.service (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.serviceorder
                ADD FOREIGN KEY (payment_id)
                REFERENCES public.account (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.serviceorder_m2m_service;
DROP TABLE public.serviceorder;

