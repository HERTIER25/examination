app.post("/register", async (req, res) => {

    const { username, password } = req.body;

    try {

        const hash = await bcrypt.hash(password, 10);

        const sql =
        "INSERT INTO Users(Username,Password) VALUES (?,?)";

        db.query(
            sql,
            [username, hash],
            (err, result) => {

                if (err) {
                    return res.status(500).json(err);
                }

                res.json({
                    message: "User Registered"
                });
            }
        );

    } catch (error) {

        res.status(500).json(error);

    }

});