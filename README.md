<p align="center">
    <img src="assets/images/logo.svg" width="200" alt="Nerto Vertoro"/>
</p>

<h3 align="center">
    An AI-made open-source landing page built from a Figma layout.
</h3>

<h3 align="center">
    <a href="#-get-started">Get Started</a> &bull;
    <a href="#prerequisites">Prerequisites</a> &bull;
    <a href="#local-deployment">Local</a> &bull;
    <a href="#production-deployment">Production</a> &bull;
    <a href="#license">License</a>
</h3>

<p align="center">
    <a href="https://skillicons.dev">
        <img src="https://skillicons.dev/icons?i=html,css,scss,js,vite,nginx,docker" alt="Project Stack" />
    </a>
</p>

<p align="center">
    <img src="assets/images/preview.png" alt="Desktop View"/>
</p>

---

# 🚀 Get Started

---


## Prerequisites

Make sure you have `Docker` and `Docker Compose` installed on your system:

- **Windows:** Download &
  install [Docker Desktop for Windows](https://docs.docker.com/desktop/setup/install/windows-install/) *(requires WSL 2
  enabled)*.
- **macOS:** Download & install [Docker Desktop for Mac](https://docs.docker.com/desktop/setup/install/mac-install/).
- **Linux:** Follow the official guide to install [Docker Engine](https://docs.docker.com/engine/install/)
  and [Docker Compose](https://docs.docker.com/compose/install/).

> [!NOTE]
> On Windows and macOS, `Docker Desktop` comes with `Docker Compose` pre-installed out of the box.

---

## Local Deployment

### 1. Clone the repository

```bash
git clone https://github.com/TheTyrant1/nerto-vertoro.git
```

```bash
cd nerto-vertoro
```

### 2. Start Local Container

If port `3000` is already in use by another project on your machine, you can change the host port in `docker-compose.yml`.

Container included:

- `nerto-vertoro_node` (port `3000:3000`)

```bash
docker compose up -d --build
```

### 3. Final

Done! Open your browser and navigate to http://localhost:3000.

---

## Production Deployment

---

> [!NOTE]
> **SSL / HTTPS Configuration:**
> The production Docker setup exposes Nginx on HTTP port `80`. For production environments, it is strongly recommended
> to set up an SSL/TLS certificate (HTTPS).
> You can easily set up HTTPS using **Cloudflare** (proxied DNS) or by installing **Certbot (Let's Encrypt)** on your
> host server / reverse proxy.

---

### 1. Clone the repository

```bash
git clone https://github.com/TheTyrant1/nerto-vertoro.git
```

```bash
cd nerto-vertoro
```

### 2. Start production container

Container included:

- `nerto-vertoro_nginx_prod` (port `80:80`)

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

### 3. Final

Done! Your landing page is successfully deployed on the server.

### 📦️ Updating landing page on Production (Deploy Routine)

Run these commands on the production server to rebuild and deploy updates:

```bash
git pull origin main
```

```bash
docker compose -f docker-compose.prod.yml up -d --build
```


---

# License

Nerto Vertoro is open-sourced software licensed under the [MIT license](https://opensource.org/license/mit).
