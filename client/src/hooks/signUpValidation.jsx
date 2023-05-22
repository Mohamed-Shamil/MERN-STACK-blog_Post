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
    

    const containsNumber = (string) => {
        return /\d/.test(string)
    }

    const length = (string) => {
        return string.length >= 3
    }

    // const specialCharacters = (string) => {
    //     return !/^[a-zA-Z\s]+$/.test(string)
    // }

    const isValidEmail = (string) => {
        return /^[a-zA-Z-09+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const isValidPhone = (number) => {
        return /^[6-9]\d{9}$/.test(number)
    }

    const passwordLength = (string) => {
        return string.length >= 6
    }

    const handleInputs = (e) => {
        let error;
        const {name,value} = e.target

        if(!value.trim()){
            error = `${name} is required`
        }
        else if(name == 'name'){
            if(containsNumber(value)) error = "Should Contain Only Alphabets"; 
            if(!length(value)) error = "Should Contain atleast Three Alphabets";
        }
        else if(name == 'email'){
            if(!isValidEmail(value)) error = "Invalid Email Address";
        }
        else if(name == 'phone'){
            if(!isValidPhone(value)) error = "Invalid Phone Number"
        } 
        else if(name == 'password'){
            ClipboardEvent
            if(!passwordLength(value)) error = "Password Should Contain Atleast six Characters"
        }
        else if(name == 'confirmPassword'){
           if(signForm.password !== value) error = "Password does not match"
        }

        setError((prevErrors)=>({
            ...prevErrors,
            [name]: error
        }))
    
        setSignForm((preData) => ({
            ...preData,
            [name]: value
        }))
    }

    const isValidForm = async (e) => {
        e.preventDefault()
        let status = true
        console.log(signForm, "SignForm is here 83")
        if(signForm ['email'].length ==0 || errors['email']!=undefined ) status = false
        // for(const keys in errors){
        //     if(signForm[keys].length == 0 || errors[keys]!=undefined){
        //         status = false
        //     }
        // }
        if(signForm ['password']!=signForm.password) status = false
        console.log(status, "statis is here 87 signUp validation")
        return status
    }
    return {errors,signForm,handleInputs,isValidForm}

}

export default UserSignupValidation