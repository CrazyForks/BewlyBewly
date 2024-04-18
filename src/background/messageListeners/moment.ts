import type { APIMAP } from '../utils'
import { AHS } from '../utils'

const API_MOMENT: APIMAP = {
  getTopBarNewMomentsCount: {
    url: 'https://api.bilibili.com/x/web-interface/dynamic/entrance',
    _fetch: {
      method: 'get',
    },
    params: {},
    afterHandle: AHS.J_D,
  },
  getTopBarMoments: {
    url: 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/nav',
    _fetch: {
      method: 'get',
    },
    params: {
      type: 'video',
      update_baseline: '',
      offset: '',
    },
    afterHandle: AHS.J_D,
  },
  getTopBarLiveMoments: {
    url: 'https://api.live.bilibili.com/xlive/web-ucenter/v1/xfetter/FeedList',
    _fetch: {
      method: 'get',
    },
    params: {
      page: 1,
      pagesize: 10,
    },
    afterHandle: AHS.J_D,
  },
  getMoments: {
    url: 'https://api.bilibili.com/x/polymer/web-dynamic/v1/feed/all',
    _fetch: {
      method: 'get',
    },
    params: {
      type: 268435455,
      offset: 0,
      update_baseline: 0,
    },
    afterHandle: AHS.J_D,
  },

}

export default API_MOMENT
