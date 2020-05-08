# todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Deploy to gh-pages
```
git checkout --orphan gh-pages
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'Deploy'
git push origin HEAD:gh-pages --force
rm -r dist
git checkout -f master
git branch -D gh-pages
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
