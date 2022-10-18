import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Tab, Tabs } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

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
    const match = useMatch({ path: '/*', caseSensitive:true });
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Tabs
                            value={paths[match.params['*']] || value}
                            onChange={handleChange}
                            // indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="action tabs"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "white"
                                }
                            }}
                        >
                            <Tab label="SALES" {...a11yProps(0)} component={Link} to="/sales" />
                            <Tab label="CREATE NEW SALE" {...a11yProps(1)} style={{ minWidth: '160px' }} component={Link} to="/create-new-sale" />
                            <Tab label="DASHBOARD" {...a11yProps(2)} component={Link} to="/dashboard" />
                            <Tab label="SETTING" {...a11yProps(3)} component={Link} to="/settings" />
                            <Tab label="REGISTARTIONS" {...a11yProps(4)} style={{ minWidth: '130px' }} component={Link} to="/registrations" />
                            <Tab label="USERS" {...a11yProps(5)} component={Link} to="/users" />
                        </Tabs>
                        <Box sx={{ flexGrow: 0.1 }}></Box>
                        <Button size="large" aria-label="logout" style={{ backgroundColor: 'white', color: 'blue' }}>
                            LOGOUT
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
