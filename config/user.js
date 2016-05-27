module.exports = {
    username : undefined,
    pass : undefined,
    setData : function(data){
        this.username = data.username;
        this.pass = data.password;
    },
    setNull :  function(){
        this.username = undefined;
        this.pass = undefined;
    }
}