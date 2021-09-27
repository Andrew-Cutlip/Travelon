FROM python:3.9

WORKDIR /home

COPY . .

RUN pip install -r requirements.txt

EXPOSE $PORT

CMD python ./src/main.py $PORT