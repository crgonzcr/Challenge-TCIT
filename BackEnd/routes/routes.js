const { Router } = require("express");
const { getObjects, postObjects, postNewObject,postDeleteObject } = require("../controllers");
const router = Router();


router.get("/", getObjects);
router.post("/objects", postObjects);
router.post("/newObject", postNewObject);
router.post("/deleteObject", postDeleteObject);

module.exports = router;