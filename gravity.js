AFRAME.registerComponent('gravity', {
   schema:{
      floor:{type: 'number',default:0 } ,
      Vx:{type: 'number',default:0 } ,
      Vy:{type: 'number',default:0 } ,
      Vz:{type: 'number',default:0 } 
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
     console.log(prev);
  
  }

});
