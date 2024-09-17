import { express } from "express";
import { router } from "express.Router";
import { connection } from "../configs/connectDB";

//get all data
// define api get, post, patch, put, delete

/*  async .. await: chờ cái đầu connect rồi ms chạy tiếp */
Router.get('/student', async (req, res) => {
    try {
        await connection.connect();
        const result = await connection.request().query('select * from Student');
        const test = result.recordset;

        res.json(test);
        console.log(test);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;