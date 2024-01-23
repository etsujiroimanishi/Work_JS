const { createApp } = Vue
import TreeItem from './TreeItem.js'

const treeData = {
  name: '機械力学',
  children: [
    { name: '回転体' },
    { name: '鉄道車両' },
    {
      name: '建設機械',
      children: [
        {
          name: '油圧ショベル',
          children: [{ name: 'アッパ' }, { name: 'ロワー' }]
        },
        { name: 'ホイールローダ' },
        { name: '走行' },
        {
          name: 'クレーン',
          children: [{ name: 'クローラ' }, { name: 'タワークレーン' }]
        }
      ]
    }
  ]
}

createApp({
  components: {
    TreeItem
  },
  data() {
    return {
      treeData
    }
  }
}).mount('#app03')
