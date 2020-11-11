import {Header} from "./header";
import get from "lodash/get";
import { connect } from "react-redux";
import {logoutAction} from "../../redux/actions/user";


export const mapStateToProps = (state) => {
    return {
        isLoggedIn: get(state, "user.isLoggedIn", false),
        email: get(state, "user.email", "@Username")
    };
};

export const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);