import {Header} from "./header";
import get from "lodash/get";
import { connect } from "react-redux";
import {logoutAction} from "../../redux/actions/user";


export const mapStateToProps = (state) => {
    return {
        countGoodsInBasket: get(state, "goods.count", 0)
    };
};

export const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logoutAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);