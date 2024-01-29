import { useState } from 'react'
export function TwitterFollowCard ({initialIsFollowing, children, userName}) {
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)

    }
    return(
        <article className="tw-followCard">
            <header className='tw-followCard-header'>
                <img
                    alt="image"
                    src={`https://unavatar.io/twitter/${userName}`}
                    className='tw-followCard-avatar'
                >
                </img>

                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>
                        {text}
                    </span>
                    <span className='tw-followCard-stopFollow'>
                        Dejar de seguir
                    </span>
                    
                </button>
            </aside>
      </article>
    )
}