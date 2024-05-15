run "test_kong" {
  variables {
    docker_image          = "paiondata/iiaas-react-test:latest"
    docker_container_name = "react-instance"
  }

  assert {
    condition     = output.react_status == "200"
    error_message = "react response error"
  }
}
