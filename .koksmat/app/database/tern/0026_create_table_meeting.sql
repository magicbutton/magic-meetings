/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   




CREATE TABLE public.meeting
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,start character varying COLLATE pg_catalog."default"   NOT NULL
    ,duration character varying COLLATE pg_catalog."default"   NOT NULL
    ,location character varying COLLATE pg_catalog."default"  NOT NULL
    ,organizer_id int   NOT NULL
    ,status character varying COLLATE pg_catalog."default"  NOT NULL
    ,exchangereference character varying COLLATE pg_catalog."default" 
    ,exchangestatus character varying COLLATE pg_catalog."default" 
    ,teamsreference character varying COLLATE pg_catalog."default" 
    ,teamsstatus character varying COLLATE pg_catalog."default" 


);

                ALTER TABLE IF EXISTS public.meeting
                ADD FOREIGN KEY (organizer_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_m2m_serviceorder (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  
 
                    ,serviceorder_id int  
 

                );
            

                ALTER TABLE public.meeting_m2m_serviceorder
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_m2m_serviceorder
                ADD FOREIGN KEY (serviceorder_id)
                REFERENCES public.serviceorder (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.meeting_m2m_user;DROP TABLE IF EXISTS public.meeting_m2m_user;DROP TABLE IF EXISTS public.meeting_m2m_user;DROP TABLE IF EXISTS public.meeting_m2m_user;DROP TABLE IF EXISTS public.meeting_m2m_user;DROP TABLE IF EXISTS public.meeting_m2m_serviceorder;
DROP TABLE public.meeting;

