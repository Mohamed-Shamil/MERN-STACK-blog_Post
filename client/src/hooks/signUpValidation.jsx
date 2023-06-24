import { useState } from "react";

const UserSignupValidation = () => {
    const [ errors, setError] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })

    const [ signForm, setSignForm ] = useState ({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    })
    

    // const containsNumber = (string) => {
    //     return /\d/.test(string)
    // }

    const length = (string) => {
     
        return string.length >= 3
    }

    // const specialCharacters = (string) => {
    //     return !/^[a-zA-Z\s]+$/.test(string)
    // }

    const isValidEmail = (string)=>{
      return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
  }

    const isValidPhone = (number) => {
        return /^[6-9]\d{9}$/.test(number)
    }
    
    const containsNumber = (string) => {
     
        return /[0-9]/.test(string);
      };

    const passwordLength = (string) => {
        return string.length >= 6
    }

  
    const handleInputs = (e) => {
        let error = "";
        const { name, value } = e.target;
    
        if (!value.trim()) {
          error = `${name} is required`;
        } else if (name === "name") {
          if (containsNumber(value)) error = "Should contain only alphabets";
          if (!length(value)) error = "Should contain at least three alphabets";
        } else if (name === "email") {
          if (!isValidEmail(value)) error = "Invalid email address";
        } else if (name === "phone") {
          if (!isValidPhone(value)) error = "Invalid phone number";
        } else if (name === "password") {
          if (!passwordLength(value)) error = "Password should contain at least six characters";
        } else if (name === "confirmPassword") {
          if (signForm.password !== value) error = "Password does not match";
        }
      
        setError((prevErrors) => ({
          ...prevErrors,
          [name]: error,
        }));
      
        setSignForm((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      

   
      const isValidForm = async(e)=>{
        e.preventDefault()
        let status = true
            if(signForm["email"].length == 0 || errors["email"]!=undefined){
             
                status = false
            }
        if(signForm.password !== signForm.confirmPassword) status = false 
        return status
    }
      
    return {errors,signForm,handleInputs,isValidForm}

}

export default UserSignupValidation