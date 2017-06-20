import { FB_LOADED, GOOGLE_LOADED } from '../action/script'

const init = {
    fb: false,
    google: false,
}

function script(state = init, action){
    switch (action.type){
        case FB_LOADED:
            return {...state, fb: true }
        case GOOGLE_LOADED:
            return {...state, google: true }
        default:
            return state
    }
}

export default script