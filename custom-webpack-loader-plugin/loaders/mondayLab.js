const loaderUtils = require('loader-utils')

module.exports = function (source) {
    // const options = loaderUtils.getOptions(this)

    const options = this.getOptions()

    const result = source.replace('monday', options.name)

    this.callback(null, result)
}