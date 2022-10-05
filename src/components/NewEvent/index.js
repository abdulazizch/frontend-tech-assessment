import './index.scss'
import event_img from '../../assets/images/event-img.png'
import {NavLink} from 'react-router-dom';

const NewEvent = () =>{
    return (
        <>
            <div className="container create-event-page">
                <div className='page-content'>
                    <div className="event-img-con">
                        <img src={event_img} />
                    </div>
                    <div className='create-event-form-con'>
                        <form  className='create-event-form'>
                            <input type="text" placeholder="Event Name" />
                            <input type="text" placeholder="Host Name" />
                            <input type="datetime-local" placeholder="Start Time/Date" />
                            <input type="datetime-local" placeholder="End Time/Date" />
                            <input type="text" placeholder="Location" />
                            <input type="file" accept='.jpg, .png, .jpeg' placeholder="Location" />
                        </form>
                        <NavLink exact ="true" className="btn-create-event" to="/event">
                            Next
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default NewEvent;