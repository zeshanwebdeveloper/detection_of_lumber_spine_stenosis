import React from "react";
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div >
            <div class="container" style={{marginBottom:50, "width":"40%", height:500, marginTop:100}}>
                <h2 className="text-center">Sign in</h2>
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                    </div>

                    <Link to="/prediction" class="btn btn-default">Sign In</Link>
                </form>
            </div>
        </div>
    )
}
export default Contact