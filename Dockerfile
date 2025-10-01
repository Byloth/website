FROM oven/bun:1.2-alpine AS builder

RUN apk add --no-cache \
    git

WORKDIR "/opt/byloth/website"
COPY ./package.json ./package.json
COPY ./bun.lock ./bun.lock
RUN bun install --frozen-lockfile \
 \
 && rm -rf /root/.bun

COPY ./ ./

RUN bun run build

FROM nginx:1.29-alpine

COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR "/usr/share/nginx/html"
COPY --from=builder /opt/byloth/website/dist/ ./

ARG VERSION
ARG COMMIT_SHA
ARG CREATE_DATE

LABEL org.opencontainers.image.title="Byloth's Website"
LABEL org.opencontainers.image.description="My personal static-generated website; based on Vue.js & VitePress. 🌐"
LABEL org.opencontainers.image.licenses="GPL-3.0"
LABEL org.opencontainers.image.version="${VERSION}"
LABEL org.opencontainers.image.revision="${COMMIT_SHA}"
LABEL org.opencontainers.image.source="https://github.com/Byloth/website"
LABEL org.opencontainers.image.url="https://www.byloth.dev/"
LABEL org.opencontainers.image.authors="Matteo Bilotta <me@byloth.dev>"
LABEL org.opencontainers.image.vendor="Bylothink"
LABEL org.opencontainers.image.created="${CREATE_DATE}"
