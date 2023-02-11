import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

const Games = () => {
  const {
    status,
    error,
    data: games,
  } = useQuery({
    queryKey: ["games"],
    queryFn: () =>
      axios
        .get("https://www.cheapshark.com/api/1.0/deals?storeID=1")
        .then((r) => r.data),
  });

  console.log(games);

  return (
    <div>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            belent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Games;
