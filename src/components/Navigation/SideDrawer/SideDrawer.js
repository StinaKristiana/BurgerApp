import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer,classes.Close];
	if(props.open) {
attachedClasses = [classes.SideDrawer,classes.Close]
	}
	return (
		<Aux>
			<Backdrop show={props.open} clicked={props.closed} />
			<div className={attachedClasses.join(' ')}>
				<div class={classes.Logo} className={classes.Logo}>
					<Logo />
				</div>

				<nav>
					<NavigationItems />
				</nav>
			</div>
		</Aux>
	);
};

export default sideDrawer;
