import React, { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { v4 } from "uuid";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from "@mui/material/Checkbox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useDispatch, useSelector } from "react-redux";
import { JobFormSliceActions } from "../store/jobFormDataSlices/jobForm";
import { Link } from "react-router-dom";
import { SuccessMsgActions } from "../store/SuccessMsg";
import FormSubmitMsg from "./FormSubmitMsg";

const currencies = [
  {
    value: "Select Role",
    label: "Role Applying For - Please select from drop down",
  },
  {
    value: "Electrician",
    label: "Electrician",
  },
  {
    value: "Mechinical Workder",
    label: "Mechinical Workder",
  },
  {
    value: "Cleaner",
    label: "Cleaner",
  },
  {
    value: "Mad Servent",
    label: "Mad Servent",
  },
  {
    value: "Cook",
    label: "Cook",
  },
  {
    value: "Construction Worker",
    label: "Construction Worker",
  },
  {
    value: "Plumber",
    label: "Plumber",
  },
  {
    value: "Welder",
    label: "Welder",
  },
  {
    value: "AC Technician",
    label: "AC Technician",
  },
];
const JobApplicationForm = () => {
  const success = useSelector((store) => store.success);
  let dispatch = useDispatch();
  let roleApplyingForField = useRef();
  let siaBadgeNoField = useRef();
  let siaExpiryDateField = useRef();
  let firstNameField = useRef();
  let lastNameField = useRef();
  let preferredNameFiled = useRef();
  let addressField = useRef();
  let presentAddressField = useRef();
  let previousAddressField = useRef();
  let streetAddressField = useRef();
  let countryBirthField = useRef();
  let cityField = useRef();
  let postCodeField = useRef();
  let phoneNoField = useRef();
  let emailField = useRef();
  let dateOfBirthField = useRef();
  let foreignLanguagesField = useRef();
  let carOwnerField = useRef();
  const [selectedValue, setSelectedValue] = useState("");
  let martialStatusField = useRef();
  const [selectedValue2, setSelectedValue2] = useState("");
  let drivingLicenceField = useRef();
  let nationalInsuranceField = useRef();
  let nationalityField = useRef();
  let heightField = useRef();
  let religionField = useRef();
  let emergencyContactField = useRef();
  let contactNoField = useRef();
  let relationshipField = useRef();
  let vettingPurposeField = useRef();
  const [selectedValue3, setSelectedValue3] = useState("");
  let firstAidField = useRef();
  const [selectedValue4, setSelectedValue4] = useState("");
  let companyNameField = useRef();
  let contactNameField = useRef();
  let phoneField = useRef();
  let employeeStartField = useRef();
  let employeeEndField = useRef();
  let yearWork5Field = useRef();
  let last10YearsField = useRef();
  const [selectedValue5, setSelectedValue5] = useState("");
  let schoolCollegeField = useRef();
  let offencesOutstandingField = useRef();
  const [selectedValue6, setSelectedValue6] = useState("");
  let fullDetailsField = useRef();
  let madeBankruptField = useRef();
  const [selectedValue7, setSelectedValue7] = useState("");
  let courtJudgementsField = useRef();
  const [selectedValue8, setSelectedValue8] = useState("");
  let referenceSelfField = useRef();
  const [selectedValue9, setSelectedValue9] = useState("");
  let householdServiceltdField = useRef();
  const [selectedValue10, setSelectedValue10] = useState("");
  let ukDrivingLicenceField = useRef();
  const [selectedValue11, setSelectedValue11] = useState("");
  let permitUKField = useRef();
  const [selectedValue12, setSelectedValue12] = useState("");
  let anytingElseField = useRef();
  const [selectedValue13, setSelectedValue13] = useState("");
  let HRPurposesField = useRef();
  const [selectedValue14, setSelectedValue14] = useState("");
  let carOwnerValGet = (e) => {
    carOwnerField.current = e.target.value;
    setSelectedValue(e.target.value);
  };
  let martialStatusValGet = (e) => {
    martialStatusField.current = e.target.value;
    setSelectedValue2(e.target.value);
  };
  let vettingPurposeValGet = (e) => {
    vettingPurposeField.current = e.target.value;
    setSelectedValue3(e.target.value);
  };
  let firstAidValGet = (e) => {
    firstAidField.current = e.target.value;
    setSelectedValue4(e.target.value);
  };
  let last10YearsValGet = (e) => {
    last10YearsField.current = e.target.value;
    setSelectedValue5(e.target.value);
  };
  let offencesOutstandingValGet = (e) => {
    offencesOutstandingField.current = e.target.value;
    setSelectedValue6(e.target.value);
  };
  let madeBankruptValGet = (e) => {
    madeBankruptField.current = e.target.value;
    setSelectedValue7(e.target.value);
  };
  let courtJudgementsValGet = (e) => {
    courtJudgementsField.current = e.target.value;
    setSelectedValue8(e.target.value);
  };
  let referenceSelfValGet = (e) => {
    referenceSelfField.current = e.target.value;
    setSelectedValue9(e.target.value);
  };
  let householdServiceltdValGet = (e) => {
    householdServiceltdField.current = e.target.value;
    setSelectedValue10(e.target.value);
  };
  let ukDrivingLicenceValGet = (e) => {
    ukDrivingLicenceField.current = e.target.value;
    setSelectedValue11(e.target.value);
  };
  let permitUKGetVal = (e) => {
    permitUKField.current = e.target.value;
    setSelectedValue12(e.target.value);
  };
  let anytingElseValGet = (e) => {
    anytingElseField.current = e.target.value;
    setSelectedValue13(e.target.value);
  };
  let HRPurposesValGet = (e) => {
    HRPurposesField.current = e.target.value;
    setSelectedValue14(e.target.value);
  };
  let handleBySumbitJobData = (e) => {
    e.preventDefault();
    let id = v4();
    let roleApplyingFor = roleApplyingForField.current.value;
    let siaBadgeNo = siaBadgeNoField.current.value;
    let siaExpiryDate = siaExpiryDateField.current.value;
    let firstName = firstNameField.current.value;
    let lastName = lastNameField.current.value;
    let preferredName = preferredNameFiled.current.value;
    let address = addressField.current.value;
    let presentAddress = presentAddressField.current.value;
    let previousAddress = previousAddressField.current.value;
    let streetAddress = streetAddressField.current.value;
    let countryBirth = countryBirthField.current.value;
    let city = cityField.current.value;
    let postCode = postCodeField.current.value;
    let phoneNo = phoneNoField.current.value;
    let email = emailField.current.value;
    let dateOfBirth = dateOfBirthField.current.value;
    let foreignLanguages = foreignLanguagesField.current.value;
    let carOwner = carOwnerField.current;
    let martialStatus = martialStatusField.current;
    let drivingLicence = drivingLicenceField.current.value;
    let nationalInsurance = nationalInsuranceField.current.value;
    let nationality = nationalityField.current.value;
    let height = heightField.current.value;
    let religion = religionField.current.value;
    let emergencyContact = emergencyContactField.current.value;
    let contactNo = contactNoField.current.value;
    let relationship = relationshipField.current.value;
    let vettingPurpose = vettingPurposeField.current;
    let firstAid = firstAidField.current;
    let companyName = companyNameField.current.value;
    let contactName = contactNameField.current.value;
    let phone = phoneField.current.value;
    let employeeStart = employeeStartField.current.value;
    let employeeEnd = employeeEndField.current.value;
    let yearWork5 = yearWork5Field.current.value;
    let last10Years = last10YearsField.current;
    let schoolCollege = schoolCollegeField.current.value;
    let offencesOutstanding = offencesOutstandingField.current;
    let fullDetails = fullDetailsField.current.value;
    let madeBankrupt = madeBankruptField.current;
    let courtJudgements = courtJudgementsField.current;
    let referenceSelf = referenceSelfField.current;
    let householdServiceltd = householdServiceltdField.current;
    let ukDrivingLicence = ukDrivingLicenceField.current;
    let permitUK = permitUKField.current;
    let anytingElse = anytingElseField.current;
    let HRPurposes = HRPurposesField.current;

    dispatch(
      JobFormSliceActions.jobFormShowAllData({
        id,
        roleApplyingFor,
        siaBadgeNo,
        siaExpiryDate,
        firstName,
        lastName,
        preferredName,
        address,
        presentAddress,
        previousAddress,
        streetAddress,
        countryBirth,
        city,
        postCode,
        phoneNo,
        email,
        dateOfBirth,
        foreignLanguages,
        carOwner,
        martialStatus,
        drivingLicence,
        nationalInsurance,
        nationality,
        height,
        religion,
        emergencyContact,
        contactNo,
        relationship,
        vettingPurpose,
        firstAid,
        companyName,
        contactName,
        phone,
        employeeStart,
        employeeEnd,
        yearWork5,
        last10Years,
        schoolCollege,
        offencesOutstanding,
        fullDetails,
        madeBankrupt,
        courtJudgements,
        referenceSelf,
        householdServiceltd,
        ukDrivingLicence,
        permitUK,
        anytingElse,
        HRPurposes,
      })
    );
    dispatch(SuccessMsgActions.successMsgShow());
    setTimeout(() => {
      dispatch(SuccessMsgActions.successMsgHide());
    }, 6000);

    setSelectedValue("");
    setSelectedValue2("");
    setSelectedValue3("");
    setSelectedValue4("");
    setSelectedValue5("");
    setSelectedValue6("");
    setSelectedValue7("");
    setSelectedValue8("");
    setSelectedValue9("");
    setSelectedValue10("");
    setSelectedValue11("");
    setSelectedValue12("");
    setSelectedValue13("");
    setSelectedValue14("");

    id = "";
    roleApplyingForField.current.value = "Select Role";
    siaBadgeNoField.current.value = "";
    siaExpiryDateField.current.value = "";
    firstNameField.current.value = "";
    lastNameField.current.value = "";
    preferredNameFiled.current.value = "";
    addressField.current.value = "";
    presentAddressField.current.value = "";
    previousAddressField.current.value = "";
    streetAddressField.current.value = "";
    countryBirthField.current.value = "";
    cityField.current.value = "";
    postCodeField.current.value = "";
    phoneNoField.current.value = "";
    emailField.current.value = "";
    dateOfBirthField.current.value = "";
    foreignLanguagesField.current.value = "";
    drivingLicenceField.current.value = "";
    nationalInsuranceField.current.value = "";
    nationalityField.current.value = "";
    heightField.current.value = "";
    religionField.current.value = "";
    emergencyContactField.current.value = "";
    contactNoField.current.value = "";
    relationshipField.current.value = "";
    companyNameField.current.value = "";
    contactNameField.current.value = "";
    phoneField.current.value = "";
    employeeStartField.current.value = "";
    employeeEndField.current.value = "";
    yearWork5Field.current.value = "";
    schoolCollegeField.current.value = "";
    fullDetailsField.current.value = "";
  };
  return (
    <>
      {success == true && <FormSubmitMsg />}
      <form onSubmit={handleBySumbitJobData}>
        <Box
          sx={{ flexGrow: 1, marginTop: "120px" }}
          className="container job-form-page"
        >
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <h1>
                <Link style={{ color: "black" }} to="/admin/job-form-data">
                  Household Ltd Job Application Form
                </Link>
              </h1>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className="every-text-field"
                size="small"
                id="outlined-select-currency"
                select
                inputRef={roleApplyingForField}
                label="Select"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={siaBadgeNoField}
                className="every-text-field"
                size="small"
                id="outlined-basic"
                label="SIA Badge  No."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <LocalizationProvider
                className="every-text-field"
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  inputRef={siaExpiryDateField}
                  className="small-date-picker"
                  label="SIA Expiry Date"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={firstNameField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={lastNameField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={preferredNameFiled}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Preferred Name (If different from the first name)"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={addressField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={presentAddressField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="How long have you lived at your 
present address?
"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                inputRef={previousAddressField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Previous Address:"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={streetAddressField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Street Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={countryBirthField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Place and Country of Birth"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={cityField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="City"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={postCodeField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Post Code"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={phoneNoField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Phone No."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type="email"
                inputRef={emailField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider
                className="every-text-field"
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  className="small-date-picker"
                  label="Date of Birth"
                  inputRef={dateOfBirthField}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={foreignLanguagesField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Foreign languages"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Car Owner*
                </FormLabel>
                <RadioGroup
                  onChange={carOwnerValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Martial Status:{" "}
                </FormLabel>
                <RadioGroup
                  onChange={martialStatusValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue2}
                >
                  <FormControlLabel
                    value="Single"
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="Married"
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="Divorced"
                    control={<Radio />}
                    label="Divorced"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={drivingLicenceField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Driving Licence No."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={nationalInsuranceField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="National Insurance No."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={nationalityField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Nationality"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={heightField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Build/ Height"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={religionField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Religion/ Belief"
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "23px", marginTop: "23px" }}>
                Please advise details of person to contact in case of emergency
                *
              </h2>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={emergencyContactField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Name of Emergency Contact"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={contactNoField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Contact No."
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={relationshipField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Emergency Contacts relationship to you?"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Are you able to provide us with a 5 Year checkable work /
                  education history for vetting purposes ? *
                </FormLabel>
                <RadioGroup
                  onChange={vettingPurposeValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue3}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  First Aid/ Fire Fighting Other Certificates:
                </FormLabel>
                <RadioGroup
                  onChange={firstAidValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue4}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid xs={12} style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "23px", marginTop: "23px" }}>
                Please provide the previous employment details *
              </h2>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={companyNameField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={contactNameField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Contact Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={phoneField}
                size="small"
                className="every-text-field"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider
                className="every-text-field"
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  inputRef={employeeStartField}
                  className="small-date-picker"
                  label="Employee Start Date"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider
                className="every-text-field"
                dateAdapter={AdapterDayjs}
              >
                <DatePicker
                  inputRef={employeeEndField}
                  className="small-date-picker"
                  label="Employment End Date (If applicable)"
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={yearWork5Field}
                className="every-text-field"
                id="outlined-multiline-static"
                label="Please use this box to include any further information regarding your 5 year work / education history. If you have been self-employed or unemployed please advise in this box with dates."
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Have you left education in the last 10 years?
                </FormLabel>
                <RadioGroup
                  onChange={last10YearsValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue5}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={schoolCollegeField}
                className="every-text-field"
                id="outlined-multiline-static"
                label="If you have left school, college or university in the last 10 years, please advise School Name / Location / Date you started and Date you left."
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Have you ever appeared before a court charged with a criminal,
                  civel or military offence and been convicted including any
                  motoring offences, have you any alleged offences outstanding?*
                </FormLabel>
                <RadioGroup
                  onChange={offencesOutstandingValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue6}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={fullDetailsField}
                className="every-text-field"
                id="outlined-multiline-static"
                label="If yes, please give full details:"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Have you been made bankrupt? *
                </FormLabel>
                <RadioGroup
                  onChange={madeBankruptValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue7}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Do you have any County Court Judgements *
                </FormLabel>
                <RadioGroup
                  onChange={courtJudgementsValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue8}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Do you object to the company contacting a credit agency with
                  reference to yourself *
                </FormLabel>
                <RadioGroup
                  onChange={referenceSelfValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue9}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Have you previously applied for or obtained a position with
                  this Household Services Ltd?
                </FormLabel>
                <RadioGroup
                  onChange={householdServiceltdValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue10}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  Do you possess a full, clean, current UK Driving Licence?{" "}
                </FormLabel>
                <RadioGroup
                  onChange={ukDrivingLicenceValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue11}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="I agree that I have read and understand the above statement."
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  I confirm that I have the right to remain and work in the UK
                  (A Right to Work Share code will be required for candidates
                  holding a Visa/Residence Permit/EU Passport).*
                </FormLabel>
                <RadioGroup
                  onChange={permitUKGetVal}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue12}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  When you fill out this application form, you confirm that
                  you've asked for permission from third parties like Personal
                  References and Emergency Contacts to let Line Security
                  Services Ltd keep their information in our systems. We'll only
                  use this information for its intended purpose. For example,
                  the details you provide for emergency contacts will only be
                  used if there's an emergency involving you. We won't share or
                  use this information for anything else.*
                </FormLabel>
                <RadioGroup
                  onChange={anytingElseValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue13}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ color: "#080a3c" }}
                >
                  I agree to hold my email address for the purpose of sending me
                  available work schedules and company news letters. I
                  understand that if I say no to the use of my email address
                  being used for the above purpose, that my email address will
                  only be used for initial recruitment and HR purposes only.*
                </FormLabel>
                <RadioGroup
                  onChange={HRPurposesValGet}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={selectedValue14}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default JobApplicationForm;
