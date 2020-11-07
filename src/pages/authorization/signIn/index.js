import {SignInForm} from "./signInForm";
import get from "lodash/get";
import { signInAction } from "../../../redux/actions/user";
import { connect } from "react-redux";

export const mapStateToProps = (state) => {
    return {
        fetching: get(state, "user.fetching", false),
        errors: get(state, "user.errors", {}),
    };
};

export const mapDispatchToProps = (dispatch) => ({
    signIn: (props) => dispatch(signInAction(props)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);