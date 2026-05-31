app.get("/profile", (req, res) => {

    if (!req.session.user) {

        return res.json({
            loggedIn: false
        });

    }

    res.json({
        loggedIn: true,
        user: req.session.user
    });

});