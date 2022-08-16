import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProTip from "./others/ProTip";
import Copyright from "./others/Copyright";
import Content from "./content";

export default function App(): JSX.Element {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          React/Material-UI with TypeScript
        </Typography>
        <Content />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
