import express from  'express';

const router =express.Router();

router.get('/',(req,res) => {

    const books = [
        {
            id:1,
            name:" 13 nomera oada"
        },
        {
            id:2,
            name:"cinayet defteri"
        }
    ];

    res.json(books);
});

export default router;