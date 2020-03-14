import {
    SET_DETAILS, SET_PLAYBACK_STATE, SET_CURRENT_TIME,
    SET_TOTAL_TIME, SET_JUMP_TO_TIME_LAST_UPDATE
} from "../actionTypes/video"

const initialState = {
    details: null,
    playbackState: 'paused',
    currentTime: 0,
    totalTime: 0,
    jumpToTimeLastUpdate: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PLAYBACK_STATE:
            return {
                ...state,
                playbackState: action.payload
            }

        case SET_DETAILS:
            return {
                ...state,
                details: action.payload
            }

        case SET_CURRENT_TIME:
            return {
                ...state,
                currentTime: action.payload
            }

        case SET_TOTAL_TIME:
            return {
                ...state,
                totalTime: action.payload
            }

        case SET_JUMP_TO_TIME_LAST_UPDATE:
            return {
                ...state,
                jumpToTimeLastUpdate: action.payload
            }

        default:
            return state
    }
}
