// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";

const UserLoginValidation = () => {
    const [errors,setError] = useState({
        email: "",
        password: ""
    })

    const  [loginForm, setLoginForm] = useState({
        email: " ",
        password : " "
    })

    const isValidEmail = (string) => {
        return /^[a-zA-Z-09+_.-]+@[a-zA-Z0-9.-]+$/.test(string)
    }

    const passwordLength = (string) => {
        return string.length >= 6
    }

     const handleInputs = (e) => {
        let error;
        const {name,value} = e.target

        if(!value.trim()){
           error = `${name} is required`
     }else if(name == 'email'){
        if(!isValidEmail(value)) error = "Invalid Email Address"
     }else if(name == 'password'){
        ClipboardEvent
        if(!passwordLength(value)) error = "Should be Atleast Six Characters"
     }

    setError((prevError)=> ({
        ...prevError,
        [name]: error
    }))

    setLoginForm((preData)=> ({
        ...preData,
        [name]:value
    }))
    }

    const isValidForm = async (e) => {
        e.preventDefault()
        let status = true
        if(loginForm['email'].length==0|| errors['email']!= undefined ) status = false
        console.log(status);
        return status
    }

    return {errors,loginForm,handleInputs,isValidForm}


}

export default UserLoginValidation