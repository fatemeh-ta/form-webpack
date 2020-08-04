import  html from "./index.html";
import "./main.scss";

const app = new Vue({
  el: '#app',
  data: {
    errors: [],
    name: null,
    confirmPwd: null,
    pwd : null,
    phone : null,
    nationalCode: null,
  },
  methods: {
    checkForm: function (e) {
      this.errors = [];

//****************USERNAME*****************//
      if (!this.name) {
        this.errors.push("Name required.");
      } else if (!this.validUser(this.name)) {
        this.errors.push('User name not valid');
      }

//****************TELEPHONE*****************//
      if (!this.phone) {
        this.errors.push('phone required.');
      } else if (!this.validPhone(this.phone)) {
        this.errors.push('Phone not valid');
      }

//****************NATIONAL CODE*****************//
      if (!this.nationalCode) {
        this.errors.push('nationalCode required.');
      } else if (this.validNationalCode(this.nationalCode)) {
        this.errors.push('nationalCode not valid');
      }

//****************PASSWORD*****************//
      if (!this.pwd) {
        this.errors.push('password required.');
      } else if (!this.validPassword(this.pwd)) {
        this.errors.push('password not valid');
      }

//****************CONFIRMPASSWORD*****************//
      if (!this.confirmPwd) {
        this.errors.push('confirm password required.');
      } else  if (!this.validConfirmpwd(this.confirmPwd)) {
        this.errors.push('confirm password not valid');
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },

    validUser: function (name) {
      var re = /^(?=.{3,20}$)(?![_.])(?![0-9])[a-zA-Z0-9._]+(?<![_.])$/;
      return re.test(name);
    },

    validPhone : function (phone) {
      //console.log(phone);
      var ph =  /^\(?([0]{1})\)?([9]{1})?([0-9]{9})$/;
      return ph.test(phone);
    },

    validPassword : function (pwd) {
      var pass =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      //console.log(pass.test(pwd));
      return pass.test(pwd);
    },

    validConfirmpwd : function (confirmPwd) {
      //console.log(confirmPwd);
      //console.log(this.pwd === this.confirmPwd) ; 
      return (this.pwd == this.confirmPwd);
    },

    validNationalCode : function (nationalCode) {
      console.log(!/^\d{10}$/.test(nationalCode));
      return (!/^\d{10}$/.test(nationalCode));
    
    }
    
  }
})