

Router.configure({

    layoutTemplate: 'layout.master',
    loadingTemplate: 'default.loading',
    notFoundTemplate: 'default.notfound',

    yieldRegions: {
        'default.header': {to: 'header'},
        'default.footer': {to: 'footer'}
    },
    
    subscriptions: function(){
        this.subscribe('TODO');
    },

    waitOn: [
        function(){
            //returning cursor
        }
    ],

    data: function(){

    },

    onRun: function(){
        this.next();
    },
    onRerun: function(){},
    onBeforeAction: function(){
        this.next();
    },
    onAfterAction: function(){},
    onStop: function(){},

    action: function() {
        this.render();
    }
    
});