const Authentication = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) token = req.headers["X-Api-Key"];
        if (!token) {
            return res.status(400).send({ Error: "Enter x-api-key In Header" });
        }
        let checktoken = jwt.verify(token, "MiniProject");
        if (!checktoken) {
            return res.status(404).send({ Status: false, msg: "Enter Valid Token" });
        }
        else {
            console.log("Token Verified");
        }
        next();
    }
    catch (err) {
        res.status(500).send({ msg: err.message });
    }
}
module.exports.Authentication = Authentication;