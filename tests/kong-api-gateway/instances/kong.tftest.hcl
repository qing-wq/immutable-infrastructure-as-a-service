variables {
  docker_image          = "paiondata/iiaas-kong-api-gateway-test:latest"
  docker_container_name = "kong-instance"
}

run "setup" {
  command = apply

  module {
    source = "./testing"
  }

  assert {
    condition     = output.ui_status == "200"
    error_message = "error assert"
  }

  assert {
    condition     = output.admin_api_status == "success"
    error_message = "error assert"
  }

  assert {
    condition     = output.http_port_status == "success"
    error_message = "error assert"
  }
}