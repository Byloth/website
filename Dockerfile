FROM node:22.11-alpine as builder

RUN apk add --no-cache \
    git \
 \
 && corepack enable

WORKDIR "/opt/byloth/website"
COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile \
 \
 && rm -rf /root/.cache \
           /tmp/v8-compile-cache-0

COPY ./ ./

RUN pnpm build

FROM nginx:1.27-alpine

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
