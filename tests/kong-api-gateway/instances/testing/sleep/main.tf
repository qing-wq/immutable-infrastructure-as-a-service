resource "null_resource" "null" {

  # sleep to wait docker-kong ready
  provisioner "local-exec" {
    command = "sleep 5"
  }
}
