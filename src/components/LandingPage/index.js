import './index.scss'
import {NavLink} from 'react-router-dom';

import event_card from '../../assets/images/event-card.png'

const Landing = () =>{
    return (
        <>
            <div className="container landing-page">
                <div className="card-area">
                    <div className="card-con">
                        <div className="card event-card">
                            <img src={event_card} />
                        </div>
                    </div>
                </div>
                <div className="text-area">
                    <div className="landing-text">
                        <h2>
                            Imagine if<br /> <span>Snapchat</span> <br/> had events
                        </h2>
                        <p>
                            Easily host and share events with your friends across any social media.
                        </p>
                        <NavLink exact ="true" className="btn-create-event" to="/create">
                        🎉 Create my event
                        </NavLink>
                        
                    </div>
                </div>
                <NavLink exact ="true" className="btn-create-event tab-btn" to="/create">
                        🎉 Create my event
                </NavLink>
            </div>
        </>
    )
}

export default Landing