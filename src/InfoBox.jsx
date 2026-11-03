import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
export default function InfoBox({ info }) {

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div className="InfoBox">

            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                            {info.humidity > 80 ? "⛈️" : info.temp > 20 ? "☀️" : "❄️"}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div>Temperature: {info.temp}°C</div>
                            <div>Min Temperature: {info.minTemp}°C</div>
                            <div>Max Temperature: {info.maxTemp}°C</div>
                            <div>Humidity: {info.humidity}%</div>
                            <div>Feels Like: {info.feelsLike}°C</div>
                            <div>Weather: {info.weather}</div>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}