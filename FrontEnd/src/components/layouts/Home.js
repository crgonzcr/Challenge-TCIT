import { React, useState } from "react";
import { useHistory, Link } from "react-router-dom";
// Material ui/core
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Divider, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Toc } from "@material-ui/icons";

// Estilos
import homeStyles from "../../assets/js/layouts/homeStyles";

const useStyles = makeStyles(homeStyles);

function createData(name, location, state, mobile) {
  return { name, location, state, mobile };
}

const estados = ["En Proceso", "Terminada"];

const rows = [
  createData("OT-0001", "Temuco", "En Proceso", "Móvil 1"),
  createData("OT-0002", "Labranza", "Terminada", "Móvil 1"),
  createData("OT-0003", "Padre las Casas", "Terminada", "Móvil 1"),
  createData("OT-0004", "Temuco", "Terminada", "Móvil 2"),
  createData("OT-0005", "Temuco", "Terminada", "Móvil 1"),
];

export const Home = () => {
  const classes = useStyles();

  const [estado, setEstado] = useState(estados[0]);
  const [inputEstado, setInputEstado] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    console.log("Crear nueva OT.");
    history.push("/ots/new");
  };

  const handleFilter = (dataRows) => {
    return dataRows.filter((row) => {
      if (inputEstado == null || inputEstado == "") {
        return row;
      } else {
        return row.state === inputEstado;
      }
    });
  };

  return (
    <div className={classes.root}>
      <h1>Challenge TCIT</h1>
      <Divider className={classes.divider} />
      <Paper elevation={2} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid container className={classes.menuOT} justify="center">
            <Grid item>
              <Autocomplete
                estado={estado}
                onChange={(event, newValue) => {
                  setEstado(newValue);
                }}
                inputEstado={inputEstado}
                onInputChange={(event, newInputValue) => {
                  setInputEstado(newInputValue);
                }}
                id="estados"
                options={estados}
                className={classes.filter}
                renderInput={(params) => (
                  <TextField {...params} label="Filtro por estado" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm container>
            <TableContainer elevation={0} component={Paper}>
              <Table className={classes.table} aria-label="caption table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell align="left">Localidad</TableCell>
                    <TableCell align="left">Estado</TableCell>
                    <TableCell align="left">Movil asignado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleFilter(rows).map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        <Link to={`/ot/edit/${row.name}`}>{row.name}</Link>
                      </TableCell>
                      <TableCell align="left">{row.location}</TableCell>
                      <TableCell align="left">{row.state}</TableCell>
                      <TableCell align="left">{row.mobile}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

// export  Home;