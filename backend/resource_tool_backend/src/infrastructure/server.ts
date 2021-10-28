import express from 'express';
import mysql from 'mysql';

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CROS対応
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, access_token'
    );

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};
app.use(allowCrossDomain);

app.listen(5000, () => {
    console.log("Start on port 5000.")
});

type User = {
    id: number
    name: string
    email: string
};

const users: User[] = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" }
];

//一覧取得
app.get('/users', (req: express.Request, res: express.Response) => {
    res.status(200).send(users);
});

// MySQL操作API(tableにデータはInsert済み)
app.get('/sql', async(req: express.Request, res: express.Response) => {
    const connection = await mysql.createConnection({
        host: 'mysql',
        user: 'sasamori',
        password: 'password',
        database: 'mydb'
    });
    connection.connect((err) => {
        if (err) {
          res.status(400).send('Connection Error');
        }
    });

    const showSql = 'SELECT * FROM member;'
    connection.query(showSql, (err, result) => {
        if (err) {
            res.status(400).send('SQL Error');
        }
        res.status(200).send(result);
    });
});