import {
  Box,
  Stepper,
  Step,
  StepLabel,
  useMediaQuery,
  Typography,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import StepOne from "../Components/StepOne";
import StepTwo from "../Components/StepTwo";
import StepThree from "../Components/StepThree";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import usePreferences from "../Hooks/usePreferences";

export default function Indicators() {
  const navigate = useNavigate();
  const { theme } = usePreferences();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("recommendation", JSON.stringify([]));
  }, []);

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
      // console.log(values);
      sessionStorage.setItem("indicators", JSON.stringify(values));
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
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stepper
        sx={{
          position: "absolute",
          left: matches && "5%",
          top: !matches && "10%",
          height: matches && "50%",
          "& .MuiStepConnector-line": {
            minHeight: "100%",
          },
          "& .MuiStepLabel-label": {
            fontSize: matches ? 20 : 15,
          },
        }}
        alternativeLabel={!matches ? true : false}
        activeStep={currentStep}
        orientation={matches ? "vertical" : "horizontal"}
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
      <Stack sx={{ width: "100%" }}>
        {matches && (
          <Typography
            textAlign={"center"}
            color={"primary"}
            variant={matches ? "h2" : "h4"}
          >
            Movie Recommendation System
          </Typography>
        )}
        <form onSubmit={formik.handleSubmit}>{getSteps()}</form>
      </Stack>
    </Box>
  );
}
