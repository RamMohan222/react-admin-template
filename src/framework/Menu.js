import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Tab, Tabs } from '@mui/material';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/login';

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
        key: `menu-tab-${index}`
    };
}

const paths = {
    "sales": 0,
    "create-new-sale": 1,
    "dashboard": 2,
    "settings": 3,
    "registrations": 4,
    "users": 5,
}

export default function Menu() {
    const match = useMatch({ path: '/*', caseSensitive: true });
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let auth = useAuth();
    let navigate = useNavigate();

    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <img alt='logo' loading='lazy' src='./logo.png' height='50px' />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Tabs
                        value={paths[match.params['*']] || value}
                        onChange={handleChange}
                        // indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "white"
                            }
                        }}
                    >
                        <Tab label="SALES" {...a11yProps(0)} component={Link} to="/sales" />
                        <Tab label="CREATE NEW SALE" {...a11yProps(1)} style={{ minWidth: '170px' }} component={Link} to="/create-new-sale" />
                        <Tab label="DASHBOARD" {...a11yProps(2)} component={Link} to="/dashboard" />
                        <Tab label="SETTING" {...a11yProps(3)} component={Link} to="/settings" />
                        <Tab label="REGISTARTIONS" {...a11yProps(4)} style={{ minWidth: '130px' }} component={Link} to="/registrations" />
                        <Tab label="USERS" {...a11yProps(5)} component={Link} to="/users" />
                    </Tabs>
                    <Box sx={{ flexGrow: 0.1 }}></Box>
                    <Button size="large"
                        aria-label="logout"
                        style={{
                            backgroundColor: 'white',
                            color: '#000',
                            borderRadius: '50px'
                        }}
                        onClick={() => {
                            auth.signout(() => navigate("/"));
                        }}
                        >
                        LOGOUT
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}
