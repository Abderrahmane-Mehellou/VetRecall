import Appointments from "./mainSections/Appointments"
import Compliance from "./mainSections/Compliance"
import Engagement from "./mainSections/Engagement"
import MonthlyActivity from "./mainSections/MonthlyActivity"
import Retention from "./mainSections/Retention"

function Main() {
    return (
        <div className="grid grid-cols-2 gap-7">
            <Retention /> 
            <Appointments /> 
            <MonthlyActivity /> 
            <Compliance /> 
            <Engagement /> 
        </div>
    )
}

export default Main
