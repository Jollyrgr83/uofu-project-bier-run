import React from "react"
import "./NewNav.css"

function NewNav() {
    return (
        <mainnav>

            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">Bier Run</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <button className="login-button" type="submit">Login</button>
                </div>
            </nav>

        </mainnav>
    )
}

export default NewNav;
