const mutations = {
    setCarData(state, data) {
        console.log('commit setCarData', data)
        state.carData = data
    }
}

export default mutations