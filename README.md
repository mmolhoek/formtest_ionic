This is test project to show that Ionic is at this moment not handling the keyboard / input elements correctly on iOS/Android

## How to use this project

### Installation

you only need to add **sudo** if your not using nvm, but you should :)

```bash
$ (sudo) npm install -g ionic cordova
```

### To run it on iOS

```bash
$ ionic cordova run ios # your might want to add this #  --livereload -- --developmentTeam="<your development time id>" --codeSignIdentity="iPhone Developer"
```

### To run it on Android

```bash
$ ionic cordova run android
```

### last test ionic version info

```bash
cli packages: (/Users/mischa/.nvm/versions/node/v7.5.0/lib/node_modules)

    @ionic/cli-utils  : 1.12.0
    ionic (Ionic CLI) : 3.12.0

local packages:

    @ionic/app-scripts : 3.0.0
    Ionic Framework    : ionic-angular 3.7.0

System:

    Node : v7.5.0
    npm  : 4.1.2
    OS   : macOS Sierra

Misc:

    backend : pro
```

### What will you see?

You will see the interface that you get when you start a blnk project, but with lots of input fields added.
I got the fields from [ https://github.com/dylanvdmerwe/ionic2-formtest | this] gitrepo (thank you dylan)
but create a new project as his is getting a bit dated :)

Refering ionic isseu can be found [ https://github.com/ionic-team/ionic/issues/6228 | here ]
