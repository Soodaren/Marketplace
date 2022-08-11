import React from "react";
import './header.css';
import logo from '../../images/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from "@material-ui/core/Badge";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from '@mui/icons-material/Close';
import {connect, useDispatch} from "react-redux";
import {openCart} from "../../actions/cartActions";

function Header(props) {
    const {
        showCart
    } = props

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const dispatch = useDispatch();

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="logo" alt="logo"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list">
                                Articles
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact US
                            </a>
                        </li>
                    </ul>
                    <div className="cart">
                        <Badge color="secondary" badgeContent="1">
                            <ShoppingCartIcon onClick={dispatch(openCart(showCart))}/>
                        </Badge>
                    </div>
                </div>
            </nav>

            <Dialog
                open={showCart}
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description"
            >
                <CloseIcon style={{marginLeft: "auto"}}/>
                <DialogTitle>Cart</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        showCart: state.showCart
    }
}

export default connect(mapStateToProps)(Header);
