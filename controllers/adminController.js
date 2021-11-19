const Admin = require('../models/Admin')

const getAdmin = async (req, res) => {
    try {
        const admins = await Admin.find({})
        res.json(admins)
    } catch(err) {
        res.json(err)
    }
}

const makeAdmin = async (req, res) => {
    const {email, password} = req.body;
    const adminItem = new Admin({email, password})
    
    try {
        const admin = await adminItem.save();
        res.json({message: 'Admin created successfully'});
    } catch(err) {
        res.json(err)
    }
}

const logOutAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(`6197b50375bc2fe291e6dfbd`)
        admin.isLoggedIn = false;
        await admin.save()
        res.json(admin)
    } catch(err) {
        res.json(err)
    }
}

const logInAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.body._id)
        admin.isLoggedIn = true;
        await admin.save()
        res.json(admin)
    } catch(err) {
        res.json(err)
    }
}


module.exports = {getAdmin, logOutAdmin, logInAdmin, makeAdmin}