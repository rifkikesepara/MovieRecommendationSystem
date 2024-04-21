import { Box, Stepper, Step, StepLabel } from "@mui/material";
import { useState } from "react";
import StepOne from "../Components/StepOne";
import StepTwo from "../Components/StepTwo";
import StepThree from "../Components/StepThree";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export default function Indicators() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const getSteps = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepOne
            formik={formik}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          />
        );
      case 1:
        return (
          <StepTwo
            formik={formik}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          />
        );
      case 2:
        return (
          <StepThree
            formik={formik}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          />
        );
    }
  };

  const formik = useFormik({
    initialValues: {
      movieName: "",
      movieGenre: "",
      movieYear: [0, 1],
      movieDirector: "",
      movieCast: [],
    },
    onSubmit: (values) => {
      console.log(values);
      localStorage.setItem("indicators", JSON.stringify(values));
      navigate("../search");
    },
  });

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
          left: "5%",
          height: "50%",
          "& .MuiStepConnector-line": {
            minHeight: "100%",
          },
          "& .MuiStepLabel-label": {
            fontSize: 20,
          },
        }}
        activeStep={currentStep}
        orientation="vertical"
      >
        <Step key={0} sx={{ "&:hover": { cursor: "pointer" } }}>
          <StepLabel onClick={() => setCurrentStep(0)}>Movie Name</StepLabel>
        </Step>
        <Step key={1} sx={{ "&:hover": { cursor: "pointer" } }}>
          <StepLabel onClick={() => setCurrentStep(1)}>Movie Content</StepLabel>
        </Step>
        <Step key={2} sx={{ "&:hover": { cursor: "pointer" } }}>
          <StepLabel onClick={() => setCurrentStep(2)}>
            Movie Cast <b>(Optional)</b>
          </StepLabel>
        </Step>
      </Stepper>
      <form onSubmit={formik.handleSubmit}>{getSteps()}</form>
    </Box>
  );
}
