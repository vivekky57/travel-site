exports.handler = function(event,context, callback){
    const secretContent =`
    <h3>Welcome To The Sceret area.</h3>
    <p>Here we can tell  you that sky is<strong>blue</strong>, and two plus two equal to four</p>
    `

    let body

    if( event.body){
        body = JSON.parse(event.body)

    } else {
        body = {}

    }

    if(body.password == "javascript"){
        callback(null, {
            statusCode:200, //sucesss code=200, not found=404
            body: secretContent
        })
    } 
    else{
        callback(null, {
            statusCode:401, //unauthorized
        })
    }


}
