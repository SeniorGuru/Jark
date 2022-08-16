import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function CrDate(): JSX.Element {
  return <span>{new Date().getFullYear()}</span>;
}

export default function Copyright(): JSX.Element {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Fanselow
      </Link>{" "}
      <CrDate />
    </Typography>
  );
}
