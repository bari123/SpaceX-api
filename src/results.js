import { LoadMission1 } from "./queries/query";
import React from 'react';
import { useQuery } from "@apollo/client";
import { Box, Typography,CardMedia } from "@material-ui/core";
import { Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UseLazyGetQuery = ({ closeModal, datas1 }) => {

    var launch = datas1;
    console.log(datas1);
    const { loading, error, data } = useQuery(LoadMission1, {
        variables: { launch }
    });


    if (loading) { return <div><p>Loading....</p></div>; }
    if (error) { return <div><p>eror</p></div> }

    return (

        <div>

            <Modal
                open={true}
                onClose={() => closeModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div >
                    {data.launchesPast.map(({ launch_site,mission_name,id,ships }) => (
                        <Box sx={style} key={id} >
                            <Typography id="modal-modal-title" variant="h6" component="h2">{mission_name}</Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>{launch_site.site_name}</Typography>
                            <CardMedia component="img" height="100" width="100" image={ships.image} alt={ships.id}/>
                        </Box>
                    ))
                    }
                </div>
            </Modal>
        </div>
    )
}

export default UseLazyGetQuery;