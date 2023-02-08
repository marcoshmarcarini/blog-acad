const {MongoClient} = require("mongodb")

const url = process.env.DB_HOST
const client = new MongoClient(url)

const dbName = "Teste"

async function run(){
    try{
        await client.connect()
        console.log("Conexão estabelecida")
        const db = client.db(dbName)

        const col = db.collection("post")

        let postDocument = {
            "id": 1,
            "title": "Título 1",
            "body": "Texto do post 1"
        }

        const p = await col.insertOne(postDocument)

        const myDoc = await col.findOne()

        console.log(myDoc)

    }catch(err:any){
        console.log(err.stack)
    }finally{
        await client.close()
    }
}

run().catch(console.dir)