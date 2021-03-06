import {handleActions} from 'redux-actions'
import {UPDATE_SCROLL, UPDATE_SCROLL_ACTIVENAV} from '../types/index'

export default handleActions({
  [UPDATE_SCROLL](state, action) {
    return {...state, ...action.payload}
  },
  [UPDATE_SCROLL_ACTIVENAV](state, action) {
    console.log('更新标记',action.payload)
    return {...state, ...action.payload}
  }
}, {
  activateNavgationId: 'nav1', // 激活导航的ID
  scrollIntoViewId: 'scroll1', // 商品列表滚动到某ID
  scrollObserveToggle: true // 滚动事件监听开关
})