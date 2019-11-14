class LoginPage {
    username() {
        return "#txtUsername";
    }
    password(){
        return "#txtPassword";
    }
    loginButton(){
        return "#btnLogin";
    }

    homePageLogo(){
        return "a#menu_admin_viewAdminModule"
    }
}

module.exports = new LoginPage();