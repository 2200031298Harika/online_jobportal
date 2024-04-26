import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="flex-start"  // Adjusted to move content to the top
      style={{
        padding: "30px",
        minHeight: "93vh",
        backgroundImage: `url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FqTjxnrJsJfkqTnYStRqZ/52b5f9ba7c22a86ed00a4b1750c4187b/GettyImages-1311493137__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item>
        <Typography variant="h2">Welcome to Job Portal</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="flex-start"  // Adjusted to move content to the top
      style={{
        padding: "30px",
        minHeight: "93vh",
        backgroundImage: `url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/FqTjxnrJsJfkqTnYStRqZ/52b5f9ba7c22a86ed00a4b1750c4187b/GettyImages-1311493137__1_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
