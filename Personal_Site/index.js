import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/about",(req,res)=>{
  res.render("about.ejs");
});

app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
});

app.post("/submit",(req,res)=>{
  const name = req.body["name"];
  const email = req.body["email"];
  const comment = req.body["text"];
  res.render("comeback.ejs",{name,email,comment});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
