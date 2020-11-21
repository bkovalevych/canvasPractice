import {Profile} from "./profile";
import get from "lodash/get";
import {connect} from "react-redux";
import {signInAction, signUpAction} from "../../redux/actions/user";

export const mapStateToProps = (state) => {
    return {
        email: get(state, "user.email", "@Username"),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    signUp: (props) => dispatch(signUpAction(props)),
    signIn: (props) => dispatch(signInAction(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);