import { useState } from "react";
import FormComponent from "../../../components/form";
import Navigation from "../../../components/navigation";
import Label from "../../../components/label";

function AddNewHospitalByAdmin(){
    const totalCategories = 6; 
    const [completedSteps, setCompletedSteps] = useState(0);
    const [formData, setFormData] = useState({
        hospitalName: "",
        phoneNumber: "",
        emailAddress: "",
        website: "",
        address: "",
        packageType: "",
        totalUsers: "",
        expiryDate: "",
    });

    const handleNextStep = () => {
        if (completedSteps < totalCategories) {
            setCompletedSteps((prev) => prev + 1);
        }
    };

    const handlePreviousStep = () => {
        if (completedSteps > 0) {
            setCompletedSteps((prev) => prev - 1);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const progress = (completedSteps / totalCategories) * 100;

    const options = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    const renderFormFields = () => {
        switch (completedSteps) {
            case 0:
                return (
                    <div>
                        <h3>Basic Information</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <Label text={"Hospital Name"}/>
                                <FormComponent
                                    placeholder="Hospital Name"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <Label text={"Phone Number"}/>
                                <FormComponent
                                    placeholder="Phone Number"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <Label text={"Country"}/>
                                <FormComponent
                                    type={"dropdown"}
                                    placeholder="Country"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                    options={options}
                                />
                            </div>
                            <div className="column">
                                <Label text={"Province"}/>
                                <FormComponent
                                    placeholder="Province"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <Label text={"City"}/>
                                <FormComponent
                                    placeholder="City"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <Label text={"State"}/>
                                <FormComponent
                                    placeholder="State"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <Label text={"Email Address"}/>
                                <FormComponent
                                    placeholder="Email Address"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <Label text={"Website"}/>
                                <FormComponent
                                    placeholder="Website"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <h3>Hospital Specialization</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Hospital Type"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Specializations"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Operational Details</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Hospital Code"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Registration Number"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Ownership Type"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Accreditation"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Number of Beds"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Emergency Services"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Operational Hours"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                               
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3>Contact Points</h3>
                        <p>
                            Departments: List of key departments with contact details.
                            Emergency Contact: Specific number for emergencies.
                            Key Personnel:
                            Name, designation, and contact information for important staff like the director, admin manager, or chief medical officer.
                        </p>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <h3>Facilities and Services</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Inpatient and Outpatient Services"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Diagnostic Facilities"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Pharmacy"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Ambulance Services"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Telemedicine"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Cafeteria or Accommodation"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div>
                        <h3>Insurance and Payments</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Accepted Insurance Providers"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Payment Methods"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h3>Geographical Data</h3>
                        <div className="container-column-end">
                            <div className="column">
                                <FormComponent
                                    placeholder="Location Coordinates"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                            <div className="column">
                                <FormComponent
                                    placeholder="Service Area"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={setFormData}
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return(
        <div className="container">
            {/* Navigation Area */}
            <div className="column-navigation">
                <Navigation userRole={'Admin'} initialActive={'Hospital'}/>
            </div>
            <div>
                {/* Search Bar & Filter Area */}
                <div className="container-column-end" style={{marginTop: "4%"}}></div>
                <div>
                    <h1>Add New Hospital</h1>
                    <p>Insert your hospital data in these section you must insert some information that has been seperated into severals category </p>
                    <div style={{
                        width: '100%',
                        height: '20px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        marginBottom: '1%',
                    }}>
                        <div
                            style={{
                                width: `${progress}%`,
                                height: '100%',
                                backgroundColor: '#4caf50',
                                transition: 'width 0.3s ease',
                            }}
                        ></div>
                    </div>

                    <p>{`Progress: ${completedSteps} of ${totalCategories} completed (${Math.round(progress)}%)`}</p>

                    <div>{renderFormFields()}</div>

                    {/* Buttons to Simulate Progress */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            onClick={handlePreviousStep}
                            disabled={completedSteps === 0}
                            className="Button"
                        >
                            Previous
                        </button>
                        <button
                            onClick={handleNextStep}
                            disabled={completedSteps === totalCategories}
                            className="Button"
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default AddNewHospitalByAdmin;