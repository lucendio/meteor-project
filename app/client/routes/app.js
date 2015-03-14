



AppController = RouteController.extend({

    layoutTemplate: 'layout_master',

    yieldRegions: {
        'app_header': {to: 'header'},
        'app_footer': {to: 'footer'}
    },

    subscriptions: function(){
        // NOTE: return subscription
    },

    waitOn: [
        function(){
            // NOTE: return cursor
        }
    ],


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