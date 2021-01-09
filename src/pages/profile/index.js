import {Profile} from "./profile";
import get from "lodash/get";
import {connect} from "react-redux";
import {getUserAction} from "../../redux/actions/user";

export const mapStateToProps = (state) => {
    return {
        email: get(state, "user.email", "@Username"),
        isGetUserFetched: get(state,"user.isGetUserFetched", false),
        firstName: get(state, "user.firstName", ""),
        lastName: get(state, "user.lastName", ""),
        fetching: get(state, "user.fetching", false),
        errors: get(state, "user.errors", {}),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    getProfile: (props) => dispatch(getUserAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);