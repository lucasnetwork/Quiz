import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin,faTwitter,faGithub} from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'
export default () =>(
    <footer className="footer">
        <p>&copy; copyright</p>
        <div>
            <a><FontAwesomeIcon icon={faTwitter}/></a>
            <a><FontAwesomeIcon icon={faGithub}/></a>
            <a><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
    </footer>
)