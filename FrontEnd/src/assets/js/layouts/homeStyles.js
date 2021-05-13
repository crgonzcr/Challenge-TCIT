import { makeStyles } from "@material-ui/core/styles";

const homeStyles = (theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
    margin: "auto",
    marginTop: "50px",
    // height: 2500,

  },
  bar: {
    width: "100vw",
    backgroundColor: "#f1f1f1",
    margin: "0",
    padding: theme.spacing(1),
    height: "45px",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  paper: {
    padding: theme.spacing(),
    margin: "auto",
    maxWidth: 1400,
  },
  table: {
    width: "100%",
  },
  filter: {
    margin: theme.spacing(-1),
    marginLeft: "5px",
    width: 180,
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "5px",
  },
  menuOT: {
    paddingTop: theme.spacing(2),
    margin: "auto",
  },
  title: {
    padding: theme.spacing(3),
  },
  field: {
    margin: theme.spacing(2),
    width: "100%",
    padding: 0,
  },
  dialogText: {
    margin: "10px",
    width: "90%",
  },
  save: {
    textAlign: "right",
    margin: theme.spacing(2),
  },
  form: {
    width: "100%",
  },
  divider: {
    marginTop: "20px",
    marginBottom: "20px",
  },
});

export default homeStyles;
