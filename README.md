# Netflix Replica
This is a replication of the Netflix landing page built in React using styled components and react router dom library. 

### Installation & Running Locally
Install npm, then run "npm start" in the command line. </br>
Navigate to http:localhost:3000 in any browser to view the application live.
</br></br></br>

## Landing Page & Features
![Landing Page](/Netflix_Landing.jpg) </br>
The landing page captured various details of the current Netflix landing page, from changing button colors on hover to restyling input labels on focus.
![Email Input](/email-input-landing.jpg) </br></br>
Clicking the "Sign In" button on the top right or the "Get Started" button in the middle would lead you to the sign in page.
</br></br></br></br></br>

## Sign In Page & Features
![Signin Page](/signin-page.jpg) </br>
The Sign In page tracks state changes in the email and password fields; it raises errors and highlights the input container when the input is invalid. The "Rememver me" box is set to checked by defualt; upon clicking, the box changes from checked to unchecked and vise versa. When focusing on the email or password input, the label floats to the top of the container, similar to the landing page. "Need Help?" "Sign up now" and "Login with Facebook" all have links embedded, but all of them currently lead to either the landing page. Upon submission, the input fields are automatically cleared, and the inputs are saved.</br>
<img src="/signin-error.jpg"  width="400">
