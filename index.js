import express from 'express';
import mongoose from 'mongoose';
import Category from './src/schemas/categories';
import User from './src/schemas/users';
import bodyParser from 'body-parser';
import { createToken } from './src/resolvers/create';
import { verifyToken } from './src/resolvers/verify';
import graphQLHTTP from 'express-graphql';
import schema from './src/graphql';
import cors from 'cors';


const app = express();
const jsonParser = bodyParser.json();
const PORT = process.env.PORT || 3000


app.listen(PORT, () =>{
    console.log('Server WORKS on port ' + PORT);
})
mongoose.connect('mongodb://admin:drinker8@ds145563.mlab.com:45563/lunchapp');
const db = mongoose.connection;
db.on('error', () => console.log("failed to connect to database"))
    .once('open', ()=> console.log("Connected to the data base ", PORT))



app.use((cors()));

  

    app.use('/register', jsonParser, (req,res) => {

        console.log(req.body);
        var user = new User(req.body)

        user.save((err=>{
            if(err){
                console.log(err)
            }
            res.send("usuario registrado");
        }))

    })

    app.use('/login', jsonParser, (req,res ) => {
        if(req.method === 'POST'){
            const token = createToken(req.body.email, req.body.password).then((token) => {
                res.status(200).json({token})
            }).catch((err)=> {
                console.log(err)
                res.status(403).json({
                    message: 'Login Failed, INVALID CREDENTIALS'
                })
            })
        }
    })

    app.use('/verifyToken',jsonParser, (req,res)=>{
        if(req.method === 'POST'){
            try{
                const token = req.headers['authorization']
                verifyToken(token)
                .then(user=>{   
                    res.status(200).json({user})
                    console.log(user)
                })
                .catch(err=>{
                    console.log(err)
                })
            } catch(e){
                console.log(e.message);
                res.status(401).json({
                    message:e.message
                })
            }
        }
    })

    ////             MIDDLEWARE
    app.use('/graphql', (req,res,next) => {
        const token = req.headers['authorization']
        try{
            req.user = verifyToken(token)
            next()
        }
        catch(er){
            res.status(401).json({
                message: er.message
            })
        }
    })
    

    
    app.use('/graphql', graphQLHTTP((req,res)=>({
        schema,
        graphiql: true,
        pretty: true,

        context: {
            user: req.user
        }
    })))
