import {Application} from 'express'

const server = (app:Application)=>{
    const PORT = process.env.PORT ;
    app.listen(PORT,()=>{
        console.log(`server running successfully on the PORT ${PORT}`)
    })
}


export default server