import Basket from "./basket";
import get from "lodash/get";
import { connect } from "react-redux";
import {updateBasket} from "../../redux/actions/goods"
export const mapStateToProps = (state) => {
    return {
        basket: get(state, "goods.basket", [])
    };
};

export const mapDispatchToProps = (dispatch) => ({
    updateBasket: (props) => dispatch(updateBasket(props))
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);