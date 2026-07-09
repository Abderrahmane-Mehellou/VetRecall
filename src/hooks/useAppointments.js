import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { getAppointments } from "../service/appointment.service";

export function useAppointments(){
    const {clinic} = useAuth()
    return useQuery({
        queryKey: ["appointments", clinic?.id],
        queryFn: () => getAppointments(clinic.id),
        enabled: !!clinic?.id
    })
}