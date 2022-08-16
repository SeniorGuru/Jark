import React from "react";

// Material-UI
import { Grid, Box, Typography, Button } from "@mui/material";

// Types
import { WireframeProps } from "../../types/wireframe";

// Assets
import { ReactComponent as TeethSvg } from "../../assets/images/bg/teeth-with-dots.svg";

// =============================|| TEETH WIREFRAME ||============================= //

const Wireframe = ({ visible_txt, visible_btn }: WireframeProps) => (
  <>
    {/* UPPER TEETH */}
    <Box className="top-box">
      {visible_txt === false ? (
        <Typography variant="h2" align="center">
          {}
        </Typography>
      ) : (
        <></>
      )}
      {visible_btn !== false ? (
        <Button variant="contained" className="global-button" disableElevation>
          APPLY FOR ENTIRE MOUTH
        </Button>
      ) : (
        <></>
      )}
    </Box>

    {/* TEETH SVG IMAGE */}
    <Grid container direction="row" justifyContent="space-between">
      <Grid item xs={1} className="middle-left">
        <Typography variant="h5">R</Typography>
      </Grid>
      <Grid item xs={10}>
        <TeethSvg />
      </Grid>
      <Grid item xs={1} className="middle-right">
        <Typography variant="h5">L</Typography>
      </Grid>

      {visible_btn !== false ? (
        <Button variant="contained" className="upper-button" disableElevation>
          SELECT UPPER TEETH
        </Button>
      ) : (
        <></>
      )}

      {visible_btn !== false ? (
        <Button variant="contained" className="lower-button" disableElevation>
          SELECT LOWER TEETH
        </Button>
      ) : (
        <></>
      )}

      <Typography variant="h1" align="center" className="selected-tooth">
        {}
      </Typography>
    </Grid>

    {/* LOWER TEETH */}
    <Box className="bottom-box">
      {visible_txt === false ? (
        <Typography variant="h2" align="center">
          {}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  </>
);

export default Wireframe;
