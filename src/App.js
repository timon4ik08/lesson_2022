import './App.css';

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"} alt={"logo"}/>
            </header>
            <nav className={"nav"}>
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className={"content"}>
                <img src={"https://media.istockphoto.com/id/1327276218/photo/the-picturesque-mountain-landscape-on-the-sunset-background.jpg?b=1&s=170667a&w=0&k=20&c=8tzAabsLYLhMW6iDoeuBZUuaozi-F0lL2KcE49JVVaI="} alt={"font"}/>
                My content
            </div>
        </div>
    );
}

export default App;
