import types from './types';


const add = (item, itemCategory) => ({
    type: types.ADD_POINT, item, itemCategory
})

const reset = item => ({
    type: types.RESET_POINTS, item
})


export default {
    add,
    reset,
}