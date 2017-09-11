module.exports = (ips) => {
  const start = "<html><head><title>IPs</title></head><body><div>"
  const end = "</div></body></html>"
  let lines = ""
  ips.forEach(ip => {
    lines = lines + `<div>ip: ${ip.ip} visited: ${ip.visited}</p>`
  })
  const html = start + lines + end
  console.log(html);
  return html
}
