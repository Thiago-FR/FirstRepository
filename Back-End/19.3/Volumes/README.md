# Exercício Volumes

Editar comando (...) conforme diretório onde foi baixado:

`docker run -d --name site-trybe2 -p 8881:80 -v "/home/.../Volumes/:/usr/local/apache2/htdocs/" httpd:2.4`

Agora acesse o site mantido pelo servidor Apache acessando o endereço `http://localhost:8881/primeiro-teste.html` no navegador e lá estará o aquivo HTML que você acabou de criar.