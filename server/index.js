import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

//MIDDLEWARE
app.use(express.urlencoded({extended:false}));
