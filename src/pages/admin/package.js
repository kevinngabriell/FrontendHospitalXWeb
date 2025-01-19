import Navigation from "../../components/navigation";
import FormComponent from "../../components/form";
import Button from "../../components/button";

function AdminPackageDashboard() {
    return(
        <div className="container">
            <div className="column-navigation">
                <Navigation userRole={'Admin'} initialActive={'Package'}/>
            </div>
            {/* Search Bar & Filter Area */}
            <div className="container-column-end" style={{marginTop: "4%"}}>
                <div className="column">
                    <FormComponent placeholder={"Search Package"}/>
                </div>
                <div className="column" style={{backgroundColor: "aqua", gap: "80px"}}>
                    <FormComponent placeholder={"Search Package"}/>
                    <Button text={"Add New Package"} path={"/admin/package/addnewpackage"}/>
                </div>
            </div>
        </div>
    );
}

export default AdminPackageDashboard;