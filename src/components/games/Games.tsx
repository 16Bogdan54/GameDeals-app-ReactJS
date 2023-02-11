import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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

  return <div>games</div>;
};

export default Games;
