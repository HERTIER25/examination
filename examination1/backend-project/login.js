app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const sql =
    "SELECT * FROM Users WHERE Username=?";

    db.query(sql, [username], async (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.json({
                message: "User not found"
            });
        }

        const user = result[0];

        const match =
        await bcrypt.compare(
            password,
            user.Password
        );

        if (!match) {
            return res.json({
                message: "Invalid password"
            });
        }

        req.session.user = {
            id: user.UserID,
            username: user.Username
        };

        res.json({
            message: "Login Success"
        });

    });

});