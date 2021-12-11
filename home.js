import { LoadMission } from "./queries/query";
import React, { useState } from 'react'
import { Grid, Box, Typography, CardActionArea, CardMedia, CardContent, } from "@material-ui/core";
import { Card } from '@mui/material';
import { useQuery } from '@apollo/client'
import UseLazyGetQuery from "./results";


const GetData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [laun, setLaunch] = useState('');
  const handleclick = ({ launch_date_local }) => {
    setOpenModal(true);
    setLaunch(launch_date_local)
    console.log(launch_date_local)
  }

  const { loading, error, data } = useQuery(LoadMission);
  if (loading) { return <div><p>Loading...</p></div>; }
  if (error) { return <div><p>Error ... :(</p></div>; }

  return (

    <div style={{left:100,bgcolor:'red',right:100}} >

      <div style={{ top: 20, left: 20 }}>
        <img style={{ height: 450, width: '100%' }} alt="spaceX" src="https://www.spacex.com/static/images/share.jpg" />
      </div>
      <Box sx={{ width: '100%', height: '100%' }}>
        {openModal && <UseLazyGetQuery closeModal={setOpenModal} datas1={laun} />}
        <Grid
        left='10'
          width='90%'
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          {data.launchesPast.map(({ mission_name, launch_date_local, id, links, launch_site }) => (
            <Grid item xs={2} key={id} >
              <Card  >
                <CardActionArea onClick={() => handleclick({ launch_date_local })} >
                  <CardMedia
                    component="img"
                    height="500"
                    image={links.mission_patch}
                    alt={mission_name} />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" >
                      {mission_name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Grid>
          ))
          }

        </Grid>
      </Box>

    </div>





  )

}


export default GetData;