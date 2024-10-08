import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const views = ["examen1", "examen2", "examen3", "examen4", "examen5"];
  return (
    <>
      <div id="links">
        <Link id="link1" to="/examen1">
          Examen 1
        </Link>
        <Link id="link2" to="/examen2">
          Examen 2
        </Link>
        <Link id="link2" to="/examen3">
          Examen 3
        </Link>
        <Link id="link2" to="/examen4">
          Examen 4
        </Link>
        <Link id="link2" to="/examen5">
          Examen 5
        </Link>
        <Link id="link2" to="/examen6">
          Examen 6
        </Link>
      </div>
    </>
  );
}
export default ResponsiveAppBar;
