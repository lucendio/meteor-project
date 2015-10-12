changelog
=========


### NEXT (METEOR@1.2.0.2 )

+   added ``/client/routes/controllers/`` for an appropriate place for controllers (also
    to get loaded before all route definitions)
+   updated to Meteor 1.2 and latest package deps
+   added a structure overview with annotations
+   added example for ES6 blaze template logic code structure (in README)
+   added print style


### 0.5.0 (METEOR@1.1.0.2)

+   removed folder public/assets because meteor build tool already uses this folder name
+   added missing app templates (header, footer)
+   merged ``shared/`` into ``lib/`` to ensure the containing files will
    load before ``client/`` and ``server/``, and to have only one level-1 folder which contains
    shared code
+   added package ``meteorhacks:npm``
+   updated README


### 0.4.0 (METEOR@1.1.0.2)

+   bump to meteor v1.1.0.2
+   API updates (blaze template callbacks)
+   added instance references in template hooks
+   Iron Routers Hook onRerun also needs a this.next();
+   added place holder stylus files in ui/elements


#### 0.3.0 (METEOR@1.0.3.2)

+   introduced routing organisation based on RouteController
+   re-organizing styling files
+   added little stylus framework called [jeed](https://github.com/mojotech/jeet)
+   added packages: accounts-base, accounts-password
+   updating README


#### 0.2.0 (METEOR@1.0.3.2)

+   added boilerplate files to provide a full commitable folder structure
+   updated README, LICENSE
+   renamed 'package' folder into 'packages', because it was wrong


#### 0.1.1 (METEOR@1.0.3.2)

+   replaced the dot as separator in file and template names with an underscore
+   updated meteor with provided patch (1.0.3.2)
+   updated README


#### initial commit - 0.1.0 (METEOR@1.0.3.1)

+   packages added: iron:router, aldeed:collection2, tap:i18n, raix:handlebar-helpers,
    (core) meteor-platform, (core) stylus, (core) browser-policy, (core) reactive-var
+   packages removed: ``autopublish``, ``insecure``