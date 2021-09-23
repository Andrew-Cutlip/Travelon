FROM python:3.9

WORKDIR /home

COPY . .

RUN pip install requirements.txt