export default function handler(req:any, res:any) {
    req.body=JSON.parse(req.body);

    res.setHeader("Access-Control-Allow-Origin", "https://localhost:443");
    res.setHeader('Access-Control-Allow-Methods', 'get');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    if(req.method!='get')
     return res.end();

    res.json({})

}