
import express = require('express');

const _app : express.Application = express();

_app.get('/',(req : any, res : any)=>{
  res.send('Hello ! App is working');
});

_app.listen(3000, (err: any)=>{
  if(err) console.log(err);
  console.log('server connected on 3000');
})
