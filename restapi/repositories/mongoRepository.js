class MongoRepository {
    constructor(){
        this.db = []
        this.CreateDocument = (doc) => {
            const newDoc = {documentId: doc, updatedAt:new Date(), htmlText:''}
            this.db.push(newDoc)
            return newDoc
        }
        this.GetDocument = (documentId) => {
            const filtered = this.db.filter(d => d.documentId == documentId)
            const len = filtered.length
            return len ? filtered[len-1]: null
        }
    }
}

exports.repository = MongoRepository