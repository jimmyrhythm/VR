AFRAME.registerComponent('gravity', {
   schema:{
      floor:{type: 'number',default:0 } ,
      x:{type: 'number',default:0 } ,
      y:{type: 'number',default:0.1 } ,
      z:{type: 'number',default:0 } 
},
  init: function () {
    var el = this.el;
      var name=  el.getAttribute('id');
      label=document.createElement('a-entity');
      label.setAttribute('text',"value: "+ name + ";font:monoid; color:white; width:4 ; ");
      label.setAttribute('position',"0.5 0.95 0");
      label.setAttribute('class',"nametag");
      el.appendChild(label); 
  },
  tick: function(){
  var prev=this.el.getAttribute('position');
  var vel=this.el.getAttribute('gravity');
   if (prev.y>0)
   {prev.y+=vel.y;
   vel.y+=-0.001;}
   this.el.setAttribute('position',prev);
   this.el.setAttribute('gravity',vel);
     // console.log(prev);
  
  }

});
