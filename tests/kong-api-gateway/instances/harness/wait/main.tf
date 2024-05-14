resource "null_resource" "null" {
  # sleep to wait docker-kong ready
  provisioner "local-exec" {
    command = "bash ../scripts/wait-on.sh"
  }
}
