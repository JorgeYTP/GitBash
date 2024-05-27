const VaultDweller = require("../models/vault_dweller"); 
module.exports = {
    register (req, res)
    {
        const vault_dweller = req.body; 
        VaultDweller.create(vault_dweller, (err, data)=> 
        {
            if(err)
                {
                    return res.status(501).json ({
                        succes:false, 
                        mesagge :"Todo se fue al diablo con la creacion del merodeador", 
                        error : err
                    })
                
                    
                }

                return res.status(201).json({
                    succes :true , 
                    message :"Todo salio al vergazo", 
                    data : data
                })
        });
    }
}