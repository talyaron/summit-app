import React from 'react';
import {saveUserToDB} from "../../../control/firebase/set";

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: ""}

    }

    render() {
        const u = this.props.user;
        let color = (u.role === "public") ? "#9ac476" : "#dcdde0";
        return (<div style={{backgroundColor: color}}>
                <div className="gridHandleUsers">
                    <div className="courseNames">
                        <ul>
                            {u.courses.map(c => {
                                return (<li>{c.name}</li>)
                            })}
                        </ul>
                    </div>
                    <div className="wordCourse">Courses</div>
                    <div className="name"> {u.name}</div>
                    <div className="photoURL" style={{backgroundImage: "url(" + u.photoURL + ")"}}></div>
                    <div className="role">
                        <div className="dropdown"/>
                        <button className="dropbtn">{this.state.role}</button>
                        <div className="dropdown-content">
                            <a href="#instructor" onClick={e => {
                                e.preventDefault()
                                this.setState({role: "instructor"})
                                u.role = "instructor";
                                saveUserToDB(u);
                            }}>מדריכ/ה</a>
                            <a href="#student" onClick={e => {
                                e.preventDefault()
                                this.setState({role: "student"})
                                u.role = "student";
                                saveUserToDB(u);

                            }}>סטודנט</a>
                            <a href="#public" onClick={e => {
                                e.preventDefault()
                                this.setState({role: "public"})
                                u.role = "public";
                                saveUserToDB(u);

                            }}>public</a>
                            <a href="#admin" onClick={e => {
                                e.preventDefault()
                                this.setState({role: "admin"})
                                u.role = "admin";
                                saveUserToDB(u);
                            }}>admin</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}