import HeaderSection from "./HeaderSection";
import DashboardList from "./DashboardList";

interface Props{
    setCurrentPage: (page:string)=>void
    loadViewPage: (filename: string)=>void
}
export default function Dashboard({setCurrentPage, loadViewPage}:Props){
    return(<>
        <HeaderSection sectionName="Library Dashboard" setCurrentPage={setCurrentPage}/>

        {/* Menu Navigation */}
        <div>

        </div>

        <DashboardList loadViewPage={loadViewPage}/>
    </>);
}