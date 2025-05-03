module.exports = async (kernel) => {
  return {
    daemon: true,
    run: [{
      "method": "shell.run",
      "params": {
        "path": "app",
        "conda": "env",
        "env": {
          "DISTUTILS_USE_SDK": "1"
        },
        "message": [
          "{{platform === 'win32' ? 'set' : 'env'}}",
          "nvcc --version",
          "python app.py",
        ],
        "on": [{ "event": "/http:\/\/[0-9.:]+/", "done": true }]
      }
    }, {
      "method": "local.set",
      "params": {
        "url": "{{input.event[0]}}"
      }
    }, {
      "method": "proxy.start",
      "params": {
        "uri": "{{local.url}}",
        "name": "Local Sharing"
      }
    }]
  }
}
