const router = require(`express`).Router();
const fs = require(`fs`);
const path = require(`path`);
const uuid = require(`uuid`);


router.post(`/notes`, (req, res) => {
    const currentNotes = fs.readFileSync(path.join(process.cwd(), `/db/db.json`));
    const newNotes = [...currentNotes, {title: req.body.title, text: req.body.text, id: uuid()}];

    fs.writeFileSync(path.join(process.cwd(), `/db/db.json`), newNotes);
})

router.get(`/notes`, (req, res) => {
    const notes = fs.readFileSync(path.join(process.cwd(), `/db/db.json`));
    res.json(notes);
})

module.exports = router;