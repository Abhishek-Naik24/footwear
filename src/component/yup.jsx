import { object, string } from "yup";

export const yup = object({
    fname: string().min(5).required('First Name must be at least 5 characters'),
    lname: string().min(6).required('Rquired'),
    address: string().min(6).required('Address is Required For Shipping Purpose!'),
    city: string().min(6).required(),
    state: string().min(6).required(),
    zip: string().min(6).required(),
    email: string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid Email').required('email is Required'),
    phno: string().matches(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,'Enter Number Which Starts From 7,8,9').required()
})