# http server with index.html
import http.server
import socketserver
import os

# Define the Server's port
PORT = 8246

# -- This is for preventing the error: "Port already in use"
socketserver.TCPServer.allow_reuse_address = True

# -- Create the server
my_server = http.server.HTTPServer(("", PORT), http.server.SimpleHTTPRequestHandler)

# -- Activate the server; this will keep running until you
#    interrupt the program with Ctrl-C
print("(Ctrl-C /^C) to stop the server")
print(f"Serving http://localhost:{PORT}")
my_server.serve_forever()