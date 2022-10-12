const Notification = (props) => {
    const {name, email, password} = props;

    return(
        <div >
                <h3>Уважаемый, {name}</h3>
                <p> Ваш email: {email}.</p>
                <p>Ваш {password} верный!</p>
            </div>
    )
}

export default Notification;