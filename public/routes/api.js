const router = require(`express`).Router();
const fs = require(`fs`);
const path = require(`path`);
const {v4:uuid} = require(`uuid`);


router.post(`/notes`, (req, res) => {
    const currentNotes = fs.readFileSync(path.join(process.cwd(), `/db/db.json`));
    // console.log(currentNotes);
    const newNotes = [...JSON.parse(currentNotes), {title: req.body.title, text: req.body.text, id: uuid()}];

    fs.writeFileSync(path.join(process.cwd(), `/db/db.json`), JSON.stringify(newNotes));
    res.send(newNotes);
})

router.get(`/notes`, (req, res) => {
    const notes = fs.readFileSync(path.join(process.cwd(), `/db/db.json`));
    // console.log(JSON.parse(notes));
    res.json(JSON.parse(notes));
})


router.delete(`/notes/:id`, (req, res) => {
    const notes = fs.readFileSync(path.join(process.cwd(), `/db/db.json`));
    const newNotes = JSON.parse(notes).filter(note => note.id !== req.params.id);

    fs.writeFileSync(path.join(process.cwd(), `/db/db.json`), JSON.stringify(newNotes));
    res.json(newNotes);
})

module.exports = router;