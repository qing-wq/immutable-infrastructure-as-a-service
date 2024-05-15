run "setup" {
  command = apply

  variables {
    docker_image          = "paiondata/iiaas-ws-test:latest"
    docker_container_name = "ws-instance"
  }
}

run "test_ws" {
  module {
    source = "./harness/test-ws"
  }

  assert {
    condition     = output.ws_status == "200"
    error_message = "webservice response error"
  }
}
