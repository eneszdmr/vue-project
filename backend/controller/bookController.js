const getAllBooks = (req,res)=>{

    const books = [
        {
            id:1,
            name:" 13 nomera oada"
        },
        {
            id:2,
            name:"cinayet defteri"
        },
        {
            id:3,
            name:"Hayal Meyal 23"
        }
    ];

    res.json(books);

}


export {
    getAllBooks
}