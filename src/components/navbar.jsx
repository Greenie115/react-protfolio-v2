import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { NavLink } from 'react-router-dom';

function samePageLinkNavigation(event) {
    if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        event.shiftKey
    ) {
        return false;
    }
    return true;
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                if (samePageLinkNavigation(event)) {
                    event.preventDefault();
                }
            }}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}

LinkTab.propTypes = {
    selected: PropTypes.bool,
};

function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        if (
            event.type !== 'click' ||
            (event.type === 'click' && samePageLinkNavigation(event))
        ) {
            setValue(newValue);
        }
    };

    return (
        <Box sx={{
            width: '100%', 
            height: '10vh',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            position: 'relative',
            top: 0,
            bgcolor: 'white'
        }}>
            <Tabs 
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
            <nav>
                <NavLink label="Home" to='/'>Home</NavLink>
                <NavLink label="About Me" to='/aboutMe'>About Me</NavLink>
                <NavLink label="Projects" to='/projects'> Projects</NavLink>
                </nav>
                {/* <NavLink label="CV"  />
                <NavLink label="Contact Me" /> */}
            </Tabs>
        </Box>
    );
}

export default NavBar;