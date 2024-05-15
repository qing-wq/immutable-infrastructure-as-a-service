run "setup" {
  command = apply

  variables {
    docker_image          = "paiondata/iiaas-kong-api-gateway-test:latest"
    docker_container_name = "kong-instance"
  }
}

run "wait" {
  # wait for docker-kong ready
  module {
    source = "./harness/wait"
  }
}

run "test_kong" {
  module {
    source = "./harness/setup"
  }

  assert {
    condition     = output.ui_status == "200"
    error_message = "kong ui response error"
  }

  assert {
    condition     = output.admin_api_status == "success"
    error_message = "kong admin api response error"
  }

  assert {
    condition     = output.http_port_status == "success"
    error_message = "kong http port response error"
  }
}
