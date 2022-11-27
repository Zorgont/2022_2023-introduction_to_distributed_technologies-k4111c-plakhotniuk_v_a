import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { target: 300, duration: '5s' },
    { target: 500, duration: '120s' },
    { target: 0, duration: '30s' },
  ],
};

export default function () {
  const result = http.get('http://app-service:9090');
  check(result, {
    'http response status code is 200': result.status === 200,
  });
}
