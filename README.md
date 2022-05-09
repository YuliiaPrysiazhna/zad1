# Zadanie 1
## Wykonała: Yuliia Prysiazhna.
## Grupa: TI6.2
### Polecenia do pobudowy obrazu kontenera:
`cd chmurowe_zad1`

`docker build -t juli99murr/nodejs-image .`

Uruhamiam kontener:

`docker run --name nodejs-image -p 80:8080 -d juli99murr/nodejs-image`

Przy uruchomieniu otrzymujemy wiadomości:

![image](https://user-images.githubusercontent.com/103123474/167443983-4ca72e64-b180-4502-a1d6-4be573ebd92d.png)

Sprawdzamy czy udało się zrobić zadanie, otwieramy stronę:

![image](https://user-images.githubusercontent.com/103123474/167444238-68196dd9-9e62-43fb-a41d-e2237bd5affd.png)

Żeby zobaczyć nasz obraz wpisujemy polecenie: 

`docker images -a`

oraz

`docker history juli99murr/nodejs-image`

### Buduję obrazy kontenera:
Na początek potrzebuję pobrać obraz qemu:

`docker run --rm --privileged multiarch/qemu-user-static --help —reset -p yes`

Następnie tworze sterownik:

`docker buildx create --driver docker-container`

oraz polecenie do wykorzystania sterownika: 

`docker buildx use epic_driscoll`

#### Budowa obrazów: 

- linux/arm/v7:

`docker buildx build -t juli99murr/zad:zad_armv7 --platform linux/arm/v7 --push .`

[juli99murr/zad:zad_armv7](https://hub.docker.com/layers/210694058/juli99murr/zad/zad_armv7/images/sha256-07d848d23dd1c2c962994e23f0b3f948c6cfc81950c2f2ea92045921c41100ce?context=repo)

- linux/arm64/v8:

`docker buildx build -t juli99murr/zad:zad_armv64 --platform linux/arm64/v8 --push .`

[juli99murr/zad:zad_armv64](https://hub.docker.com/layers/210697238/juli99murr/zad/zad_armv64/images/sha256-d3cb015109cb0ebbba187803ed0c66e5d616ec76426b63f2f2d4a87f6a9a89be?context=repo)

- linux/amd64:

`docker buildx build -t juli99murr/zad:zad_amd64 --platform linux/amd64 --push .`

[juli99murr/zad:zad_amd64](https://hub.docker.com/layers/210699146/juli99murr/zad/zad_amd64/images/sha256-cd5bea305791fbd326c2454ba8f5b6259af19787553f7b210f1f4d1a22afdcf3?context=repo)

Dodajemy actions Secrets:

![image](https://user-images.githubusercontent.com/103123474/167491365-d66d369a-6f8c-4155-ba7b-940b11c3ecd5.png)

Oraz access token:

![image](https://user-images.githubusercontent.com/103123474/167491486-91606037-12ee-4c2e-aa96-6b7f8729819b.png)

Na końcu yml plik:
![image](https://user-images.githubusercontent.com/103123474/167491261-86a7fce5-e630-44b8-a508-78fb567f4afd.png)
