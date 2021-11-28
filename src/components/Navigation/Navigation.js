import React from 'react';
import classes from './Navbar.module.css';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className={classes.navbar}>
                    <h3 className={classes.brand}>BRAND LOGO</h3>
                    <div className={classes.navlinks}>
                        <button className={classes.btns} onClick={onButtonSubmit}>
                            Get Users
                        </button>
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
