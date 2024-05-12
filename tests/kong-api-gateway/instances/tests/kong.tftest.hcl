run "setup_tests" {
  module {
    source = "./testing/setup"
  }
}

run "test_kong" {
  # command = apply

  variables {
    docker_image          = "paiondata/iiaas-kong-api-gateway-test:latest"
    docker_container_name = "kong-instance"
  }

  assert {
    condition     = run.setup_tests.ui_status == "200"
    condition     = run.setup_tests.ui_status == "200"
    error_message = "kong ui response error"
  }

  assert {
    condition     = run.setup_tests.admin_api_status == "success"
    condition     = run.setup_tests.admin_api_status == "success"
    error_message = "kong admin api response error"
  }

  assert {
    condition     = run.setup_tests.http_port_status == "success"
    condition     = run.setup_tests.http_port_status == "success"
    error_message = "kong http port response error"
  }
}