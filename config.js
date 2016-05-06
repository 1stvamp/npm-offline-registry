
var defaultConfig = {
  NPM_PATH       : process.env.HOME + '/.npm',
  REGISTRY_NAME  : 'registry.npmjs.org',
  PORT: 8234,
  ENABLE_NPM_FAILOVER: true
};

var config = {};

Object.keys( defaultConfig ).forEach( function(v){
  config[v] = process.env[v] || defaultConfig[v];
});


config.LOCAL_REGISTRY = 'localhost:' + config.PORT;
if( config.ENABLE_NPM_FAILOVER == 'false' ){
  config.ENABLE_NPM_FAILOVER = false;
}

module.exports = config;

