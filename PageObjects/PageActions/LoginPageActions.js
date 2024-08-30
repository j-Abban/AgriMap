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
    cy.wait(3000);
 }

 verifyLoginSuccess = () => {
   cy.get('div.toast-message.ms-3.text-sm.font-normal.text-green-500')
   .invoke('text')
   .then((text)=>{expect(text.trim()).to.equal('Log-in successful')});
 }
 
}
export default Login;