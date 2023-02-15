import React from 'react';

const AboutPage = () => {

    // Assign styles by group attributes to specific elements for the about page
    const styles = {
        "link" : { 
            "fontFamily": 'Permanent Marker, cursive',
            "color" : 'black',
        },
        "formGroup" : {
            "marginTop" : "3rem"
        },
        "updateButton" : {
            "fontFamily": 'Permanent Marker, cursive',
            "color" : 'white',
        },
        "paddingTop" : {
            paddingTop: '2rem'
        },
        "a_link" : {
            textDecoration: 'none'
        }
    }

    // Render elements with the styles in the JSX below
    return (
        <div className="reset-form login-form">
            <div class="container login-container">
                <h4 style={ styles["paddingTop"] } class="sign-form-title">About The Developer</h4>
                <p style={ styles.link }>If you would like to learn more about the developer, you can visit their bio</p>
                <form class="sign-form">
                    <button style={ styles.updateButton } type="submit" className="btn btn-success">
                        <a style={ styles.a_link } href="https://kingabdul.eth.xyz/" rel="noreferrer">Visit Their Bio</a>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AboutPage;