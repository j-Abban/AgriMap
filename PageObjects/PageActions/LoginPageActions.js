// Login Page Actions

class  Login{
 visit = () =>{
    cy.visit('/auth/login');
 }

 userEmail = (email) =>{
    cy.get(':nth-child(1) > .form-group > .w-full').type(email);
 }

 userPassword = (password) =>{
    cy.get(':nth-child(2) > .form-group > .w-full').type(password);
 }
 clickLoginButton = () => {
    cy.get("button[type='submit']").click();
 }
}
export default Login;