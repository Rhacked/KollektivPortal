// app/routes.js
// require mongodb models

module.exports = function(app){
    // server routes =====================================================
    
    // frontend routes ===================================================
    
    //root
    app.get('/', function(req, res){
        res.sendfile('.public/index.html')
    })
}