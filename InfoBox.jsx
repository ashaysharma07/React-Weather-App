import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function Infobox({info}) {

    let url = "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div>
        <h6>Weather Info</h6>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature : {info.Temp}&deg;c</p>
          <p>Description : {info.Description}</p>
          <p>Humidity : {info.Humidity}&#37;</p>
          <p>Feels Like : {info.Feels_Like}&deg;c</p>
          <p>MaxTemp : {info.MaxTemp}&deg;c</p>
          <p>MinTemp : {info.MinTemp}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}
export default Infobox ; 
