/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.productionorder
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default" NOT NULL
    ,name character varying COLLATE pg_catalog."default" NOT NULL
    ,description character varying COLLATE pg_catalog."default" NOT NULL
    ,deliverydate character varying COLLATE pg_catalog."default" NOT NULL
    ,deliverto_id int  NOT NULL
    ,status character varying COLLATE pg_catalog."default" NOT NULL
    ,payment_id int  NOT NULL


);

                ALTER TABLE IF EXISTS public.productionorder
                ADD FOREIGN KEY (deliverto_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.productionorder_services_service (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,productionorder_id int  NOT NULL

                    ,service_id int  NOT NULL


                );
            

                ALTER TABLE public.productionorder_services_service
                ADD FOREIGN KEY (productionorder_id)
                REFERENCES public.productionorder (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.productionorder_services_service
                ADD FOREIGN KEY (service_id)
                REFERENCES public.service (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                ALTER TABLE IF EXISTS public.productionorder
                ADD FOREIGN KEY (payment_id)
                REFERENCES public.account (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.productionorder_services_service;
DROP TABLE public.productionorder;

