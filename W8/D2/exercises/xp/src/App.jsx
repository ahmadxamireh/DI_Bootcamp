import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'
import posts from "./posts.json";
import { Component } from "react";
import data from "./data.json";

function App() {

    const sendData = async () => {
        const url = "https://webhook.site/72d2400f-b382-46a9-bad3-e5ed9ecec0cd";
        const data = {
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            });
            const result = await response.text();
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <nav>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/profile"}>Profile</NavLink>
                <NavLink to={"/shop"}>Shop</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<ErrorBoundary><Home/></ErrorBoundary>}/>
                <Route path="/profile" element={<ErrorBoundary><Profile/></ErrorBoundary>}/>
                <Route path="/shop" element={<ErrorBoundary><Shop/></ErrorBoundary>}/>
            </Routes>
            <div>
                <button onClick={sendData}>Send Data</button>
            </div>
        </>
    )
}

export default App

const Home = () => (<div><h1>Home</h1><PostList/><Example1/></div>);
const Profile = () => (<div><h1>Profile Screen</h1><Example2/><Example3/></div>);
const Shop = () => {throw new Error('Shop screen')};

// code from the rest of the files because the ai checker doesn't work with multiple files

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.log({ error, info: errorInfo });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <>
                    <h1>Something went wrong.</h1>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </>);
        }
        return this.props.children;
    }
}

const PostList = () => {
    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    );
}

const Example1 = () => {
    return (
        <>
            {data['SocialMedias'].map((item, index) => (<p key={index}>{item}</p>))}
        </>
    );
}

const Example2 = () => {
    return (
        <>
            {data['Skills'].map((item, index) => {
                return (
                    <div key={index}>
                        <h2>{item['Area']}</h2>
                        <ul>
                            {item['SkillSet'].map((item, index) => {
                                return (
                                    <li key={index}>{item['Name']}</li>
                                )
                            })}
                        </ul>
                    </div>
                );
            })}
        </>
    );
}

const Example3 = () => {
    return (
        <>
            {data['Experiences'].map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item['logo']} alt="logo"/><br/>
                        <a href={item['url']}>{item['companyName']}</a>
                        <h3>{item['roles'][0]['title']}</h3>
                        <p>{item['roles'][0]['startDate']} {item['roles'][0]['location']}</p>
                        <p>{item['roles'][0]['description']}</p>
                    </div>
                );
            })}
        </>
    );
}