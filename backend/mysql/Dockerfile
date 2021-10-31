FROM mysql:5.7

# MySQL config file
COPY ./conf /etc/mysql/conf.d/:ro

# 初期データ用SQL
COPY ./sql /docker-entrypoint-initdb.d