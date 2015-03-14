

Router.configure({

    layoutTemplate: 'layout_master',
    loadingTemplate: 'default_loading',
    notFoundTemplate: 'default_notfound',

    yieldRegions: {
        'default_header': {to: 'header'},
        'default_footer': {to: 'footer'}
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
        //if( this.ready() ) {
            this.render();
        //}else{
        //    this.render('Loading');
        //}
    }
    
});