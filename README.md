boilerplate for a meteor project
================================

... simple as that. This structure is considered as a starting point for smaller as well as bigger
meteor projects. Basically you will get a folder- and file structure as well as some pre-installed
packages



#### installed packages:

see [/app/.meteor/packages](app/.meteor/packages) and search for them on [Atmosphere](https://atmospherejs.com/)


#### interesting packages:

+   appcache
+   http
+   [audit-argument-checks](https://atmospherejs.com/meteor/audit-argument-checks)
+   [frozeman:global-notifications](https://atmospherejs.com/frozeman/global-notifications)
+   [frozeman:template-var](https://atmospherejs.com/frozeman/template-var)
+   [alanning:roles](https://atmospherejs.com/alanning/roles)
+   [matb33:collection-hooks](https://atmospherejs.com/matb33/collection-hooks)

+   [msavin:mongol](https://atmospherejs.com/msavin/mongol)
+   [lucendio:dlog](https://atmospherejs.com/lucendio/dlog)


#### included technologies:

+   markup: pure HTML templates
+   styling: stylus
+   programming language: JavaScript


#### Folder/Project Structure

The following project (meteor app folder structure) represents a minimum of
sections and areas - its arbitrary extensible. The comments will help to get
an idea on where to put which code.
    
    /
    |
    +-- .meteor/
    |   +-- release                     --> version of meteor core
    |   +-- packages                    --> installed packages (non core)
    |   +-- versions                    --> versions of all packages 
    |   +-- platforms                   --> which platforms were added
    |   +-- ...
    +-- lib/                            --> shared (server & client), will load before everything else, (NOTE: will load after all other lib/ sub-folders)
    |   +-- collections/                --> one collection per file
    |   +-- env-vars/                   --> explicitly defined global vars
    |   +-- ...
    +-- client/
    |   +-- lib/
    |   +-- routes/                     --> one route, controller or plugin per file [slug-path.js]
    |   |   +-- controllers/            --> controllers used by route configurations (nesting possible)
    |   |   +-- plugin/                 --> optional: router plugins
    |   |   +-- route-name.js           --> an definition of a route
    |   |   +-- ...
    |   +-- subscriptions/              --> global/startup once or API abstraction layer
    |   +-- ui/
    |   |   +-- styles/                 --> only global styles and frameworks
    |   |   +-- layouts/                --> app/page layout (template name == file name)
    |   |   |   +-- master.js           --> template logic (see: structured ES6 Blaze Template logic below)
    |   |   |   +-- master.css          --> template specific style
    |   |   |   +-- master.html         --> template structure
    |   |   |   +-- ...
    |   |   +-- pages/                  --> tapes of pages (e.g. defaults for 404, loading)
    |   |   +-- sections/               --> parts in the layout
    |   |   +-- elements/               --> reusable UI fragments
    |   |   +-- templates.helpers.js    --> global template helpers 
    |   |   +-- head.html
    |   |   +-- body.html
    |   |   +-- ...
    |   +-- main.js                     --> Meteor.startup hook (sort of like $(document).ready)
    |   +-- collections/                --> client-only collections (if needed)
    |   +-- ...
    +-- packages/
    +-- private/                        --> static files only available on the server (via Assets API)
    +-- public/                         --> static files directly callable via URL (entry point: '/')
    |   +-- img/
    |   +-- fonts/
    |   +-- ...
    +-- server/
    |   +-- lib/
    |   +-- configurations/             --> e.g accounts service config, browser policy, etc
    |   +-- allow-deny-rules/           --> one rule per file [collection.task.rule-type.js]
    |   +-- hooks/                      --> for things like 'onLogin'
    |   +-- publications/               --> one pub per file [collection.what-to-pub.js]
    |   +-- methods/                    --> one method per file [scope-name.method-name.js]
    |   +-- collections/                --> server-only collections (if needed)
    |   +-- routes/                     --> server-only routes (e.g. REST-API)
    |   +-- main.js                     
    |   +-- ...
    +-- tap-i18n/                       --> all translations defined in JSON files
    +-- ...


##### NOTE:
+   the most child (deepest ``lib/``) gets loaded first
+   files named ``main.js`` will load last
+   dont use an ``assets/``-folder within the ``public/`` or ``private/`` -folder (because meteor 
    treats these folders somehow specially, undocumented) [edit:2015-10-12 could be an outdated note]



#### structured ES6 Blaze Template logic (used as a Webstorm Code Template)


    'use strict';
    
    
    const template = Template[ '${NAME}' ];     // $NAME should be same as file name
                                                // NOTE: no '-' allowed in Blaze template names
    
    template.helpers({
    
    });
    
    
    template.events({
    
    });
    
    
    
    template.onCreated( ()=>{                   // OR: template.onCreated( function(){ 
        let instance = Template.instance();     // OR: let template = this;
        
    });
    
    
    template.onRendered( ()=>{
        let instance = Template.instance();
        
    });
    
    
    template.onDestroyed( ()=>{
        let instance = Template.instance();
        
    });



### PLEASE NOTE:

+   ``/app/.meteor/.id`` does not exist, so it has to be created (meteor does that automatically)
+   the packages: ``insecure`` and ``autopublish`` are __NOT__ installed


### Contribution

Please be aware that this given structure is foremost for the authors point of view sufficiently.
But for any kind of advise or recommendation in terms of reasonable changes, please go ahead and
create an issue or pull request.