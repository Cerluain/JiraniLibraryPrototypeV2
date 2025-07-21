import HeaderSection from "./HeaderSection";
import DashboardList from "./DashboardList";

interface Props{
    setCurrentPage: (page:string)=>void
}
export default function Dashboard({setCurrentPage}:Props){
    return(<>
        <HeaderSection sectionName="Library Dashboard" setCurrentPage={setCurrentPage}/>

        {/* Menu Navigation */}
        <div>

        </div>

        <DashboardList />
    </>);
}