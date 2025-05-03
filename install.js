module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git clone https://huggingface.co/spaces/cocktailpeanut/LGM app"
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        conda: "env",
        path: "app",
        xformers: true,
      }
    }
  }, {
    method: "shell.run",
    params: {
      conda: "env",
      path: "app",
      message: [
        "uv pip install opencv-python",
        "uv pip install -r requirements.txt",
        "uv pip install numpy==1.26.4"
      ]
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
