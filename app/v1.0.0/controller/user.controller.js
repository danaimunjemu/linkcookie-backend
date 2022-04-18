const bcrypt = require('bcryptjs');

const User = require("./../model/user.model");
const JwtHelper = require("./../helper/jwt.helper")
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


// exports.authenticate = (req, res) => {
//     User.findOne({ username: req.body.username }).then((user) => {
//         // if user does not exist save the user
//         if (!!user) {
//             let result = bcrypt.compareSync(req.body.password, user.password)
//             if (result) {
//                 let token = JwtHelper.signToken({ id: user._id, role: user.role, name: user.name })
//                 res.send({ user, token })
//             } else {
//                 res.status(401).send({ message: "incorrect password" })
//             }

//         } else {
//             res.status(401).send({ message: "User with that email does not exist" })
//         }
//     }).catch((error) => {
//         res.status(500).send({ error })
//     })
// }

exports.authenticate = (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        // if user does not exist save the user
        if (!!user) {
            let result = bcrypt.compareSync(req.body.password, user.password)
            if (result) {
                let token = JwtHelper.signToken({ id: user._id, userType: user.userType, name: user.username })
                res.send({ user, token })
            } else {
                res.status(401).send({ message: "incorrect password" })
            }

        } else {
            res.status(401).send({ message: "User with that email does not exist" })
        }
    }).catch((error) => {
        res.status(500).send({ error })
    })
}

exports.create = async(req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {

            // if user does not exist save the user
            if (!!!user) {
                if (!!req.body.password)
                    req.body.password = bcrypt.hashSync(req.body.password, salt);
                    
                // req.body.name = req.body.first_name + ' ' + req.body.last_name;

                new User(req.body)
                    .save()
                    .then((user) => {
                        let token = JwtHelper.signToken({ id: user._id, userType: user.userType, name: user.username })
                        res.status(200).send({ user, token })
                    })
                    .catch((error) => {
                        res.send(error);
                    });
            } else {
                res.status(403).send({ message: "A record with the same email exists" })
            }

        })
        .catch((error) => {
            res.send(error);
        })
};

exports.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.send(error);
        });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.send(error);
        });
};

exports.findAll = (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.send(error);
        });
};

exports.delete = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.send(error);
        });
};