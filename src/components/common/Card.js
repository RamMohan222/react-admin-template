import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';

export default function MediaCard({ data }) {
  return (
    <>
      <div className={data % 2 === 0 ? 'ribbon ribbonRed' : 'ribbon ribbonBlue'}>{data % 2 ? "TIMED" : "LIVE"}</div>
      <Card className='app-card'>
        <CardContent>
          <Typography variant="h6" align='center' color='primary'>
            TEST {data}
            <IconButton
              size="small"
              sx={{ color: "#f50057", float: 'right'}}
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </Typography>
          <Typography variant="overline" color="text.secondary">
            <div style={{textAlign:'center'}}>
                SEPTEMBER 15, 2021 - APRIL 13, 2022
            </div>
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image="https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
          alt="green iguana"
          style={{ objectFit: 'cover', height: '216px' }}
        />
        <CardActions
          style={{
            //justifyContent: 'center', 
            alignItems: 'center',
            display: 'flex',
            padding: '15px',
          }}
        >
          <Button size="small">EDIT</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="small">LOTS</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="small">IMPORT LOTS</Button>
          <Divider orientation="vertical" flexItem />
          <Button size="small">VIEW REPORTS</Button>
        </CardActions>
      </Card>
    </>
  );
}
