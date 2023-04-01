import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/MariaMai139'><AiFillGithub /></a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/phuc-mai-1309/'><AiFillLinkedin /></a>
            </div>
        </div>
    )
}

export default SocialMedia