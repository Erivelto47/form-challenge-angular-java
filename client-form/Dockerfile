FROM node:12.0.0 AS compile-image

RUN npm --force install -g yarn

WORKDIR /opt/ng
COPY package.json yarn.lock ./
RUN yarn install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

FROM nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /opt/ng/dist/client-form /usr/share/nginx/html
