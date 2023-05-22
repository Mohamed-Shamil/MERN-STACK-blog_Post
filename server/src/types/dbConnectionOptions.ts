import {ConnectOptions} from 'mongoose'

export interface MyConnectOptions extends ConnectOptions{
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    
}