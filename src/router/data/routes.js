import IndexNew from '@pages/indexNew'
import supplyDemand from '@pages/supplyDemand'
import Evaluation from '@pages/evaluation'
/**
 * 路由数据模型
 * @author hjf4659
 */
const routes = [
  {
    path: '/indexNew',
    component: IndexNew,
    meta: {
      fullScreen: false,
      requireAuth: false,
      menuName: 'indexNew'
    }
  },
  {
    path: '/supplyDemand',
    component: supplyDemand,
    meta: {
      fullScreen: false,
      requireAuth: false,
      menuName: 'supplyDemand'
    }
  },
  {
    path: '/Evaluation',
    component: Evaluation,
    meta: {
      fullScreen: false,
      requireAuth: false,
      menuName: 'evaluation'
    }
  },
  {
    path: '/*',
    redirect: '/indexNew'
  }
]

export default routes;
