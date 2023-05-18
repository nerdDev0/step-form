import * as React from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {PersonalInfo} from './PersonalInfo';
import {PersonalInfo2} from './PersonalInfo2';
import Password from './Password';
import Description from './Description';





export default function FormStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const label=["مشخصات فردی","مشخصات فردی","رمز عبور","سایر"];
    const formDisplay=()=>{
if(activeStep===0){
    return <PersonalInfo />
}
else if(activeStep===1){
  return <PersonalInfo2/>
}
else if(activeStep===2){
    return <Password/>
}else if(activeStep===3){
    return <Description/>
}
    }
   

  const maxSteps = label.length 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (

<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  height='100vh'
>

    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '104%',
          height: 50,
          pr: 2,
          bgcolor: '#757575',
          color:'#ffe',
          direction:'rtl',
          textAlign:'right'
        }}
      >
        <Typography>{label[activeStep]}</Typography>
      </Paper>
      <Box sx={{ minHeight:255,height:"auto", maxWidth: 400, width: '100%', p: 2, color:'#333',display:'grid',alignItems:"center" }}>
        {formDisplay()}
      </Box>
      <MobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
      color=''
        activeStep={activeStep}
        nextButton={
          <Button
          sx={{color:'#757575'}}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
          بعد
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button sx={{color:'#757575'}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            قبل
          </Button>
        }
      />
    </Box>
    </Grid>
  );
}