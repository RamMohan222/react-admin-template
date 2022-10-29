import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import Pagenation from '../common/Pagination'
import { Box } from "@mui/system";

import Card from '../common/Card'

export default function Sales() {
    const handleChange = (name) => (e) => {
        console.log('form')
    }
    return (
        <>
            <Paper elevation={0} style={{ margin: '20px' }}>
                <Toolbar style={{ padding: '20px' }}>
                    <FormControl sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-search-action">Search Action</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-search-action"
                            value={"abc"}
                            onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            label="Search Action"
                        />
                    </FormControl>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Paper elevation={0} variant='outlined' style={{ marginRight: '20px' }}>
                        <Pagenation />
                    </Paper>
                    <Paper elevation={0} variant='outlined' style={{ marginRight: '20px' }}>
                        <div style={{ padding: '8px' }}>
                            <Button variant="outlined" style={{ color: "#f50057", borderColor: "#f50057" }}>UPCOMING</Button>
                            {"  "}
                            <Button variant="contained" style={{ color: '#fff', backgroundColor: "#f50057" }}>ALL</Button>
                        </div>
                    </Paper>
                    <Paper elevation={0} variant='outlined'>
                        <div style={{ padding: '6px' }}>
                            <IconButton
                                size="medium"
                                color="primary"
                            >
                                <AppsIcon />
                            </IconButton>
                            <IconButton
                                size="medium"
                                sx={{color: "#f50057"}}
                            >

                                <ListIcon />
                            </IconButton>
                        </div>
                    </Paper>
                </Toolbar>
            </Paper>

            <Grid container
                style={{ paddingRight: '20px', paddingLeft: '20px' }}
                spacing={{ xs: 4, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                alignItems="center"
                justifyContent="center"
            >
                {new Array(10).fill(0)
                    .map((_, i) => (<Grid item xs={4} key={`grid_${i}`}>
                        <Card data={i} />
                    </Grid>))}
            </Grid>
        </>
    );
}