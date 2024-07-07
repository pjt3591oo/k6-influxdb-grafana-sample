# k6 loadtest & influxdb/grafana visualize

* run simple server

```bash
$ cd simple-server

$ npm i

# use port: 3001
$ npm run 
```

* run influxdb, grafana

```bash
$ docker-compose up
```

* run loadtest

```bash
$ k6 run --out influxdb=http://localhost:8086/k6_loadtest app.js
```

* grafana setup

`http://localhost:3000` 접속 후 user/password는 `admin/admin`

1. datasource 추가

[connections] - [Data sources] - [add new data source] - [input influxdb]

url: http://localhost:8086, database: k6_loadtest 입력 후 Save & test 클릭

2. 대시보드 생성

[dashboards] - [import] - [https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/]