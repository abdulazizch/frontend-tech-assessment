import './index.scss'
import calenderIcon from '../../assets/images/icons/Calendar.svg'
import LocationIcon from '../../assets/images/icons/Location.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import eventImage from '../../assets/images/Event-image.png'
const eventPage = () =>{
    return (
        <>
            <div className='container event-page'>
                <div className='text-area'>
                    <div className='event-detail'>
                        <div className='event-title'>
                            <h3>Birthday Bash</h3>
                        </div>
                        <div className='hosted-by-title'>
                            <h6>Hosted by Elysia</h6>
                        </div>
                        <div className='card event-datetime'>
                            <div className='icon'>
                                <img src={calenderIcon} />
                            </div>
                            <div className='text'>
                                <h4>18 August 6:00 PM</h4>
                                <h5>to <span>19 August 1:00 PM</span> UTC +10</h5>
                            </div>
                            <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faChevronRight} color="#BDBDBD" />
                            </div>
                        </div>
                        <div className='card event-location'>
                            <div className='icon'>
                                <img src={LocationIcon} />
                            </div>
                            <div className='text'>
                                <h4>Street name</h4>
                                <h5>Suburb, State, Postcode</h5>
                            </div>
                            <div className='arrow-icon'>
                                <FontAwesomeIcon icon={faChevronRight} color="#BDBDBD" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img-area'>
                    <img src={eventImage}/>
                </div>
            </div>
        </>
    )
}
export default eventPage