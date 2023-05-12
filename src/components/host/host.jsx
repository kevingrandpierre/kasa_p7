import './host.css'

function Host({ host }) {
    const identity = host.name.split(" ");
    const [name, lastname] = identity;


    return(
        <div className="hostHousing">
            <div className="identity">
                <p className="hostName">{name}</p>
                <p className="hostLastname">{lastname}</p>
            </div>
            <div className="AvatarContainer">
                <img src={host.picture} alt="avatar"  className="Avatar"/>
            </div>
        </div>
    );
}

export default Host