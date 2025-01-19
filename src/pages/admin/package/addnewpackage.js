import { useState } from "react";
import FormComponent from "../../../components/form";
import Navigation from "../../../components/navigation";
import Button from "../../../components/button";

function AddNewSoftwarePackage(){
    const [isSubmitted, setIsSubmiited] = useState(false);
    const [packageType, setPackageType] = useState('');
    const [packagePrice, setPackagePrice] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    const data = [
        { id: 1, name: 'Item 1', description: 'Description 1' },
        { id: 2, name: 'Item 2', description: 'Description 2' },
        { id: 3, name: 'Item 3', description: 'Description 3' },
    ];

    // Handle checkbox toggle
    const handleCheckboxChange = (id) => {
        setSelectedItems((prevSelected) => {
            if (prevSelected.includes(id)) {
                // If already selected, remove it
                return prevSelected.filter((itemId) => itemId !== id);
            } else {
                // Otherwise, add it
                return [...prevSelected, id];
            }
        });
    };

    // Check if all items are selected
    const isAllSelected = data.length > 0 && selectedItems.length === data.length;

    // Handle "Select All" toggle
    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedItems([]); // Deselect all
        } else {
            setSelectedItems(data.map((item) => item.id)); // Select all
        }
    };

    return(
        <div className="container">
            <div className="column-navigation">
                <Navigation userRole={'Admin'} initialActive={'Package'}/>
            </div>
            {/* Search Bar & Filter Area */}
            <div className="column" style={{marginTop: "4%"}}>
                <h2>Add New Software Package</h2>
                <div className="container-column">
                    <div className="column">
                        <FormComponent placeholder={"Type of Package"} value={packageType} onChange={setPackageType}/>
                    </div>
                    <div className="column">
                        <FormComponent placeholder={"Package price"} value={packagePrice} onChange={setPackagePrice}/>
                    </div>
                </div>
                <h4>List of Features</h4>
                <table style={{ width: '100%', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Button text={"Submit"} func={"NewSoftwarePackage"} data={{packageType, packagePrice}}/>
            </div>
        </div>
    );
}

export default AddNewSoftwarePackage;