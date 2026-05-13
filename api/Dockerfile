FROM oven/bun:1-alpine
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY index.ts .
EXPOSE 3000
CMD ["bun", "run", "index.ts"]
