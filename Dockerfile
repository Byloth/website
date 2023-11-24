FROM node:20.9-alpine as builder

RUN apk add --no-cache \
    git

WORKDIR "/opt/byloth/website"
COPY . ./

ARG BACKEND_URL
ARG HCAPTCHA_SITE_KEY
RUN yarn ci \
 && yarn build

FROM nginx:1.25-alpine

COPY --from=builder /opt/byloth/website/dist/ /usr/share/nginx/html
COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

ARG VERSION
ARG COMMIT_SHA
ARG CREATE_DATE

LABEL org.opencontainers.image.title="Byloth's Website"
LABEL org.opencontainers.image.description="My personal static-generated website; based on Vue.js & VitePress. 🌐"
LABEL org.opencontainers.image.licenses="GPL-3.0"
LABEL org.opencontainers.image.version="${VERSION}"
LABEL org.opencontainers.image.revision="${COMMIT_SHA}"
LABEL org.opencontainers.image.source="https://github.com/Byloth/website"
LABEL org.opencontainers.image.url="org.opencontainers.image.url"
LABEL org.opencontainers.image.authors="Matteo Bilotta <me@byloth.dev>"
LABEL org.opencontainers.image.vendor="Bylothink"
LABEL org.opencontainers.image.created="${CREATE_DATE}"
