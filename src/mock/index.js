import Mock from 'mockjs'
import { userLogin } from './mock.userLogin.js'

var bfwMocks = [];
/* istanbul ignore next */
function addToMock(list) {
  list.forEach(n => {
    if (n.method) {
      bfwMocks.push(n)
    }
    if (n.path) {
      Mock.mock(n.path, n.data)
    }
  })
}

addToMock(userLogin);

/* istanbul ignore next */
if(bfwMocks.length !== 0) {
  bfwMocks.forEach(n => {
    Mock.mock('/api/_bfwajax.do?method=' + n.method, 'post', function() {
      return n.data;
    })
  })
}

export default Mock;
