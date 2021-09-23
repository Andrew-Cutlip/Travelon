FROM python:3.9

WORKDIR /home

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && python ./src/main.py