from socketserver import UDPServer, DatagramRequestHandler

ADRESS = '', 8084

class EchoHandler(DatagramRequestHandler):
    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('utf-8').strip())

      
if __name__ == '__main__':
    with UDPServer(ADRESS, EchoHandler) as server:
        server.serve_forever()