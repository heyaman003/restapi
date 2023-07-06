import express from 'express'
import {getFunction,postFunction,patchFunction,getFunctionWithPrams,deleteFunction} from '../controllers/userController.js'
const router=express.Router();


router
.get('/',getFunction)
//using this we can post data in user array
.post('/',postFunction)
//now creating a get request for particular query
.get('/:name',getFunctionWithPrams)
.delete('/:name',deleteFunction)
.patch('/:name',patchFunction);
     
export default router;