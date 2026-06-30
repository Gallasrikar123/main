FROM postgres:16

ENV POSTGRES_DB=quickbytes
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres

COPY *.sql  /docker-entrypoint-initdb.d/

EXPOSE 5432
