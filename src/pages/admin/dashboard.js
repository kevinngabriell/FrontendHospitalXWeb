import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import '../../style/grid.css';
import Card from "../../components/card";

function AdminDashboard () {
    const [greeting, setGreeting] = useState("Good Morning");
    const [username, setUsername] = useState("");

    useEffect(() => {
        
        //Logic for get the user greetings 
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGreeting("Good Morning");
        } else if (currentHour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }

        //Logic for get the session info
        const storedUsername = sessionStorage.getItem("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }

    }, []); 

    //Mockup API Response
    const APIResponse = {
        status: 200,
        statusMessage: "Success",
        data: [
            {
                totalHospital : 500,
                totalHospitalByRegion : [
                    {
                        America : 500
                    },
                    {
                        Indonesia : 200
                    }
                ]
            },
        ],
    }

    return(
        <div className="container">
            <div className="column-navigation">
                <Navigation userRole={'Admin'} initialActive={'Home'}/>
            </div>
            <div className="column">
                <h3 style={{marginTop: "4%"}}>{greeting}, {username || 'Guest'}</h3>
                <div className="container-column">
                    <div className="column">
                        <Card func={"Dashboard"} title={"Total Hospital"} data={APIResponse.data[0]?.totalHospital}/>
                    </div>
                    <div className="column">
                        <Card func={"Dashboard"} title={"Top 5 Hospital Region"} data={APIResponse.data[0].totalHospitalByRegion[0].America}/>
                    </div>
                </div>
                <div className="container-column">
                    <div className="column">
                        <Card func={"Dashboard"} title={"Department By Activity"}/>
                    </div>
                </div>
                <div className="container-column">
                    <div className="column">
                        <Card func={"Dashboard"} title={"Total Active User"}/>
                    </div>
                    <div className="column">
                        <Card func={"Dashboard"} title={"Average Peak Usage Times"}/>
                    </div>
                </div>
                <div className="container-column">
                    <div className="column">
                        <Card func={"Dashboard"} title={"Total Report Issues"}/>
                    </div>
                    <div className="column">
                        <Card func={"Dashboard"} title={"Total API Integration"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;