import { useLocation } from "react-router-dom";

export default function useQuery(param) {
  const query = new URLSearchParams(useLocation().search);
  return query.get(param);
}
