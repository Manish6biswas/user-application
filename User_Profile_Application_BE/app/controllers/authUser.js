var mysql_db = require('../../databaseConn');

exports.authUser = async (req, res, next) => {
    const db_con = await mysql_db.establishConnection();
    try {
        const email = req.body.email;
        const password = req.body.password;
        const query = 'SELECT * FROM user_details WHERE email = ? AND password = ?';
        const params = [email,password];

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
                        data: {isAuth: true} // Assuming you want to send user data back
                    });
                } else {
                    // User not found
                    res.status(404).json({
                        message: "User not found",
                        data: {isAuth: false}
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