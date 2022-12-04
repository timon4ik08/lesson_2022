import './App.css';

const App = () => {
    return (
        <div className={"container text-center"}>
            <div className={"row align-items-start mt-4 mb-4 border"}>
                <header className={"col"}>
                    <img className={"mt-2 mb-2"}
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"}
                         alt={"logo"}/>
                </header>
            </div>

            <div className={"row"}>
                <nav className={"nav col-2 p-5 border"}>
                    <div className={"mx-auto"}>
                       <a className={"btn btn-outline-primary nav-link"} href={"http://localhost:3000/"}>Profile</a><br/>
                       <a className={"btn btn-outline-primary nav-link"} href={"http://localhost:3000/"}>Message</a><br/>
                       <a className={"btn btn-outline-primary nav-link"} href={"http://localhost:3000/"}>News</a><br/>
                       <a className={"btn btn-outline-primary nav-link"} href={"http://localhost:3000/"}>Music</a><br/>
                       <a className={"btn btn-outline-primary nav-link"} href={"http://localhost:3000/"}>Settings</a><br/>
                    </div>
                </nav>

                <div className={"content col p-0 ml-5 border"}>
                    <img className={"fontContent"}
                         src={"https://media.istockphoto.com/id/1327276218/photo/the-picturesque-mountain-landscape-on-the-sunset-background.jpg?b=1&s=170667a&w=0&k=20&c=8tzAabsLYLhMW6iDoeuBZUuaozi-F0lL2KcE49JVVaI="}
                         alt={"font"}/>
                    My content
                </div>
            </div>
        </div>
    );
}

export default App;
