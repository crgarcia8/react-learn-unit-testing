import { Link, useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
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
