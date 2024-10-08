import { Link } from "react-router-dom";

function ResponsiveAppBar() {
  return (
    <>
      <div id="links">
        <Link id="link1" to="/challenge1">
          Challenge 1
        </Link>
        <Link id="link2" to="/challenge2">
          Challenge 2
        </Link>
        {/* <Link id="link2" to="/examen3">
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
        </Link> */}
      </div>
    </>
  );
}
export default ResponsiveAppBar;
