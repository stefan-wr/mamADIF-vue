
# mamADIF
MamADIF is an [ADIF (Amateur Data Interchange Format)](https://www.adif.org) file manipulation tool written as a a web-app with [VUE.JS](https://github.com/vuejs/vue). Its' currently hosted on [www.mamadif.org](http://www.mamadif.org) and runs locally in a browser.

## Features

### File support
Currently mamADIF supports the following ADIF file formats:
| ADI | ADX  |
|--|--|
| ✔ | ❌ |

### Manipulations
Currently mamADIF supports the following manipulations:

- **Delete fields**: Delete all occurences of a field from an ADIF file.
- **Rename field**: Rename all occurences of a field in an ADIF file to any given name. MamADIF does not check wether the given name is a valid ADIF QSO-field.

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

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
