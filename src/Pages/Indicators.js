import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";
import StepOne from "../Components/StepOne";
import StepTwo from "../Components/StepTwo";
import StepThree from "../Components/StepThree";

export default function Indicators() {
  const [currentStep, setCurrentStep] = useState(0);

  const getSteps = () => {
    switch (currentStep) {
      case 0:
        return <StepOne onClick={() => setCurrentStep((prev) => prev + 1)} />;
      case 1:
        return <StepTwo onClick={() => setCurrentStep((prev) => prev + 1)} />;
      case 2:
        return <StepThree onClick={() => setCurrentStep((prev) => prev + 1)} />;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stepper
        sx={{
          position: "absolute",
          left: 200,
          height: "50%",
          "& .MuiStepConnector-line": {
            minHeight: "100%",
          },
        }}
        activeStep={currentStep}
        orientation="vertical"
      >
        <Step key={0}>
          <StepLabel onClick={() => setCurrentStep(0)}>Movie Name</StepLabel>
        </Step>
        <Step key={1}>
          <StepLabel onClick={() => setCurrentStep(1)}>Movie Content</StepLabel>
        </Step>
        <Step key={2}>
          <StepLabel onClick={() => setCurrentStep(2)}>Movie Cast</StepLabel>
        </Step>
      </Stepper>

      {getSteps()}
    </Box>
  );
}
