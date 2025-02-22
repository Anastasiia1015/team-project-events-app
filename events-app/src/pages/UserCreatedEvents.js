import React, { useContext } from 'react';
import axios from 'axios';
import "../layouts/userEventsStyles.css";
import { useNavigate } from 'react-router-dom';
import Event from '../Components/Event';
import UserContext from '../UserContext';

function UserCreatedEvents() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const {userData, fetchUserData} = useContext(UserContext)
    const navigate = useNavigate()


    const handleCreateEventClick = () => {
        navigate("/userEvents/createEvent")
    };
    const handleEventUpdate = (id) => {
        navigate(`/userEvents/updateEvent/${id}`);
    };
    
    const handleEventDelete = async (_id) =>{
        try{
            const response = await axios.delete(`${apiUrl}/api/events/delete/${_id}`, {
                    withCredentials: true
                })
            if(response.status === 200){
                alert("Event deleted successfully")
                fetchUserData();
            }
        }catch(error){
            console.error("Error deleting event:", error);
            alert("Failed to delete the event.");
        }
    }
    return (
        <div className="user-events-page">
            <div className='user-info-container'>
                <div className='user-events-header'>
                    <h1 className='user-account-header'>{userData.username}'s Dashboard</h1>
                    <button
                    onClick={handleCreateEventClick}
                    id="user-update-image-button"
                    >
                        Create Event
                    </button>
                </div>
                <div className='user-events-list'>
                    {userData.events.length === 0 ? (
                        <p>You have no events yet. Create one to get started!</p>
                    ) : (
                        userData.events.map(event => (
                            <Event
                            eventData={event}
                            key={event._id}
                            onDelete={() => handleEventDelete(event._id)}
                            onUpdate={() => handleEventUpdate(event._id)}
                            showOrganizerButtons={true}
                            />
                        ))
                )}
                </div>
            </div>
        </div>
    );

}

export default UserCreatedEvents;
