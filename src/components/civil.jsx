import { useState } from "react";

const civils=[
    {
        name:"Civil 1",
        rate:567.80,
        total:"₹2,98,6792"
    },
    {
        name:"Civil 2",
        rate:567.80,
        total:"₹2,98,6792"
    },
    {
        name:"Civil 3",
        rate:567.80,
        total:"₹2,98,6792"
    },
    {
        name:"Civil 4",
        rate:567.80,
        total:"₹2,98,6792"
    },
    {
        name:"Civil 5",
        rate:567.80,
        total:"₹2,98,6792"
    },
]




const Civil=()=>{

    const [showActivities, setShowActivities] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [showWorkItems, setShowWorkItems] = useState(false);

    const toggleActivitiesDropdown = () => {
        setShowActivities(!showActivities);
    };

    const toggleWorkItemsDropdown = (activity) => {
        setSelectedActivity(activity);
        setShowWorkItems(!showWorkItems);
    };
    const index=1;

    return (
        <div className="civils">
            {civils.map(item=>{
                return (
                <div className="civil">
                <div>
                    <input type="checkbox" id="pack" name="packages"value="pack1"/>
                    <label for="pack">{item.name}</label>
                </div>
            

                <label htmlFor="">{item.rate}</label>

                <label htmlFor="">{item.total}</label>

                <div className="add-btn" onClick={toggleActivitiesDropdown}><img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/17-512.png" alt="" /></div>

                {showActivities && (
                        <div className="activities-dropdown">
                            <div>
                                <input type="checkbox" id={`activity${index}1`} name={`activity1`} value={`activity$1`} />
                                <label htmlFor={`activity${index}1`}>Activity 1</label>
                                <div className="dropdown-arrow" onClick={() => toggleWorkItemsDropdown(`activity${index}1`)}>
                                    <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-512.png" alt="" />
                                </div>
                                {showWorkItems && selectedActivity === `activity${index}1` && (
                                    <div className="work-items-dropdown">
                                        <input type="checkbox" id={`workItem${index}1`} name={`workItem${index}1`} value={`workItem${index}1`} />
                                        <label htmlFor={`workItem${index}1`}>Work Item 1</label>
                                        {/* Add more work items as needed */}
                                    </div>
                                )}
                            </div>
                            {/* Add more activities as needed */}
                        </div>
                    )}
            </div>
            )})}
            
        </div>
    )
}

export default  Civil;