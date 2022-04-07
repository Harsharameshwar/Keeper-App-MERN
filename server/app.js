import express  from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
const app = express();
const PORT=3001;
mongoose.connect("mongodb://localhost:27017/myFirstDatabase", {useNewUrlParser: true});

const itemsSchema = {
  title: String,
  content:String
};

const Item = mongoose.model("Item", itemsSchema);


app.use(express.json())
app.use(bodyparser.urlencoded({extended: true}));

app.listen(PORT,()=>{
    console.log("Server running on port 3001");
})

app.post("/",(req,res)=>{
    let name=req.body;
    // console.log(name.title);
    const item = new Item({
        title:name.note.title,
        content:name.note.content 
      });
    item.save();
});


app.get("/posts", function(req, res) {
  Item.find({}, function(err, foundItems){
    res.send(foundItems);
  })

  app.post("/delete",(req,res)=>{
    let name=req.body;
    // console.log(name)
    Item.deleteOne(name,function(err){
      if(err){
        console.log(err)
      }
      else{
        console.log("Deleted Succesfully");
      }
    })
});
app.post("/editnote",(req,res)=>{
  const data=req.body;
  // console.log(data);
  const Id=data.note.id
  const note1={
    title:data.note.title,
    content:data.note.content
  }
  // console.log(note1);
  Item.findByIdAndUpdate(Id,note1,function(err,docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  })
  // Item.find(note.title,function(err){
  //   if(err){
  //     console.log(err)
  //   }
  // })
 
  // console.log(resp)
})

});


