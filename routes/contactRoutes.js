const express = require("express");
const router = express.Router();
const {
    getAllContact,
    getContact,
    postContact,
    putContact,
    DeleteContact
} = require("../controllers/contactController");  // Fixed the import path

// Routes for all contacts
router.route("/")
    .get(getAllContact)
    .post(postContact);

// Routes for a specific contact by ID
router.route("/:id")
    .get(getContact)
    .put(putContact)
    .delete(DeleteContact);

module.exports = router;
