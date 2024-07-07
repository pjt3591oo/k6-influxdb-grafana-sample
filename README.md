# k6 loadtest & influxdb/grafana visualize

* run simple server

```bash
$ cd simple-server

$ npm i

# use port: 8080
$ npm run 
```

* run influxdb, grafana

```bash
$ docker-compose up
```

* run loadtest

```bash
$ k6 run --out influxdb=http://localhost:8086/k6_loadtest app-test.js
```

* grafana setup

`http://localhost:3000` 접속 후 로그인, user/password는 `admin/admin`

1. datasource 추가

[connections] - [Data sources] - [add new data source] - [input influxdb]

url: http://influxdb:8086, database: k6_loadtest 입력 후 Save & test 클릭

(grafana컨테이너 influxDB에서 컨테이너로 통신하기 때문에 localhost가 아닌 컨테이너 이름을 넣어준다.)

2. 대시보드 생성

[dashboards] - [import] - [https://grafana.com/grafana/dashboards/2587-k6-load-testing-results/]