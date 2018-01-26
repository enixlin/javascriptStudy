//define的类名，一定要严格按照包的层次路径去编写  
Ext.define('js/ExtJs/ux/MyWindow',{  
    extend:'Ext.window.Window',    //继承Ext.window.Window  
    title:'我是动态加载进来的',  
    height:300,  
    width:400,  
    constrain:true,  
    modal:true,  
    html:'窗体内容',  
    renderTo:Ext.getBody()  
});  