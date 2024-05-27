import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { RiPencilFill } from "react-icons/ri";

import { RxCross1 } from "react-icons/rx";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Checkbox from "@mui/material/Checkbox";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { JobFormSliceActions } from "../../../../store/jobFormDataSlices/jobForm";
import { UpdatedMsgSliceActions } from "../../../../store/UpdatedMsg";

export default function EditJobFormData({ id }) {
  
  let dispatch = useDispatch();
  let viewJobFormData = useSelector((state) => state.jobFormData);
  let singleRecordView = viewJobFormData.filter((data) => data.id == id);
  let formData = singleRecordView[0];
  let [data, updateData] = React.useState(formData || {});
  React.useEffect(() => {
    updateData(formData);
  }, [formData]);
    const [value, setValue] = React.useState(dayjs(data.siaExpiryDate));
    const [DOB, setDOB] = React.useState(dayjs(data.dateOfBirth));
    const [valueStart, setValueStart] = React.useState(dayjs(data.employeeStart));
    const [valueEnd, setValueEnd] = React.useState(dayjs(data.employeeEnd));
    const handleChange = (e) => {
      const { name, value } = e.target;
      
      updateData({
      ...data,
      [name]: value,
    })
    
  };
  
  const [state, setState] = React.useState({
    right: false,
  });
  let closeDrawerPanel = ()=>{
    setState({
      right: false,
    })
  }
  let handleUpdate = () => {
    setState({
      right: false,
    })
    
    dispatch(
      JobFormSliceActions.formDataUpdateSingle({ id, data })
    );

    dispatch(UpdatedMsgSliceActions.updatedMsgShow());
    setTimeout(() => {
      dispatch(UpdatedMsgSliceActions.updatedMsgHide());
    }, 6000);
  };

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    
    return (
      <>
        <form>
          <Box
            sx={{ flexGrow: 1, marginTop: "20px", marginBottom: "20px" }}
            className="container job-form-page"
          >
            <Grid item xs={12} className="view-job-form-data-cancel-btn">
              <Button onClick={closeDrawerPanel}>
                <RxCross1 style={{ color: "red" }} />
              </Button>
            </Grid>
            <Grid container spacing={1.5}>
              <Grid item xs={12}>
                <h1>
                  <Link style={{ color: "black" }} to="/admin/job-form-data">
                    Household Ltd Job Application Form Edit
                  </Link>
                </h1>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  className="every-text-field"
                  size="small"
                  id="outlined-select-currency"
                  select
                  value={data.roleApplyingFor}
                  onChange={handleChange}
                  name="roleApplyingFor"
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
                  value={data.siaBadgeNo}
                  onChange={handleChange}
                  name="siaBadgeNo"
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
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    className="small-date-picker"
                    label="SIA Expiry Date"
                    name="siaExpiryDate"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.firstName}
                  onChange={handleChange}
                  name="firstName"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.lastName}
                  onChange={handleChange}
                  name="lastName"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.preferredName}
                  onChange={handleChange}
                  name="preferredName"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Preferred Name (If different from the first name)"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.address}
                  onChange={handleChange}
                  name="address"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.presentAddress}
                  onChange={handleChange}
                  name="presentAddress"
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
                  value={data.previousAddress}
                  onChange={handleChange}
                  name="previousAddress"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Previous Address:"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.streetAddress}
                  onChange={handleChange}
                  name="streetAddress"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Street Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.countryBirth}
                  onChange={handleChange}
                  name="countryBirth"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Place and Country of Birth"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.city}
                  onChange={handleChange}
                  name="city"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.postCode}
                  onChange={handleChange}
                  name="postCode"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Post Code"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.phoneNo}
                  onChange={handleChange}
                  name="phoneNo"
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
                  value={data.email}
                  onChange={handleChange}
                  name="email"
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
                    value={DOB}
                    onChange={(newValue) => setDOB(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.foreignLanguages}
                  onChange={handleChange}
                  name="foreignLanguages"
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
                    value={data.carOwner}
                    onChange={handleChange}
                    name="carOwner"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.martialStatus}
                    onChange={handleChange}
                    name="martialStatus"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
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
                  value={data.drivingLicence}
                  onChange={handleChange}
                  name="drivingLicence"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Driving Licence No."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  value={data.nationalInsurance}
                  onChange={handleChange}
                  name="nationalInsurance"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="National Insurance No."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.nationality}
                  onChange={handleChange}
                  name="nationality"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Nationality"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.height}
                  onChange={handleChange}
                  name="height"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Build/ Height"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.religion}
                  onChange={handleChange}
                  name="religion"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Religion/ Belief"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={12} style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: "23px", marginTop: "23px" }}>
                  Please advise details of person to contact in case of
                  emergency *
                </h2>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.emergencyContact}
                  onChange={handleChange}
                  name="emergencyContact"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Name of Emergency Contact"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.contactNo}
                  onChange={handleChange}
                  name="contactNo"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Contact No."
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.relationship}
                  onChange={handleChange}
                  name="relationship"
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
                    value={data.vettingPurpose}
                    onChange={handleChange}
                    name="vettingPurpose"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.firstAid}
                    onChange={handleChange}
                    name="firstAid"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                  value={data.companyName}
                  onChange={handleChange}
                  name="companyName"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.contactName}
                  onChange={handleChange}
                  name="contactName"
                  size="small"
                  className="every-text-field"
                  id="outlined-basic"
                  label="Contact Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  value={data.phone}
                  onChange={handleChange}
                  name="phone"
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
                    value={valueStart}
                    onChange={(newValue) => setValueStart(newValue)}
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
                    value={valueEnd}
                    onChange={(newValue) => setValueEnd(newValue)}
                    className="small-date-picker"
                    label="Employment End Date (If applicable)"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={data.yearWork5}
                  onChange={handleChange}
                  name="yearWork5"
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
                    value={data.last10Years}
                    onChange={handleChange}
                    name="last10Years"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={data.schoolCollege}
                  onChange={handleChange}
                  name="schoolCollege"
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
                    Have you ever appeared before a court charged with a
                    criminal, civel or military offence and been convicted
                    including any motoring offences, have you any alleged
                    offences outstanding?*
                  </FormLabel>
                  <RadioGroup
                    value={data.offencesOutstanding}
                    onChange={handleChange}
                    name="offencesOutstanding"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={data.fullDetails}
                  onChange={handleChange}
                  name="fullDetails"
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
                    value={data.madeBankrupt}
                    onChange={handleChange}
                    name="madeBankrupt"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.courtJudgements}
                    onChange={handleChange}
                    name="courtJudgements"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.referenceSelf}
                    onChange={handleChange}
                    name="referenceSelf"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.householdServiceltd}
                    onChange={handleChange}
                    name="householdServiceltd"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    value={data.ukDrivingLicence}
                    onChange={handleChange}
                    name="ukDrivingLicence"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  // defaultChecked
                  label="I agree that I have read and understand the above statement."
                />
              </Grid> */}
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
                    value={data.permitUK}
                    onChange={handleChange}
                    name="permitUK"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
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
                    Services Ltd keep their information in our systems. We'll
                    only use this information for its intended purpose. For
                    example, the details you provide for emergency contacts will
                    only be used if there's an emergency involving you. We won't
                    share or use this information for anything else.*
                  </FormLabel>
                  <RadioGroup
                    value={data.anytingElse}
                    onChange={handleChange}
                    name="anytingElse"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ color: "#080a3c" }}
                  >
                    I agree to hold my email address for the purpose of sending
                    me available work schedules and company news letters. I
                    understand that if I say no to the use of my email address
                    being used for the above purpose, that my email address will
                    only be used for initial recruitment and HR purposes only.*
                  </FormLabel>
                  <RadioGroup
                    value={data.HRPurposes}
                    onChange={handleChange}
                    name="HRPurposes"
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    // name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button onClick={handleUpdate} variant="contained">
                  Update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </>
    );
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <RiPencilFill onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </RiPencilFill>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
