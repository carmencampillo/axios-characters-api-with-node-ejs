const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/characters", (req, res, next) => {
    axios.get("https://ih-crud-api.herokuapp.com/characters")
    .then(responseFromAPI => {
        // console.log(responseFromAPI)
        res.render("characters/list-characters", { characters: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});
//Crear
router.get("/characters/create-character", (req,res)=>{
res.render("characters(creare-character");
})

router.post ("/characters/create-character", (req,res) => {
    const {name, occupation, weapon, debt} =req.body;
    axios.post ("https://ih-crud-api.herokuapp.com/characters", {
        name,
        occupation,
        weapon,
        debt,

    })
    .then ((responseFromAPI)=>{
        console.log (responseFromAPI);
        res.redirect ("character/list-characters");
    })
    .catch((error) => console.log (error));
})

router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err => console.error(err))
});

//UPdate post

router.post ("/characters/:id/update", (req,res) =>{
const characterId = req.params.id;
const characterInfo = req.body;
axios.put( `https://ih-crud-api.herokuapp.com/characters/${characterId}`, characterInfo )
.then (responseFromAPI => {
    res.redirect ("/characters/ ${characterId}");

})
.catch((error) => console.log(error));

});
//NEXT
router.get("/characters/:id", (req, res, next) => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
        // console.log("details: ", responseFromAPI.data)
        res.render("characters/details-character", { character: responseFromAPI.data });
    })
    .catch(err =>console.erros(err))
});


module.exports = router;


// https://ih-crud-api.herokuapp.com/characters