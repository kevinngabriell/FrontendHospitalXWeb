import Button from "../../components/button";
import FormComponent from "../../components/form";
import Navigation from "../../components/navigation";
import Table from "../../components/table";
import '../../style/grid.css';

function AdminHospitalDashboard() {

    //Mockup API Response
    const APIResponse = {
        status: 200,
        statusMessage: "Success",
        data: [
            {
                hospitalName: "Hospital A",
                totalUser: "1000",
                packageType: "Type A",
                expiredDate: "2024/12/12"
            },
            {
                hospitalName: "Hospital B",
                totalUser: "2500",
                packageType: "Type D",
                expiredDate: "2024/12/12"
            },
            {
                hospitalName: "Hospital C",
                totalUser: "300",
                packageType: "Type D",
                expiredDate: "2024/12/12"
            }
        ]
    };



    return(
        <div className="container">
            {/* Navigation Area */}
            <div className="column-navigation">
                <Navigation userRole={'Admin'} initialActive={'Hospital'}/>
            </div>
            <div className="column">
                {/* Search Bar & Filter Area */}
                <div className="container-column-end" style={{marginTop: "4%"}}>
                    <div className="column">
                        <FormComponent placeholder={"Search Hospital"}/>
                    </div>
                    <div className="column" style={{display: "flex", justifyItems: "end !important"}}>
                        <Button text={"Add New Hospital"} path={"/admin/hospital/addnewhospital"}/>
                    </div>
                </div>
                <Table 
                    rows={APIResponse.data}
                    isClickable={"True"}
                />
            </div>

        </div>
    );
}

export default AdminHospitalDashboard;