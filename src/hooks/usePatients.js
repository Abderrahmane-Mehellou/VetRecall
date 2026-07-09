import {useQuery} from "@tanstack/react-query";
import {getPatients} from "../service/patient.service";
import { useAuth } from "./useAuth";

export function usePatients() {
    const {clinic} = useAuth();
  return useQuery({
    queryKey: ["patients", clinic?.id],
    queryFn: () => getPatients(clinic.id),
    enabled: !!clinic?.id,
  });
}
