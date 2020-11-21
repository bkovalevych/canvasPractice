import {SignUpForm} from "./signUpForm";
import get from "lodash/get";
import {signInAction, signUpAction} from "../../../redux/actions/user";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
    return {
        isSignedUp: get(state, "user.isSignedUp", false),
        fetching: get(state, "user.fetching", false),
        errors: get(state, "user.errors", {}),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    signUp: (props) => dispatch(signUpAction(props)),
    signIn: (props) => dispatch(signInAction(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);