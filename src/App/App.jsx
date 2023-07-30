
import Header from "../Components/Header";
import Content from "../Components/Content";
import { Grid } from '@mui/material'


function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={10}>
            <Content />
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
