### ANDY-UX

There is the "andy-ux" installation process.

#### This repository was checked with the next versions of software

* Node.js v8.9.1
* Npm v5.6.0

#### Dependencies install

``` npm i -g gulp firebase-tools```

```
$ git clone https://github.com/neverminderer1/andy-ux.git
$ cd andy-ux
$ npm i
```

#### Run

* Command "gulp serve" in the project repository starts the server.
* Command "gulp" in the project repository deploys static to "dist" folder.
* Command "gulp serve:dist" in the project repository starts the server with static from .
* App works on http://localhost:3001.


#### Deploy

* Command "firebase deploy --only hosting" deploys static to firebase.
* Command "firebase deploy --only functions" deploys cloud functions to firebase.
