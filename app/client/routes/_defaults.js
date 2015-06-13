

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
    onRerun: function(){
        this.next();
    },

    onBeforeAction: function(){
        this.next();
    },
    action: function() {
        //if( this.ready() ) {
        this.render();
        //}else{
        //    this.render('Loading');
        //}
    },
    onAfterAction: function(){},

    onStop: function(){}
});