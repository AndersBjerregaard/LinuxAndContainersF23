# Building the image

Go to the directory that has the Dockerfile and run the following command to build the Docker image. The -t flag lets you tag your image so it's easier to find later using the docker images command:

```
docker build . -t <your username>/node-web-app
```

The image should now be listed by Docker:
```
$ docker images

# Example
REPOSITORY                      TAG        ID              CREATED
node                            16         3b66eb585643    5 days ago
<your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
```

# Running the image

Running the image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container:

EDIT: With the current configuration, the container only listens to requests from localhost, meaning it won't respond to requests from outside the container. To do a workaround, use the host's network instead:

```
docker run -p 49160:8080 -d <your username>/node-web-app

docker run --network host -d <your username>/node-web-app
```

Get the output of the app:

```
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:8080
```

# Test

To test the app, get the port of the app that Docker mapped:

```
$ docker ps

# Example
ID            IMAGE                                COMMAND    ...   PORTS
ecce33b30ebf  <your username>/node-web-app:latest  npm start  ...   49160->8080
```

In the example above, Docker mapped the 8080 port inside of the container to the port 49160 on the machine.

Now you can call the app using curl (install if needed via: sudo apt-get install curl):

If you used the host network configuration, you'd replace the '49160' with the port that the container exposed (8080).

```
$ curl -i localhost:49160

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 12
ETag: W/"c-M6tWOb/Y57lesdjQuHeB1P/qTV0"
Date: Mon, 13 Nov 2017 20:53:59 GMT
Connection: keep-alive

Hello world
```

Alternatively, open a web browser and enter the route "http://localhost:49160/" or "http://127.0.0.1:49160/" for local ip.