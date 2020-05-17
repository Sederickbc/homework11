const db = require('../db/db.json')
const fs = require('fs')
module.exports = function(app){
  app.get('/api/notes', (req,res)=>{
        res.json(db)
  })
  app.post('/api/notes', (req,res)=>{
    db.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(db), (err)=> {
        if(err) throw err;
        res.send('success!')
    })
  })
  app.delete('/api/notes/:ID', (req,res)=>{
    //db.something to delete the element indexed at ID
    // if no error, file has been deleted successfully
    db.splice(req.params.ID,1)
     fs.writeFile('./db/db.json', JSON.stringify(db), (err)=> {
        if(err) throw err;
        res.send('success!')
    })
  })
//app.put('/')
}

// console.log([{
//   names: ['sederick', 'sammy', 'samantha'],
//   obj: {
//     data: 'something something'
//   }
// }].splice(0,1))
