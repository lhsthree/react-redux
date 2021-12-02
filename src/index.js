import store from "./redux"
import {changeCount} from "./redux/count"
import {addFavoriteThing, removeFavoriteThing} from "./redux/favoriteThings"
import {setYouTubeTitle, incrementViewCount, upvoteVideo, downvoteVideo} from "./redux/youTubeVideo"
import {setUserDetails, removeUserDetails} from "./redux/user"

store.dispatch(setUserDetails({
    firstName: "Louis",
    lastName: "Steimel",
    id: 1,
    email: "lhsthree@gmail.com"
}))

store.dispatch(changeCount(42))
store.dispatch(addFavoriteThing("Door bells"))
store.dispatch(addFavoriteThing("Sleigh bells"))
store.dispatch(removeFavoriteThing("door bells"))
store.dispatch(setYouTubeTitle("Learning Redux is Fun!"))
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(incrementViewCount())
store.dispatch(upvoteVideo())
store.dispatch(downvoteVideo())
store.dispatch(removeUserDetails())
