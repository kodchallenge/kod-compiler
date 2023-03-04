# kod-compiler
 Kod Compiler project



## with docker

    Dockerfile
    docker build -t app .
    docker run -t -d app
    docker ps
    # burada container id olacak onu al
    docker exec -it containerId sh -c "node /path/to/file.js"


`Ana makinadan container a kopyalama`
    docker cp foo.txt container_id:/foo.txt

`Container dan ana makinaya kopyalama`
    docker cp container_id:/foo.txt foo.txt

`Remove all  container`
    docker stop $(docker ps -aq)