import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <div>
            <form id="signup">
                <fieldset>
                    <legend>Sign up</legend>
                    <p>
                        <input type="email" id="signup-email" placeholder="Email" required />
                    </p>
                    <p>
                        <input type="password" id="signup-password" placeholder="Password"
                            required />
                    </p>
                    <p>
                        <input type="text" id="name" placeholder="Full name" required />
                    </p>
                    <p>
                        <input type="text" id="color" placeholder="Favorite color" />
                    </p>
                    <input type="submit" value="Sign up" />
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPage;
