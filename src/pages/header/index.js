import {Header} from "./header";
import get from "lodash/get";
import { connect } from "react-redux";


export const mapStateToProps = (state) => {
    return {
        isLoggedIn: get(state, "user.isLoggedIn", false)
    };
};

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);