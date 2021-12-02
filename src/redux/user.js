export function setUserDetails(user) {
	return {
		type: "SET_USER_DETAILS",
		payload: user
	}
}

export default function userReducer(user = {}, action) {
	switch(action.type) {
		case "SET_USER_DETAILS":
			return {
				...user,
				...action.payload
			}
		default:
			return user
	}
}