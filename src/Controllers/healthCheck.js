export default function hcroute(req,res){
    res.status(200).json({
        "health":"ok"
    })
}