# Campaign Monitor Tech Test

Welcome!

## Setup

```sh
# to set up dependencies...
npm install

# to run unit tests for questions 1-4, 7 and 8
npm test
```

### Docker container (for testing questions 5 and 6)

I used the below command to setup a MySQL Docker container, specifically for
testing questions 5 and 6.

```sh
docker run \
  -p 0.0.0.0:8888:3306 \
  --name cm-tech-test-db \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_USER=cm-dev \
  -e MYSQL_PASSWORD=password \
  -e MYSQL_DATABASE=cm \
  -d mysql:5.7.20
```

I've included a `dump.sql`, which contains the tables I used to test this
project (and the view created in question 6B). To import this, simply run:

```sh
# (the spacing is intentional)
docker exec -i cm-tech-test-db sh -c 'exec mysql -uroot -ppassword -D cm' < dump.sql
```

The database connection string is:

```
mysql://root:password@127.0.0.1:8888/cm
```

## Assumptions

The answers for questions 5 and 6 were written with and tested on MySQL 5.

For question 8, the wording of the question wasn't very clear, but I assumed
that that the input of the function might be an HTML string. As such, I built
the final `validateAllURLs` function to support both DOM elements and also HTML
strings, returning the same object format regardless.

## Answers to Behavioural Questions

You can find answers to the behavioural questions in the file
`behavioural-questions.md`.
