module.exports = function (api, options) {
    api.afterBuild(() => {
      console.log('test');
    });
}