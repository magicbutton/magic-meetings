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
    ,tenant character varying COLLATE pg_catalog."default" NOT NULL
    ,name character varying COLLATE pg_catalog."default" NOT NULL
    ,description character varying COLLATE pg_catalog."default" NOT NULL
    ,start character varying COLLATE pg_catalog."default" NOT NULL
    ,duration character varying COLLATE pg_catalog."default" NOT NULL
    ,location character varying COLLATE pg_catalog."default" NOT NULL
    ,organizer_id int  NOT NULL
    ,status character varying COLLATE pg_catalog."default" NOT NULL
    ,exchangereference character varying COLLATE pg_catalog."default" NOT NULL
    ,exchangestatus character varying COLLATE pg_catalog."default" NOT NULL
    ,teamsreference character varying COLLATE pg_catalog."default" NOT NULL
    ,teamsstatus character varying COLLATE pg_catalog."default" NOT NULL


);

                ALTER TABLE IF EXISTS public.meeting
                ADD FOREIGN KEY (organizer_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_participants_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,user_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_participants_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_participants_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_guests_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,user_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_guests_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_guests_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_viewers_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,user_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_viewers_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_viewers_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_presenters_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,user_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_presenters_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_presenters_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_hosts_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,user_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_hosts_user
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_hosts_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                CREATE TABLE public.meeting_serviceorders_serviceorder (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                deleted_at timestamp with time zone
                    ,meeting_id int  NOT NULL

                    ,serviceorder_id int  NOT NULL


                );
            

                ALTER TABLE public.meeting_serviceorders_serviceorder
                ADD FOREIGN KEY (meeting_id)
                REFERENCES public.meeting (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.meeting_serviceorders_serviceorder
                ADD FOREIGN KEY (serviceorder_id)
                REFERENCES public.serviceorder (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.meeting_participants_user;DROP TABLE IF EXISTS public.meeting_guests_user;DROP TABLE IF EXISTS public.meeting_viewers_user;DROP TABLE IF EXISTS public.meeting_presenters_user;DROP TABLE IF EXISTS public.meeting_hosts_user;DROP TABLE IF EXISTS public.meeting_serviceorders_serviceorder;
DROP TABLE public.meeting;

