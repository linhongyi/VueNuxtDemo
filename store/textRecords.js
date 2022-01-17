export const state = () => ({
    dataRecord: []
  })
  
  export const mutations = {
    addRecord(state, text) {
        console.log('text:',text)
      state.dataRecord.push(text)
    },
    removeRecord(state, { record }) {
      state.dataRecord.splice(state.dataRecord.indexOf(record), 1)
    },
    removeAll(state) {
        console.log('removeAll')
      state.dataRecord = []
    }
  }