module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git clone https://huggingface.co/spaces/6Morpheus6/LGM app"
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",
        path: "app",
        xformers: true,
        triton: true
      }
    }
  }, {
    method: "shell.run",
    params: {
      venv: "env",
      path: "app",
      message: [
        "python -m pip install pip==23.3.0",
        "uv pip install opencv-python numpy==1.26.4",
        "uv pip install -r requirements.txt"
      ]
    }
  }, {
    method: "notify",
    params: {
      html: "Click the 'start' tab to get started!"
    }
  }]
}
