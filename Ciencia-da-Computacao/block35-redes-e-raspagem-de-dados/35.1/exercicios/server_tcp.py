from socketserver import TCPServer, StreamRequestHandler

ADRESS = '', 8085

class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        self.wfile.write(b'Hello World! Thiago\n')
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('ascii').strip())


if __name__ == '__main__':
    with TCPServer(ADRESS, EchoHandler) as server:
        server.serve_forever()