react_status=$(curl -I -m 10 -o /dev/null -s -w %{http_code} localhost:3000)
jq -n --arg react_status "$react_status" '{"react_status": $react_status}'