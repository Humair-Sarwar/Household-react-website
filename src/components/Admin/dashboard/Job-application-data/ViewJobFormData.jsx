import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaEye } from "react-icons/fa";
import Grid from "@mui/material/Grid";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function ViewJobFormData({id}) {
  
  let viewJobFormData = useSelector(state=>state.jobFormData);
  let singleRecordView = viewJobFormData.filter((data)=>data.id == id);
  let data = singleRecordView[0];
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 700,
        flexGrow: 1,
      }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ padding: "0px 10px 25px 25px" }}
    >
      <Grid container spacing={2}>
      <Grid item xs={12} style={{paddingLeft: '0', paddingTop: '25px'}} className="view-job-form-data-cancel-btn">
          <button onClick={toggleDrawer(anchor, false)}><RxCross1 style={{color:'red'}} /></button>
        </Grid>
        <Grid item xs={12}  style={{paddingLeft: '0', paddingTop: '0px'}}>
          <h3
            style={{ fontSize: "20px", textAlign: "center",}}
          >
            View Single Job Form Data
          </h3>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data"
        >
          <span style={{ fontWeight: "bold" }}>Role Applying For:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data">
          <span>{data.roleApplyingFor}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>SIA Badge No:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.siaBadgeNo}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>SIA Expiry Date:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.siaExpiryDate}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>First Name:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.firstName}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Last Name:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.lastName}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Preferred Name (If different from the first name):
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.preferredName}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Address:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.address}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            How long have you lived at your present address?:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.presentAddress}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Previous Address:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.previousAddress}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Street Address:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.streetAddress}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Place and Country of Birth:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.countryBirth}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>City:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.city}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Post Code:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.postCode}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Phone No:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.phoneNo}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Email:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.email}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Date of Birth:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.dateOfBirth}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Foreign Languages:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.foreignLanguages}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Car Owner *:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.carOwner}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Martial Status:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.martialStatus}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Driving Licence No:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.drivingLicence}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>National Insurance No:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.nationalInsurance}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Nationality:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.nationality}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Build/ Height:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.height}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Religion/ Belief:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.religion}</span>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderRight: "none", textAlign: "center" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Please advise details of person to contact in case of emergency *
          </span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Name of Emergency Contact:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.emergencyContact}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Contact No:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.contactNo}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Emergency Contacts relationship to you?:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.relationship}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Are you able to provide us with a 5 Year checkable work / education
            history for vetting purposes ? *:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.vettingPurpose}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            First Aid/ Fire Fighting Other Certificates:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.firstAid}</span>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ borderRight: "none", textAlign: "center" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Please provide the previous employment details *
          </span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Company Name:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.companyName}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Contact Name:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.contactName}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Phone:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.phone}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>Employee Start Date:</span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.employeeStart}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Employment End Date (If applicable):
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.employeeEnd}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Please use this box to include any further information regarding
            your 5 year work / education history. If you have been self-employed
            or unemployed please advise in this box with dates:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.yearWork5}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Have you left education in the last 10 years? :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.last10Years}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            If you have left school, college or university in the last 10 years,
            please advise School Name / Location / Date you started and Date you
            left :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.schoolCollege}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Have you ever appeared before a court charged with a criminal, civel
            or military offence and been convicted including any motoring
            offences, have you any alleged offences outstanding?* :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.offencesOutstanding}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            If yes, please give full details:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.fullDetails}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Have you been made bankrupt? * :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.madeBankrupt}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Do you have any County Court Judgements * :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.courtJudgements}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Do you object to the company contacting a credit agency with
            reference to yourself * :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.referenceSelf}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Have you previously applied for or obtained a position with this
            Household Services Ltd? :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.householdServiceltd}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            Do you possess a full, clean, current UK Driving Licence? :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.ukDrivingLicence}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            I confirm that I have the right to remain and work in the UK (A
            Right to Work Share code will be required for candidates holding a
            Visa/Residence Permit/EU Passport).*:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.permitUK}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>
            When you fill out this application form, you confirm that you've
            asked for permission from third parties like Personal References and
            Emergency Contacts to let Line Security Services Ltd keep their
            information in our systems. We'll only use this information for its
            intended purpose. For example, the details you provide for emergency
            contacts will only be used if there's an emergency involving you. We
            won't share or use this information for anything else.* :
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.anytingElse}</span>
        </Grid>
        <Grid
          item
          xs={6}
          style={{ borderRight: "none" }}
          className="view-job-form-data border-remove-job-form"
        >
          <span style={{ fontWeight: "bold" }}>I agree to hold my email address for the purpose of sending me available work schedules and company news letters. I understand that if I say no to the use of my email address being used for the above purpose, that my email address will only be used for initial recruitment and HR purposes only.*:
          </span>
        </Grid>
        <Grid item xs={6} className="view-job-form-data border-remove-job-form">
          <span>{data.HRPurposes}</span>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FaEye
            style={{ color: "green" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </FaEye>
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
