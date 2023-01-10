import Gun from "gun";

const gun = Gun([
  'http://localhost:8765/gun',
  'https://gun-manhattan.herokuapp.com/gun'
]);

const copy = gun.get('test').get('paste');

