var mysql_db = require('../../databaseConn');

exports.addUser = async (req, res, next) => {
    var db_con = await mysql_db.establishConnection();
    const id = null;
    const email = req.body.email;
    const password = req.body.password;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const gender = req.body.gender;
    const contact = req.body.contact;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    db_con.connect((err) => {
        if (err) {
            res.status(500).json({
                message: "db connection error",
                err
            });
        } else {
            const query = `INSERT INTO user_details (id, email, password, fName, lName, gender, contact, address1, address2, city, state, zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

            const values = [id, email, password, fName, lName, gender, contact, address1, address2, city, state, zip];

            db_con.query(query, values, (err, result) => {
                if (err) {
                    res.status(500).json({
                        message: "db query error",
                        err
                    });
                } else {
                    res.status(200).json({
                        message: "user added successfully",
                        result
                    });
                }
            });
        }
    });
};

exports.updateUser = async (req, res, next) => {
    var db_con = await mysql_db.establishConnection();
    
    const id = null; // Assuming id is auto-incremented and you don't want to update it
    const email = req.body.email;
    const password = req.body.password;
    const fName = req.body.fName;
    const lName = req.body.lName;
    const gender = req.body.gender;
    const contact = req.body.contact;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;

    db_con.connect((err) => {
        if (err) {
            res.status(500).json({
                message: "db connection error",
                err
            });
        } else {
            const query = `UPDATE user_details SET  fName = ?, lName = ?, gender = ?, contact = ?, address1 = ?, address2 = ?, city = ?, state = ?, zip = ? WHERE email = ?`;

            const values = [ fName, lName, gender, contact, address1, address2, city, state, zip, email];

            db_con.query(query, values, (err, result) => {
                if (err) {
                    res.status(500).json({
                        message: "db query error",
                        err
                    });
                } else {
                    res.status(200).json({
                        message: "user updated successfully",
                        result
                    });
                }
            });
        }
    });
};


exports.getUser = async (req, res, next) => {
    const db_con = await mysql_db.establishConnection();
    try {
       

        const email = req.body.email;

        const query = 'SELECT * FROM user_details WHERE email = ?';
        const params = [email];

        db_con.query(query, params, (err, result) => {
            if (err) {
                res.status(500).json({
                    message: "db query error",
                    error: err
                });
            } else {
                if (result.length > 0) {
                    // User found based on email
                    res.status(200).json({
                        message: "User details retrieved successfully",
                        data: result[0] // Assuming you want to send user data back
                    });
                } else {
                    // User not found
                    res.status(404).json({
                        message: "User not found"
                    });
                }
            }
        });
    } catch (error) {
        console.error('Error while retrieving user details:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};
